import React from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";

import Aux from "../hoc/_Aux";

class FormsElements extends React.Component {
  render() {
    return (
      <Aux>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title as="h5">
                  Admission Form for New Admission
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <h6>Fill all the fields and Submit</h6>
                <hr />
                <Row>
                  <Col md={12}>
                    <Form>
                      <Row>
                        <Col md={6}>
                          <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Admission No</Form.Label>
                            <Form.Control
                              type="number"
                              placeholder="Admission No"
                            />
                          </Form.Group>
                        </Col>

                        <Col md={6}>
                          <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Admission Date</Form.Label>
                            <Form.Control
                              type="date"
                              placeholder="Admission Date"
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Sudent's Name</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Student's Name"
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Parent's Name</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Parent's Name"
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Parent's Occupation</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Parent's Occupation"
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>School Name</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="School Name"
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control
                              type="date"
                              placeholder="Date of Birth"
                            />
                          </Form.Group>
                        </Col>
                        {/* <Col md={6}>
                          <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Parent's Name</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Parent's Name"
                            />
                          </Form.Group>
                        </Col> */}

                        <Col md={6}>
                          <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Phone No.</Form.Label>
                            <Form.Control type="text" placeholder="Phone No." />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control as="textarea" rows="3" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <h6 className="mt-6">Choose the Subjects Enrolled</h6>
                      <hr />
                      <Row>
                        <Col md={3}>
                          <Form.Group>
                            <Form.Check
                              custom
                              type="checkbox"
                              id="checkbox1"
                              label="Keyboard"
                            />
                          </Form.Group>
                        </Col>

                        <Col md={3}>
                          {" "}
                          <Form.Group>
                            <Form.Check
                              custom
                              type="checkbox"
                              id="checkbox2"
                              label="Veena"
                            />
                          </Form.Group>
                        </Col>
                        <Col md={3}>
                          <Form.Group>
                            <Form.Check
                              custom
                              type="checkbox"
                              id="checkbox3"
                              label="Guitar"
                            />
                          </Form.Group>
                        </Col>
                        <Col md={3}>
                          <Form.Group>
                            <Form.Check
                              custom
                              type="checkbox"
                              id="checkbox4"
                              label="Tabla"
                            />
                          </Form.Group>
                        </Col>
                        <Col md={3}>
                          <Form.Group>
                            <Form.Check
                              custom
                              type="checkbox"
                              id="checkbox5"
                              label="Vocal"
                            />
                          </Form.Group>
                        </Col>
                        <Col md={3}>
                          <Form.Group>
                            <Form.Check
                              custom
                              type="checkbox"
                              id="checkbox6"
                              label="Dance"
                            />
                          </Form.Group>
                        </Col>
                        <Col md={3}>
                          <Form.Group>
                            <Form.Check
                              custom
                              type="checkbox"
                              id="checkbox7"
                              label="Drawing"
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Button variant="primary">Submit</Button>
                    </Form>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Aux>
    );
  }
}

export default FormsElements;
