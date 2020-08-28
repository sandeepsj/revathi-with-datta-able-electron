import React from "react";
import { Row, Col, Card, Form, Table, Badge } from "react-bootstrap";
import Aux from "../hoc/_Aux";

const electron = window.require("electron");
const ipc = electron.ipcRenderer;

class TableBootstrap extends React.Component {
  state = {
    data: [],
    headers: [],
  };
  originalData = {
    data: [],
    headers: [],
  };
  searchKeys = {};

  getStudents = () => {
    ipc.send("getReq", "Student");
    ipc.on("getRes-Student", (evt, reply) => {
      this.setState({ data: [...reply], headers: [...Object.keys(reply[0])] });
      this.originalData = {
        data: [...reply],
        headers: [...Object.keys(reply[0])],
      };
    });
  };

  handleSearch = (col, value) => {
    this.searchKeys[col] = value;
    const newState = { data: [], header: { ...this.originalData.headers } };
    this.originalData.data.map((row) => {
      var count = 0;
      Object.keys(this.searchKeys).map((key) => {
        if (String(row[key]).match(RegExp(`.*${this.searchKeys[key]}.*`, "i")))
          count++;
      });
      if (count === Object.keys(this.searchKeys).length)
        newState.data.push(row);
    });
    this.setState({ ...newState });
  };
  notifyMain = (id) => {
    console.log(id);
    ipc.send("newSubWindow-StudentCard", id);
  };

  componentDidMount() {
    this.getStudents();
  }
  render() {
    return (
      <Aux>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title as="h5">Student Details</Card.Title>
                <span className="d-block m-t-5">
                  Click on <Badge variant="success">More Details</Badge> for
                  editing and seeing all the data related to a particular
                  student.
                </span>
              </Card.Header>
              <Card.Body>
                <Table responsive hover>
                  <thead>
                    <tr>
                      {this.state.headers.map((header) => (
                        <th key={header}>
                          {/* <Form.Label>{this.state.headers[header]}</Form.Label> */}
                          <Form.Control
                            type="email"
                            placeholder={header}
                            style={{
                              width: "110%",
                            }}
                            onChange={(event) =>
                              this.handleSearch(header, event.target.value)
                            }
                          />
                        </th>
                      ))}
                    </tr>
                  </thead>
                  {this.getTBody()}
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Aux>
    );
  }
  getTBody = () => {
    if (this.state.data.length > 0) {
      return (
        <tbody>
          {this.state.data.map((row) => (
            <tr key={row.StudentID}>
              {Object.keys(row).map((col) => (
                <td key={col}>{row[col]}</td>
              ))}
              <td>
                <Badge
                  variant="success"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    window.open(
                      `#/WorkSpace/SubWindows/StudentDetails`,
                      `StudentCard-${row.StudentID}`,
                      "height=625"
                    );
                    this.notifyMain(row.StudentID);
                  }}
                >
                  More Details
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      );
    }
    return <tbody></tbody>;
  };
}

export default TableBootstrap;
