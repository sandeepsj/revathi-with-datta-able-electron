const electron = require("electron");
const ipcMain = electron.ipcMain;
const db = require("./dblib").table;
const { dialog } = require("electron");
const schema = require("./schemaBuilder");
var resChannel;
var subWindowStudentCardStack = [];
var specialEvt;

ipcMain.on("getReq", (evt, table) => {
  resChannel = `getRes-${table}`;
  db[table]
    .get()
    .then((rows) => {
      evt.reply(resChannel, rows);
    })
    .catch((err) => evt.reply(resChannel, err));
  if (table === schema.STUDENT) specialEvt = evt;
});
ipcMain.on("deleteReq", (evt, table, key) => {
  resChannel = `deleteRes-${table}`;
  db[table]
    .delete(key)
    .then((res) => evt.reply(resChannel, 1))
    .catch(resChannel, 0);
});
ipcMain.on("addReq", (evt, table, values) => {
  resChannel = `addRes-${table}`;
  db[table]
    .add(values)
    .then((res) => evt.reply(resChannel, 1))
    .catch((err) =>
      dialog.showErrorBox(
        err,
        "KNEX: Subject db error(make sure no duplicate entries)",
        err.code
      )
    );
});
ipcMain.on("updateReq", (evt, table, values) => {
  console.log(Object.keys(values).length);
  if (Object.keys(values).length === 1) {
    evt.reply(resChannel, 1);

    return;
  }
  resChannel = `updateRes-${table}`;
  subWindowStudentCardStack.push(values.StudentID);
  db[table]
    .update(values)
    .then((res) => {
      console.log("success");
      evt.reply(resChannel, res);
      specialEvt.reply("StudentUpdated", 1);
    })
    .catch((err) => dialog.showErrorBox(err.code, " : ", err, "///", table));
});
ipcMain.on("newAdmission", (evt, values) => {
  const studentDetails = {};
  const admissionDetails = {};
  Object.keys(values).map((key) => {
    if (key === "admissionDate" || key == "subjects")
      admissionDetails[key] = values[key];
    else studentDetails[key] = values[key];
  });
  console.log(admissionDetails, "ASDf");
  db.Student.getNextId().then((nextId) => {
    admissionDetails.studentId = nextId;
    db["NewAdmission"]
      .add(studentDetails, admissionDetails)
      .then((res) => evt.reply("newAdmissionRes", 1))
      .catch((err) => console.log(err));

    // db["Student"]
    //   .add(studentDetails)
    //   .then((res) => {
    //     db["Admission"]
    //       .add(admissionDetails)
    //       .then((res) => evt.reply("newAdmissionRes", 1))
    //       .catch(console.log("Error for admissionDetails", admissionDetails));
    //   })
    //   .catch(console.log("Error for studentDetails"));
  });
});
ipcMain.on("nextAdmissionNo", (evt, values) => {
  db.Student.getNextId().then((nextId) => {
    evt.reply("Res-nextAdmissionNo", nextId);
  });
});
ipcMain.on("newSubWindow-StudentCard", (evt, id) => {
  if (id == undefined) console.log(id);
  subWindowStudentCardStack.push(id);
});
ipcMain.on("subWindowReq-StudentCard", (evt, studentID) => {
  if (studentID === undefined) {
    studentID = subWindowStudentCardStack.pop();
    if (studentID === undefined) {
      dialog.showErrorBox("studentId undefined", "studentId undefined");
    }
  }
  StudentCard = {};
  db.Student.get(studentID).then((res) => {
    StudentCard["personalDetails"] = { ...res[0] };
    db.Admission.get(studentID)
      .then((res0) => {
        StudentCard["admissionDetails"] = [...res0];
      })
      .then(() => {
        evt.reply("Res-StudentCard", StudentCard);
      });
  });
});
