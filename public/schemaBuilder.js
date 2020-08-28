const knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: "./database/revathi.db",
  },
  useNullAsDefault: true,
});

knex.schema
  .hasTable("Student")
  .then((exists) => {
    if (!exists) {
      return knex.schema
        .createTable("Student", (table) => {
          table.increments("StudentID").primary();
          table.string("Student's Name", 100);
          table.string("School", 100);
          table.date("Date-of-Birth");
          table.string("Gender", 30);
          table.string("Phone", 20);
          table.string("Alternate Phone", 20);
          table.string("Email", 100);
          table.string("Father's Name", 100);
          table.string("Mother's Name", 100);
          table.string("Father's Occupation", 100);
          table.string("Mother's Occupation", 100);
          table.integer("Monthly Income");
          table.string("pState", 100);
          table.string("pDistrict", 100);
          table.string("pCity", 100);
          table.string("pHomeStreetLandMark", 200);
          table.string("pPincode", 20);
          table.string("rState", 100);
          table.string("rDistrict", 100);
          table.string("rCity", 100);
          table.string("rHomeStreetLandMark", 200);
          table.string("rPincode", 20);
        })
        .then("Successfully created Table")
        .catch("Student table could not be created");
    }
  })
  .catch(console.log("Student Table already exists"));

knex.schema
  .hasTable("Admission")
  .then((exists) => {
    if (!exists) {
      return knex.schema
        .createTable("Admission", (table) => {
          table.increments("AdmissionNo");
          table.integer("StudentID").references("Student.StudentID");
          table.string("Subject");
          table.date("Admission Date");
          table.date("Closed Date");
          table.string("Status", 20);
        })
        .catch("Admission table could not be created");
    }
  })
  .catch(console.log("Admission Table already exists"));

knex.schema
  .hasTable("Subject")
  .then((exists) => {
    if (!exists) {
      return knex.schema
        .createTable("Subject", (table) => {
          table.string("Subject").primary();
          table.integer("Fee");
        })
        .catch("Subject table could not be created");
    }
  })
  .catch(console.log("Subject Table already exists"));

exports.KNEX = knex;
exports.SUBJECT = "Subject";
exports.ADMISSION = "Admission";
exports.STUDENT = "Student";
