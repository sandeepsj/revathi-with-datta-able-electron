import React, { Component } from "react";
import { Col, Card, Table, Button, Row, Form } from "react-bootstrap";
class PersonalDetails extends Component {
  state = {
    editable: false,
    key: 0,
  };
  render() {
    // console.log(this.props.state);
    return (
      <div className="row" key={this.state.key}>
        <Col>
          <Form>
            <Card className="Recent-Users">
              <Card.Header>
                <Card.Title as="h5">Personal Details</Card.Title>
                <div hidden={!this.state.editable}>
                  <Button
                    // type="submit"
                    // onClick={this.props.submitEdits}
                    onClick={() => {
                      this.props.submitEdits();
                      this.setState({ editable: false });
                    }}
                    style={{ float: "right" }}
                  >
                    Save
                  </Button>
                  <Button
                    variant="warning"
                    style={{ float: "right" }}
                    onClick={() =>
                      this.setState({
                        editable: false,
                        key: this.state.key + 1,
                      })
                    }
                  >
                    Cancel
                  </Button>
                </div>
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
                <Row>
                  <Col md={6} className="p-2">
                    <Form.Group>
                      <Form.Label>Student ID</Form.Label>
                      <Form.Control
                        required={true}
                        type="number"
                        placeholder="Student ID"
                        defaultValue={this.props.state.StudentID}
                        disabled={true}
                        ref={this.props.refs.StudentID}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="p-2">
                    <Form.Group>
                      <Form.Label>Student's Name</Form.Label>

                      <Form.Control
                        required={true}
                        disabled={!this.state.editable}
                        type="text"
                        placeholder="Student's Name"
                        defaultValue={this.props.state["Student's Name"]}
                        ref={this.props.refs["Student's Name"]}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="p-2">
                    <Form.Group>
                      <Form.Label>Date of Birth</Form.Label>
                      <Form.Control
                        required={true}
                        disabled={!this.state.editable}
                        type="date"
                        placeholder="Date of Birth"
                        defaultValue={this.props.state["Date-of-Birth"]}
                        ref={this.props.refs["Date-of-Birth"]}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12} className="p-2">
                    <Form.Group>
                      <Form.Label>School Name</Form.Label>
                      <Form.Control
                        required={true}
                        disabled={!this.state.editable}
                        type="text"
                        placeholder="School Name"
                        defaultValue={this.props.state["School"]}
                        ref={this.props.refs["School"]}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="p-2">
                    <Form.Group>
                      <Form.Label>Gender</Form.Label>
                      <Form.Control
                        required={true}
                        as="select"
                        defaultValue={this.props.state.Gender}
                        ref={this.props.refs.Gender}
                        disabled={!this.state.editable}
                      >
                        <option>Female</option>
                        <option>Male</option>

                        <option>Other</option>
                        <option>Prefer not to Say</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col md={6} className="p-2">
                    <Form.Group>
                      <Form.Label>Phone No.</Form.Label>
                      <Form.Control
                        required={true}
                        disabled={!this.state.editable}
                        type="text"
                        placeholder="Phone No."
                        defaultValue={this.props.state["Phone"]}
                        ref={this.props.refs.Phone}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="p-2">
                    <Form.Group>
                      <Form.Label>Alternate Phone No.</Form.Label>
                      <Form.Control
                        disabled={!this.state.editable}
                        type="text"
                        placeholder="Alternate Phone No."
                        defaultValue={this.props.state["Alternate Phone"]}
                        ref={this.props.refs["Alternate Phone"]}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12} className="p-2">
                    <Form.Group>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        disabled={!this.state.editable}
                        type="email"
                        placeholder="Email"
                        defaultValue={this.props.state["Email"]}
                        ref={this.props.refs.Email}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <hr />
                    Parent's Details
                    <hr />
                  </Col>

                  <Col md={6} className="p-2">
                    <Form.Group>
                      <Form.Label>Father's Name</Form.Label>
                      <Form.Control
                        disabled={!this.state.editable}
                        type="text"
                        placeholder="Father's Name"
                        defaultValue={this.props.state["Father's Name"]}
                        ref={this.props.refs["Father's Name"]}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="p-2">
                    <Form.Group>
                      <Form.Label>Mother's Name</Form.Label>
                      <Form.Control
                        disabled={!this.state.editable}
                        type="text"
                        placeholder="Mother's Name"
                        defaultValue={this.props.state["Mother's Name"]}
                        ref={this.props.refs["Mother's Name"]}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12} className="p-2">
                    <Form.Group>
                      <Form.Label>Father's Occupation</Form.Label>
                      <Form.Control
                        disabled={!this.state.editable}
                        type="text"
                        placeholder="Father's Occupation"
                        defaultValue={this.props.state["Father's Occupation"]}
                        ref={this.props.refs["Father's Occupation"]}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12} className="p-2">
                    <Form.Group>
                      <Form.Label>Mother's Occupation</Form.Label>
                      <Form.Control
                        disabled={!this.state.editable}
                        type="text"
                        placeholder="Mother's Occupation"
                        defaultValue={this.props.state["Mother's Occupation"]}
                        ref={this.props.refs["Mother's Occupation"]}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="p-2">
                    <Form.Group>
                      <Form.Label>Monthly Income</Form.Label>
                      <Form.Control
                        required={true}
                        disabled={!this.state.editable}
                        type="text"
                        placeholder="Monthly Income"
                        defaultValue={this.props.state["Monthly Income"]}
                        ref={this.props.refs["Monthly Income"]}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <hr />
                    Permenent Address
                    <hr />
                  </Col>
                  <Col md={12} className="p-2">
                    <Form.Group>
                      <Form.Label>Home, Street, Landmark</Form.Label>
                      <Form.Control
                        required={true}
                        disabled={!this.state.editable}
                        type="text"
                        placeholder="Home, Street, Landmark"
                        defaultValue={this.props.state["pHomeStreetLandMark"]}
                        ref={this.props.refs.pHomeStreetLandMark}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="p-2">
                    <Form.Group>
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        required={true}
                        disabled={!this.state.editable}
                        type="text"
                        placeholder="City"
                        defaultValue={this.props.state["pCity"]}
                        ref={this.props.refs.pCity}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="p-2">
                    <Form.Group>
                      <Form.Label>District</Form.Label>
                      <Form.Control
                        required={true}
                        disabled={!this.state.editable}
                        type="text"
                        placeholder="District"
                        defaultValue={this.props.state["pDistrict"]}
                        ref={this.props.refs.pDistrict}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={8} className="p-2">
                    <Form.Group>
                      <Form.Label>State</Form.Label>
                      <Form.Control
                        required={true}
                        disabled={!this.state.editable}
                        type="text"
                        placeholder="State"
                        defaultValue={this.props.state["pState"]}
                        ref={this.props.refs.pState}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="p-2">
                    <Form.Group>
                      <Form.Label>Pin code</Form.Label>
                      <Form.Control
                        required={true}
                        disabled={!this.state.editable}
                        type="text"
                        placeholder="Pin code"
                        defaultValue={this.props.state["pPincode"]}
                        ref={this.props.refs.pPincode}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <hr />
                    Residential Address
                    <hr />
                  </Col>

                  <Col md={12} className="p-2">
                    <Form.Group>
                      <Form.Label>Home, Street, Landmark</Form.Label>
                      <Form.Control
                        required={true}
                        disabled={!this.state.editable}
                        type="text"
                        placeholder="Home, Street, Landmark"
                        defaultValue={this.props.state["rHomeStreetLandMark"]}
                        ref={this.props.refs.rHomeStreetLandMark}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="p-2">
                    <Form.Group>
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        required={true}
                        disabled={!this.state.editable}
                        type="text"
                        placeholder="City"
                        defaultValue={this.props.state["rCity"]}
                        ref={this.props.refs.rCity}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="p-2">
                    <Form.Group>
                      <Form.Label>District</Form.Label>
                      <Form.Control
                        required={true}
                        disabled={!this.state.editable}
                        type="text"
                        placeholder="District"
                        defaultValue={this.props.state["rDistrict"]}
                        ref={this.props.refs.rDistrict}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={8} className="p-2">
                    <Form.Group>
                      <Form.Label>State</Form.Label>
                      <Form.Control
                        required={true}
                        disabled={!this.state.editable}
                        type="text"
                        placeholder="State"
                        defaultValue={this.props.state["rState"]}
                        ref={this.props.refs.rState}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4} className="p-2">
                    <Form.Group>
                      <Form.Label>Pin code</Form.Label>
                      <Form.Control
                        required={true}
                        disabled={!this.state.editable}
                        type="text"
                        placeholder="Pin code"
                        defaultValue={this.props.state["rPincode"]}
                        ref={this.props.refs.rPincode}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer hidden={!this.state.editable}>
                <Button
                  // type="submit"
                  // onClick={this.props.submitEdits}
                  onClick={() => {
                    this.props.submitEdits();
                    this.setState({ editable: false });
                  }}
                  style={{ float: "right" }}
                >
                  Save
                </Button>
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
          </Form>
        </Col>
      </div>
    );
  }
}

export default PersonalDetails;
