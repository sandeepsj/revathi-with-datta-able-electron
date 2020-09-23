import React, { Component } from "react";
import { Card } from "react-bootstrap";
class activeAdmission extends Component {
  state = {};
  render() {
    return (
      <Card className="Recent-Users">
        <Card.Header>
          <Card.Title as="h5">Active Admissions</Card.Title>
        </Card.Header>
        <Card.Body className="px-0 py-2">
          {this.props.state.admissionDetails.map((row) => (
            <p key={row.AdmissionNo}>
              {row.Subject}
              {row["Admission Date"]}
              {row["Closed Date"]}
            </p>
          ))}
        </Card.Body>
      </Card>
    );
  }
}

export default activeAdmission;
