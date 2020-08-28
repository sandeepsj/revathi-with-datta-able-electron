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
    this.props.state.admissionDetails.map((row) => {
      if (row.Subject in res) {
        res[row.Subject].push(row);
      } else {
        res[row.Subject] = [];
      }
    });
    // console.log(res);
  };
  render() {
    console.log(this.props.state.admissionDetails);
    this.getSubjectWiseAdmission();
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
              <Card.Title as="h5">Admission Details</Card.Title>
              <Form onSubmit={() => this.submitAdmission(this.newAdmission)}>
                <Row>
                  <Col md={6} className="p-2">
                    <Form.Control
                      type="number"
                      placeholder="Student ID"
                      defaultValue={
                        this.props.state.personalDetails["StudentID"]
                      }
                      disabled={true}
                    />
                  </Col>
                  <Col md={6} className="p-2">
                    <Form.Control
                      disabled={!this.state.editable}
                      type="text"
                      placeholder="Student's Name"
                      defaultValue={
                        this.props.state.personalDetails["Student's Name"]
                      }
                    />
                  </Col>
                  <Col md={6} className="p-2">
                    <Form.Control
                      disabled={!this.state.editable}
                      type="date"
                      placeholder="Date of Birth"
                      defaultValue={
                        this.props.state.personalDetails["Date-of-Birth"]
                      }
                    />
                  </Col>
                  <Col md={12} className="p-2">
                    <Form.Control
                      disabled={!this.state.editable}
                      type="text"
                      placeholder="School Name"
                      defaultValue={this.props.state.personalDetails["School"]}
                    />
                  </Col>
                  <Col md={6} className="p-2">
                    <Form.Control
                      disabled={!this.state.editable}
                      type="text"
                      placeholder="Phone No."
                      defaultValue={this.props.state.personalDetails["Phone"]}
                    />
                  </Col>
                  <Col md={6} className="p-2">
                    <Form.Control
                      disabled={!this.state.editable}
                      type="text"
                      placeholder="Alternate Phone No."
                      defaultValue={
                        this.props.state.personalDetails["Alternate Phone"]
                      }
                    />
                  </Col>
                  <Col md={12} className="p-2">
                    <Form.Control
                      disabled={!this.state.editable}
                      type="email"
                      placeholder="Email"
                      defaultValue={this.props.state.personalDetails["Email"]}
                    />
                  </Col>
                  <Col md={12}>
                    <hr />
                    Parent's Details
                    <hr />
                  </Col>

                  <Col md={6} className="p-2">
                    <Form.Control
                      disabled={!this.state.editable}
                      type="text"
                      placeholder="Father's Name"
                      defaultValue={
                        this.props.state.personalDetails["Father's Name"]
                      }
                    />
                  </Col>
                  <Col md={6} className="p-2">
                    <Form.Control
                      disabled={!this.state.editable}
                      type="text"
                      placeholder="Mother's Name"
                      defaultValue={
                        this.props.state.personalDetails["Mother's Name"]
                      }
                    />
                  </Col>
                  <Col md={12} className="p-2">
                    <Form.Control
                      disabled={!this.state.editable}
                      type="text"
                      placeholder="Father's Occupation"
                      defaultValue={
                        this.props.state.personalDetails["Father's Occupation"]
                      }
                    />
                  </Col>
                  <Col md={12} className="p-2">
                    <Form.Control
                      disabled={!this.state.editable}
                      type="text"
                      placeholder="Mother's Occupation"
                      defaultValue={
                        this.props.state.personalDetails["Mother's Occupation"]
                      }
                    />
                  </Col>
                  <Col md={4} className="p-2">
                    <Form.Control
                      disabled={!this.state.editable}
                      type="text"
                      placeholder="Monthly Income"
                      defaultValue={
                        this.props.state.personalDetails["Monthly Income"]
                      }
                    />
                  </Col>
                  <Col md={12}>
                    <hr />
                    Permenent Address
                    <hr />
                  </Col>
                  <Col md={12} className="p-2">
                    <Form.Control
                      disabled={!this.state.editable}
                      type="text"
                      placeholder="Home, Street, Landmark"
                      defaultValue={
                        this.props.state.personalDetails["pHomeStreetLandMark"]
                      }
                    />
                  </Col>
                  <Col md={6} className="p-2">
                    <Form.Control
                      disabled={!this.state.editable}
                      type="text"
                      placeholder="City"
                      defaultValue={this.props.state.personalDetails["pCity"]}
                    />
                  </Col>
                  <Col md={6} className="p-2">
                    <Form.Control
                      disabled={!this.state.editable}
                      type="text"
                      placeholder="District"
                      defaultValue={
                        this.props.state.personalDetails["pDistrict"]
                      }
                    />
                  </Col>
                  <Col md={8} className="p-2">
                    <Form.Control
                      disabled={!this.state.editable}
                      type="text"
                      placeholder="State"
                      defaultValue={this.props.state.personalDetails["pState"]}
                    />
                  </Col>
                  <Col md={4} className="p-2">
                    <Form.Control
                      disabled={!this.state.editable}
                      type="text"
                      placeholder="Pin code"
                      defaultValue={
                        this.props.state.personalDetails["pPincode"]
                      }
                    />
                  </Col>
                  <Col md={12}>
                    <hr />
                    Residential Address
                    <hr />
                  </Col>

                  <Col md={12} className="p-2">
                    <Form.Control
                      disabled={!this.state.editable}
                      type="text"
                      placeholder="Home, Street, Landmark"
                      defaultValue={
                        this.props.state.personalDetails["rHomeStreetLandMark"]
                      }
                    />
                  </Col>
                  <Col md={6} className="p-2">
                    <Form.Control
                      disabled={!this.state.editable}
                      type="text"
                      placeholder="City"
                      defaultValue={this.props.state.personalDetails["rCity"]}
                    />
                  </Col>
                  <Col md={6} className="p-2">
                    <Form.Control
                      disabled={!this.state.editable}
                      type="text"
                      placeholder="District"
                      defaultValue={
                        this.props.state.personalDetails["rDistrict"]
                      }
                    />
                  </Col>
                  <Col md={8} className="p-2">
                    <Form.Control
                      disabled={!this.state.editable}
                      type="text"
                      placeholder="State"
                      defaultValue={this.props.state.personalDetails["rState"]}
                    />
                  </Col>
                  <Col md={4} className="p-2">
                    <Form.Control
                      disabled={!this.state.editable}
                      type="text"
                      placeholder="Pin code"
                      defaultValue={
                        this.props.state.personalDetails["rPincode"]
                      }
                    />
                  </Col>
                </Row>
              </Form>
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
