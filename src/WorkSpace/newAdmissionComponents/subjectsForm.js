import React, { Component } from "react";
import { Row, Col, Form } from "react-bootstrap";
class SubjectsForm extends Component {
  state = {};
  render() {
    return (
      <Row>
        <Col md={12}>
          <h5 className="mt-6">Choose the Subjects Enrolled</h5>
          <hr />
        </Col>
        <Col md={12}>
          <Form.Group>
            {this.props.state.subjects.map((row) => (
              <Col md={3} key={row.Subject}>
                <Form.Check
                  custom
                  type="checkbox"
                  id={row.Subject}
                  label={row.Subject}
                  ref={this.props.newAdmission.subjects[row.Subject]}
                />
              </Col>
            ))}
          </Form.Group>
        </Col>
      </Row>
    );
  }
}

export default SubjectsForm;
