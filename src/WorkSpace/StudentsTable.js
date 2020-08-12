import React from "react";
import { Row, Col, Card, Form, Table, Badge } from "react-bootstrap";
import Aux from "../hoc/_Aux";

class TableBootstrap extends React.Component {
  state = {
    data: [
      {
        id: 0,
        name: "San",
        "Father's Name": "Jyo",
        Phone: "7594018731",
        School: "KRHSS",
        Subjects: "Keyboard, Vocal, Gitar, Tabla",
        AdmnDate: "21-03-2020",
      },
      {
        id: 1,
        name: "San",
        "Father's Name": "Jio",
        Phone: "7594018731",
        School: "KRHSS",
        Subjects: "Keyboard, Vocal, Gitar, Tabla",
        AdmnDate: "21-03-2020",
      },
      {
        id: 2,
        name: "San",
        "Father's Name": "kyo",
        Phone: "7594018731",
        School: "KRHSS",
        Subjects: "Keyboard, Vocal, Gitar, Tabla",
        AdmnDate: "21-03-2020",
      },
    ],
    headers: [
      "id",
      "name",
      "Father's Name",
      "Phone",
      "School",
      "Subjects",
      "AdmnDate",
    ],
  };
  originalData = {
    data: [
      {
        id: 0,
        name: "San",
        "Father's Name": "Jyo",
        Phone: "7594018731",
        School: "KRHSS",
        Subjects: "Keyboard, Vocal, Gitar, Tabla",
        AdmnDate: "21-03-2020",
      },
      {
        id: 1,
        name: "San",
        "Father's Name": "Jio",
        Phone: "7594018731",
        School: "KRHSS",
        Subjects: "Keyboard, Vocal, Gitar, Tabla",
        AdmnDate: "21-03-2020",
      },
      {
        id: 2,
        name: "San",
        "Father's Name": "kyo",
        Phone: "7594018731",
        School: "KRHSS",
        Subjects: "Keyboard, Vocal, Gitar, Tabla",
        AdmnDate: "21-03-2020",
      },
    ],
    headers: [
      "id",
      "name",
      "Father's Name",
      "Phone",
      "School",
      "Subjects",
      "AdmnDate",
    ],
  };
  searchKeys = {};

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
            <tr key={row.id}>
              {Object.keys(row).map((col) => (
                <td key={col}>{row[col]}</td>
              ))}
              <td>
                <Badge
                  variant="success"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    window.open("#/WorkSpace/SubWindows/StudentDetails")
                  }
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
