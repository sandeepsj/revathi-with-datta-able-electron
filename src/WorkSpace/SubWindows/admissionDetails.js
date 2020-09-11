import React, { Component } from "react";
import { Col, Card, Table, Button, Row, Form } from "react-bootstrap";
import { data } from "jquery";
class PersonalDetails extends Component {
  state = {
    editable: false,
    key: 0,
  };
  getSubjectWiseAdmission = () => {
    const res = {};
    // console.log(this.props.state);
    console.log(this.props.state.admissionDetails);
    this.props.state.admissionDetails.map((row) => {
      if (!(row.Subject in res)) {
        res[row.Subject] = [];
      }
      res[row.Subject].push(row);
    });
    return res;
  };
  subjectWiseAdmission;
  render() {
    //console.log(this.props.state.admissionDetails);
    this.subjectWiseAdmission = this.getSubjectWiseAdmission();
    return (
      <div className="row" key={this.state.key}>
        <Col>
          <Card className="Recent-Users">
            <Card.Header>
              <Card.Title as="h5">Admission Details</Card.Title>
              <Button
                variant="warning"
                hidden={this.state.editable}
                style={{ float: "right" }}
                onClick={() => {
                  this.setState({ editable: true });
                }}
              >
                Edit
              </Button>
            </Card.Header>
            <Card.Body className="px-0 py-2">
              {Object.keys(this.subjectWiseAdmission).map((subject) => (
                <Card className="Recent-Users" key={subject}>
                  <Card.Header>
                    <Card.Title as="h5">{subject}</Card.Title>
                  </Card.Header>
                  {this.subjectWiseAdmission[subject].map((row) => (
                    <Card.Body className="px-0 py-2" key={row.AdmissionNo}>
                      <p>Admission No:2 Date of Admission:"2020" Status:OPEN</p>
                    </Card.Body>
                  ))}
                </Card>
              ))}
            </Card.Body>

            <Card.Footer hidden={!this.state.editable}>
              <Button style={{ float: "right" }}>Save</Button>
              <Button
                variant="warning"
                style={{ float: "right" }}
                onClick={() =>
                  this.setState({ editable: false, key: this.state.key + 1 })
                }
              >
                Cancel
              </Button>
            </Card.Footer>
            <Card.Footer hidden={this.state.editable}>
              <Button
                variant="warning"
                hidden={this.state.editable}
                style={{ float: "right" }}
                onClick={() => {
                  this.setState({ editable: true });
                }}
              >
                Edit
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </div>
    );
  }
}

export default PersonalDetails;
