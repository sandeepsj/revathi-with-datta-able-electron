import React, { Component } from "react";
import { Col, Form, Row } from "react-bootstrap";
class StudentDetailsForm extends Component {
  state = {};
  render() {
    return (
      <Row>
        <Col md={12}>
          <h5 className="mt-6">Student's Details</h5>
        </Col>
        <Col md={6}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Student ID</Form.Label>
            <Form.Control
              required={true}
              type="number"
              key={this.props.state.admnNo}
              placeholder="Admission No"
              // defaultValue={this.props.state.admnNo}
              disabled={true}
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Admission Date</Form.Label>
            <Form.Control
              required={true}
              type="date"
              placeholder="Admission Date"
              ref={this.props.newAdmission.admissionDate}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Sudent's Name</Form.Label>
            <Form.Control
              required={true}
              type="text"
              placeholder="Student's Name"
              ref={this.props.newAdmission.studentsName}
              // defaultValue="Sandeep"
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>School Name</Form.Label>
            <Form.Control
              required={true}
              type="text"
              placeholder="School Name"
              ref={this.props.newAdmission.school}
              // value="AUP"
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              required={true}
              type="date"
              placeholder="Date of Birth"
              ref={this.props.newAdmission.dateOfBirth}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Gender</Form.Label>
            <Form.Control
              required={true}
              as="select"
              ref={this.props.newAdmission.gender}
            >
              <option>Female</option>
              <option>Male</option>

              <option>Other</option>
              <option>Prefer not to Say</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Phone No.</Form.Label>
            <Form.Control
              required={true}
              type="text"
              placeholder="Phone"
              ref={this.props.newAdmission.phone}
              // value="75883362541"
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Land Line/Alternate Phone No.</Form.Label>
            <Form.Control
              required={false}
              type="text"
              placeholder="Phone"
              ref={this.props.newAdmission.alternatePhone}
              // value="34523562345"
            />
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required={false}
              type="email"
              placeholder="Email"
              ref={this.props.newAdmission.email}
              // value="ssj@gmc.oms"
            />
          </Form.Group>
        </Col>
      </Row>
    );
  }
}

export default StudentDetailsForm;
