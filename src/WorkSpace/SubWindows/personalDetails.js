import React, { Component } from "react";
import { Col, Card, Table, Button } from "react-bootstrap";
class PersonalDetails extends Component {
  state = {
    "Admission No": 130,
    "Date of Admission": "21-07-2007",
    Name: "Sandeep S J",
    "Parent's Name": "Jyothy E K",
    "Parent's Occupation": "Teacher",
    "School Name": "KRHSS",
    "Date of Birth": "21-06-1999",
    "Phone Number": "7594018731",
    Address:
      "i cillum duis aliqua do. Aliqua amet qui mollit coliqua amet qui mollit coliqua amet qui mollit coliqua amet qui mollit consectetur nulla smollit velit aliqua veniam nisi id do Lore",
  };
  render() {
    return (
      <div className="row">
        <Col>
          <Card className="Recent-Users">
            <Card.Header>
              <Card.Title as="h5">Personal Details</Card.Title>
              <Button style={{ float: "right" }}>Save</Button>
            </Card.Header>
            <Card.Body className="px-0 py-2">
              <Table
                responsive
                hover
                style={{ width: "100%", tableLayout: "fixed" }}
              >
                <tbody>
                  {Object.keys(this.state).map((attribute) => (
                    <tr className="unread" key={attribute}>
                      <td>
                        <h6 className="mb-1">{attribute}</h6>
                      </td>
                      <td>
                        <p className="text-muted">{this.state[attribute]}</p>
                      </td>
                      <td>
                        <Button
                          variant="light"
                          style={{ float: "right", width: 55 }}
                        >
                          <i className="fa fa-edit"></i>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
  }
}

export default PersonalDetails;
