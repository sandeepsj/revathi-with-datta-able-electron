import React, { Component } from "react";
import { Row, Col, Form } from "react-bootstrap";
class AddressForm extends Component {
  state = { residentialAddressDisabled: false };
  setResidetialAddress = (evt) => {
    if (this.state.residentialAddressDisabled === false) {
      this.setState({ residentialAddressDisabled: true });
      this.props.handleResidetialAddres();
    } else {
      this.setState({ residentialAddressDisabled: false });
    }
  };
  render() {
    return (
      <Row>
        <Col md={12}>
          <h5 className="mt-6">Address</h5>
          <hr />
          <h6 className="mt-6">Permenant Address</h6>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>State</Form.Label>
            <Form.Control
              required={true}
              type="text"
              placeholder="State"
              ref={this.props.newAdmission.Pstate}
              defaultValue="Kerala"
              onChange={this.props.handleResidetialAddres}
            />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>District</Form.Label>
            <Form.Control
              required={true}
              type="text"
              placeholder="District"
              ref={this.props.newAdmission.Pdistrict}
              onChange={this.props.handleResidetialAddres}
              defaultValue="Kollam"
            />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control
              required={true}
              type="text"
              placeholder="City"
              ref={this.props.newAdmission.Pcity}
              onChange={this.props.handleResidetialAddres}
              defaultValue="Vadakara"
            />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>Pin Code</Form.Label>
            <Form.Control
              required={true}
              type="text"
              placeholder="Pin Code"
              ref={this.props.newAdmission.Ppincode}
              onChange={this.props.handleResidetialAddres}
              defaultValue="673503"
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label>Home, Street, LandMark</Form.Label>
            <Form.Control
              required={true}
              as="textarea"
              rows="2"
              ref={this.props.newAdmission.PhomeStreetLandMark}
              onChange={this.props.handleResidetialAddres}
              defaultValue="Anganonnuilla"
            />
          </Form.Group>
        </Col>

        <Col md={6}></Col>
        <Col md={12}>
          <hr />
          <h6 className="mt-6">Residential Address</h6>
          <Form.Check
            custom
            type="checkbox"
            id="id1"
            label="Set residential address same as Permenant address"
            onChange={(evt) => this.setResidetialAddress(evt)}
          />
          <hr />
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>State</Form.Label>
            <Form.Control
              required={true}
              type="text"
              placeholder="State"
              ref={this.props.newAdmission.Rstate}
              disabled={this.state.residentialAddressDisabled}
            />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>District</Form.Label>
            <Form.Control
              required={true}
              type="text"
              placeholder="District"
              ref={this.props.newAdmission.Rdistrict}
              disabled={this.state.residentialAddressDisabled}
            />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control
              required={true}
              type="text"
              placeholder="City"
              ref={this.props.newAdmission.Rcity}
              disabled={this.state.residentialAddressDisabled}
            />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>Pin Code</Form.Label>
            <Form.Control
              required={true}
              type="text"
              placeholder="Pin Code"
              ref={this.props.newAdmission.Rpincode}
              disabled={this.state.residentialAddressDisabled}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label>Home, Street, LandMark</Form.Label>
            <Form.Control
              required={true}
              as="textarea"
              rows="2"
              ref={this.props.newAdmission.RhomeStreetLandMark}
              disabled={this.state.residentialAddressDisabled}
            />
          </Form.Group>
        </Col>
      </Row>
    );
  }
}

export default AddressForm;
