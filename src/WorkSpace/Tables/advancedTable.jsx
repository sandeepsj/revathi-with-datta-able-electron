import React from "react";
import MaterialTable from "material-table";

export default function MaterialTableDemo(props) {
  const [state, setState] = React.useState({
    columns: [
      { title: "StudentID", field: "StudentID" },
      { title: "Student's Name", field: "Student's Name" },
      { title: "School", field: "School" },
      { title: "Date-of-Birth", field: "Date-of-Birth" },
      { title: "Gender", field: "Gender" },
      { title: "Phone", field: "Phone" },
      { title: "Alternate Phone", field: "Alternate Phone" },
      { title: "Email", field: "Email" },
      { title: "Father's Name", field: "Father's Name" },
      { title: "Mother's Name", field: "Mother's Name" },
      { title: "Father's Occupation", field: "Father's Occupation" },
      { title: "Mother's Occupation", field: "Mother's Occupation" },
      { title: "Monthly Income", field: "Monthly Income" },
      { title: "pState", field: "pState" },
      { title: "pDistrict", field: "pDistrict" },
      { title: "pCity", field: "pCity" },
      { title: "pHomeStreetLandMark", field: "pHomeStreetLandMark" },
      { title: "pPincode", field: "pPincode" },
      { title: "rState", field: "rState" },
      { title: "rDistrict", field: "rDistrict" },
      { title: "rCity", field: "rCity" },
      { title: "rHomeStreetLandMark", field: "rHomeStreetLandMark" },
      { title: "rPincode", field: "rPincode" },
    ],
    data: props.state.data,
  });
  console.log(props.state);

  return (
    <MaterialTable
      title="Advanced Students Table"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
