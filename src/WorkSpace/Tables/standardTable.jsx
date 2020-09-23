import React, { Component } from "react";
import { Table, Badge } from "react-bootstrap";
class standardTable extends Component {
  state = {};
  render() {
    return (
      <div className="table-fixed">
        <Table responsive hover>
          <thead>
            <tr>
              <th />
              {this.props.state.headers
                .filter((head) =>
                  this.props.state.selectedHeaders.includes(head)
                )
                .map((header) => (
                  <th key={header}>{header}</th>
                ))}
            </tr>
          </thead>
          {this.getTBody()}
        </Table>
      </div>
    );
  }
  getTBody = () => {
    if (this.props.state.data.length > 0) {
      return (
        <tbody>
          {this.props.state.data.map((row) => (
            <tr key={row.StudentID}>
              <td>
                <Badge
                  variant="success"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    window.open(
                      `#/WorkSpace/SubWindows/StudentDetails`,
                      `StudentCard-${row.StudentID}`,
                      "height=650, width=1000"
                    );
                    this.props.handlers.notifyMain(row.StudentID);
                  }}
                >
                  More Details
                </Badge>
              </td>
              {Object.keys(row)
                .filter((col) => this.props.state.selectedHeaders.includes(col))
                .map((col) => (
                  <td key={col}>{row[col]}</td>
                ))}
            </tr>
          ))}
        </tbody>
      );
    }
    return <tbody></tbody>;
  };
}

export default standardTable;
