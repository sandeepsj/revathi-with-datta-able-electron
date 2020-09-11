import React, { Component } from "react";
import { Row, Col, Form } from "react-bootstrap";
class ParentsDetailsForm extends Component {
  state = {};
  render() {
    return (
      <Row>
        <Col md={12}>
          <h5 className="mt-6">Parent's Details</h5>
        </Col>
        <Col md={6}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Father's Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Father's Name"
              ref={this.props.newAdmission.fathersName}
              // value="Jyohty"
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Father's Occupation</Form.Label>
            <Form.Control
              type="text"
              placeholder="Father's Occupation"
              ref={this.props.newAdmission.fathersOccupation}
              // value="teacher"
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Mother's Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Mother's Name"
              ref={this.props.newAdmission.mothersName}
              // value="sreelatha"
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Mother's Occupation</Form.Label>
            <Form.Control
              type="text"
              placeholder="Mother's Occupation"
              ref={this.props.newAdmission.mothersOccupation}
              // value="teacher"
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Monthly Income</Form.Label>
            <Form.Control
              required={true}
              type="text"
              placeholder="Monthly Income"
              ref={this.props.newAdmission.mothlyIncome}
              // value="1000"
            />
          </Form.Group>
        </Col>
      </Row>
    );
  }
}

export default ParentsDetailsForm;
