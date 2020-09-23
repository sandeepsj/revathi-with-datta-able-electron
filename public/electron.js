const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;
const dialog = electron.dialog;
const Papa = require("papaparse");
const fs = require("fs");
const db = require("./dblib").table;
const schema = require("./schemaBuilder");

const path = require("path");
const url = require("url");
const isDev = require("electron-is-dev");
require("./ipcRouter");

let mainWindow;
function BulkImportScript(path) {
  const file = fs.createReadStream(path);
  Papa.parse(file, {
    header: true,
    complete: (results) => {
      //console.log(results);
      const students = [];
      const studentMap = {
        "Student's Name": "Student's Name",
        School: "School",
        "Date of Birth": "Date-of-Birth",
        Gender: "Gender",
        "Phone Number": "Phone",
        "Land Line/ Alternate Phone Number": "Alternate Phone",
        Email: "Email",

        "Father's/Guardian's Name": "Father's Name",
        "Mother's Name": "Mother's Name",
        "Father's Occupation": "Father's Occupation",
        "Mother's Occupation": "Mother's Occupation",
        "Monthly Income": "Monthly Income",
        "State (Permanent)": "pState",
        "District (Permanent)": "pDistrict",
        "City (Permanent)": "pCity",
        "Home, street, landmark (Permanent)": "pHomeStreetLandMark",
        "Pin code (Permanent)": "pPincode",
        "State (Residential)": "rState",
        "District (Residential)": "rDistrict",
        "City (Residential)": "rCity",
        "Home, Street, Landmark (Residential)": "rHomeStreetLandMark",
        "Pin Code (Residential)": "rPincode",
      };
      const admission = [];
      const admissionMap = {
        "Date of Admission": "Admission Date",
        "Choose the Subjects currently enrolled in.": "",
      };
      var studentID = 1;
      results.data.map((student) => {
        const newStu = {};
        Object.keys(student).map((field) => {
          if (studentMap[field]) {
            newStu[studentMap[field]] = student[field];
          }
        });
        student["Choose the Subjects currently enrolled in."]
          .split(",")
          .map((subject) => {
            admission.push({
              StudentID: studentID,
              Subject: subject.trim(),
              "Admission Date": student["Date of Admission"],
            });
          });
        students.push(newStu);
        studentID++;
      });
      //console.log(admission);
      db[schema.STUDENT]
        .addBulk(students)
        .then((res) => {
          db[schema.ADMISSION]
            .addBulk(admission)
            .then((res) => console.log(res, "Successfully imported"))
            .catch(console.log("Failed to import"));
        })
        .catch((res) => console.log(res, "Failed"));
    },
  });
}
function createWindow() {
  var menu = Menu.buildFromTemplate([
    {
      label: "File",
      submenu: [
        {
          label: "Import Data",

          click() {
            dialog.showOpenDialog({ properties: ["openFile"] }).then((res) => {
              if (!res.canceled) {
                const path = res.filePaths[0];
                BulkImportScript(path);
              } else {
                dialog.showErrorBox("Err:Could not Import File");
              }
            });
          },
        },
        {
          label: "Toggle Developer Tools",
          accelerator: (function () {
            if (process.platform == "darwin") return "Alt+Command+I";
            else return "Ctrl+Shift+I";
          })(),
          click: function (item, focusedWindow) {
            if (focusedWindow) focusedWindow.toggleDevTools();
          },
        },
        {
          label: "Exit",
          click() {
            app.quit();
          },
        },
      ],
    },
  ]);
  Menu.setApplicationMenu(menu);
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );
  mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
