const schema = require("./schemaBuilder");
const knex = schema.KNEX;
class Subject {
  get = function () {
    return knex
      .select()
      .table(schema.SUBJECT)
      .catch((err) => "Err");
  };

  add = function (values) {
    return knex(schema.SUBJECT)
      .insert({ Subject: values.subject, Fee: values.fee })
      .catch("Error on inserting into subjects");
  };

  delete = function (sub) {
    return knex(schema.SUBJECT)
      .where({ Subject: sub })
      .del()
      .catch("Error on deleting subject");
  };
  update = function (values) {
    console.log(values);
    r;
  };
}
class Student {
  get = function (studentID) {
    if (studentID == undefined) {
      return knex
        .select()
        .table(schema.STUDENT)
        .catch((err) => err);
    } else {
      return knex(schema.STUDENT).where("StudentID", studentID);
    }
  };
  addBulk = function (values) {
    return knex(schema.STUDENT).insert(values);
  };
  add = function (values) {
    return knex(schema.STUDENT)
      .insert({
        "Student's Name": values.studentsName,
        School: values.school,
        "Date-of-Birth": values.dateOfBirth,
        Gender: values.gender,
        Phone: values.phone,
        "Alternate Phone": values.alternatePhone,
        Email: values.email,
        "Father's Name": values.fathersName,
        "Father's Occupation": values.fathersOccupation,
        "Mother's Name": values.mothersName,
        "Mother's Occupation": values.mothersOccupation,
        "Monthly Income": values.mothlyIncome,
        pState: values.Pstate,
        pDistrict: values.Pdistrict,
        pCity: values.Pcity,
        pPincode: values.Ppincode,
        pHomeStreetLandMark: values.PhomeStreetLandMark,
        rState: values.Rstate,
        rDistrict: values.Rdistrict,
        rCity: values.Rcity,
        rPincode: values.Rpincode,
        rHomeStreetLandMark: values.RhomeStreetLandMark,
      })
      .catch((err) => console.log(err));
  };
  getNextId = function () {
    return knex(schema.STUDENT)
      .max("StudentID")
      .then((res) => {
        if (res === null) return 1;
        return res[0]["max(`StudentID`)"] + 1;
      })
      .catch((err) => err);
  };
  update = function (values) {
    const val = {};
    Object.keys(values).map((key) => {
      if (key !== "StudentID") {
        val[key] = values[key];
      }
    });
    console.log(val, values.StudentID);
    return knex(schema.STUDENT)
      .where({ StudentID: parseInt(values.StudentID) })
      .update({ ...values, StudentID: undefined });
  };
}
class Admission {
  get = function (studentID) {
    if (studentID == undefined) {
      return knex
        .select()
        .table(schema.ADMISSION)
        .catch((err) => err);
    } else {
      return knex(schema.ADMISSION).where({ StudentID: studentID });
    }
  };
  addBulk = function (values) {
    return knex(schema.ADMISSION).insert(values);
  };
  add = function (values) {
    var arr = [];
    values.subjects.map((subject) => {
      arr.push({
        StudentID: values.studentId,
        Subject: subject,
        "Admission Date": values.admissionDate,
        Status: "OPEN",
      });
    });
    return knex(schema.ADMISSION)
      .insert(arr)
      .catch((err) => console.log(err));
  };
}

class NewAdmission {
  add = function (studentDetails, admissionDetails) {
    var arr = [];
    admissionDetails.subjects.map((subject) => {
      arr.push({
        StudentID: admissionDetails.studentId,
        Subject: subject,
        "Admission Date": admissionDetails.admissionDate,
      });
    });
    return knex
      .transaction(function (trx) {
        return trx(schema.STUDENT)
          .insert({
            "Student's Name": studentDetails.studentsName,
            School: studentDetails.school,
            "Date-of-Birth": studentDetails.dateOfBirth,
            Gender: studentDetails.gender,
            Phone: studentDetails.phone,
            "Alternate Phone": studentDetails.alternatePhone,
            Email: studentDetails.email,
            "Father's Name": studentDetails.fathersName,
            "Father's Occupation": studentDetails.fathersOccupation,
            "Mother's Name": studentDetails.mothersName,
            "Mother's Occupation": studentDetails.mothersOccupation,
            "Monthly Income": studentDetails.mothlyIncome,
            pState: studentDetails.Pstate,
            pDistrict: studentDetails.Pdistrict,
            pCity: studentDetails.Pcity,
            pPincode: studentDetails.Ppincode,
            pHomeStreetLandMark: studentDetails.PhomeStreetLandMark,
            rState: studentDetails.Rstate,
            rDistrict: studentDetails.Rdistrict,
            rCity: studentDetails.Rcity,
            rPincode: studentDetails.Rpincode,
            rHomeStreetLandMark: studentDetails.PhomeStreetLandMark,
            School: studentDetails.school,

            Phone: studentDetails.phone,
          })
          .then(function () {
            return trx(schema.ADMISSION).insert(arr);
          })
          .then(() => {
            trx.commit();
            console.log("YEs");
          })
          .catch(function (e) {
            trx.rollback();
            console.log(e);
            throw e;
          });
      })
      .then(console.log("Success"))
      .catch((err) => console.log(err));
  };
}
exports.table = {
  Subject: new Subject(),
  Student: new Student(),
  Admission: new Admission(),
  NewAdmission: new NewAdmission(),
};
