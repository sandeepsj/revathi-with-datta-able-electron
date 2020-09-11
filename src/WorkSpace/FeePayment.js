import React from "react";
import {
  Row,
  Col,
  Card,
  Form,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";

import Aux from "../hoc/_Aux";

class FormsElements extends React.Component {
  render() {
    return (
      <Aux>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title as="h5">Fee Payment</Card.Title>
              </Card.Header>
              <Card.Body>
                <h5>Fill the details and Get Receipt</h5>

                <Row>
                  <Col md={8}>
                    <hr />
                    <Form>
                      <Row>
                        <Col md={6}>
                          <InputGroup className="mb-3">
                            <FormControl
                              placeholder="Student ID"
                              aria-label="Student ID"
                              aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                              <Button>Go</Button>
                            </InputGroup.Append>
                          </InputGroup>
                        </Col>
                      </Row>
                      <hr />
                      <Row>
                        <Col md={6}>
                          <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" />
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
                      </Row>
                      <Row>
                        <Col md={6}>
                          <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Phone No.</Form.Label>
                            <Form.Control type="text" placeholder="Phone No." />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>School</Form.Label>
                            <Form.Control type="text" placeholder="School" />
                          </Form.Group>
                          <Card.Text
                            className="text-primary mb-1 text-rigth"
                            style={{ cursor: "pointer" }}
                          >
                            Get More Details of the Student
                          </Card.Text>
                        </Col>
                      </Row>
                      <hr />
                      <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text id="basic-addon1">
                            Guitar
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                          type="date"
                          placeholder="Month"
                          aria-label="Month"
                          aria-describedby="basic-addon1"
                          disabled={true}
                        />
                        <FormControl
                          type="number"
                          placeholder="Amount"
                          aria-label="Amount"
                          aria-describedby="basic-addon1"
                        />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text id="basic-addon1">
                            Vocal
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                          type="date"
                          placeholder="Month"
                          aria-label="Month"
                          aria-describedby="basic-addon1"
                          disabled={true}
                        />
                        <FormControl
                          type="number"
                          placeholder="Amount"
                          aria-label="Amount"
                          aria-describedby="basic-addon1"
                        />
                      </InputGroup>
                      <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text id="basic-addon1">
                            Veena
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                          type="date"
                          placeholder="Month"
                          aria-label="Month"
                          aria-describedby="basic-addon1"
                          disabled={true}
                        />
                        <FormControl
                          type="number"
                          placeholder="Amount"
                          aria-label="Amount"
                          aria-describedby="basic-addon1"
                        />
                      </InputGroup>
                      <Row>
                        <Col md={6}>
                          <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                              <InputGroup.Text id="basic-addon1">
                                Fine
                              </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                              type="number"
                              placeholder="Fine"
                              aria-label="Month"
                              aria-describedby="basic-addon1"
                            />
                          </InputGroup>
                        </Col>
                        <Col md={6}>
                          <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                              <InputGroup.Text id="basic-addon1">
                                Total
                              </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                              type="number"
                              placeholder="Total"
                              aria-label="Month"
                              aria-describedby="basic-addon1"
                            />
                          </InputGroup>
                        </Col>
                      </Row>

                      <Button variant="primary">Get Receipt</Button>
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
