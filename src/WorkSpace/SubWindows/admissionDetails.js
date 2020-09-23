import React, { Component } from "react";
import {
  Col,
  Card,
  Table,
  Button,
  Row,
  Form,
  Tab,
  Tabs,
} from "react-bootstrap";
import { data } from "jquery";
import ActiveAdmission from "./tabs/activeAdmission";
class PersonalDetails extends Component {
  state = {
    editable: false,
    key: 0,
  };
  getSubjectWiseAdmission = () => {
    const res = {};
    // console.log(this.props.state);

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
          <Tabs
            defaultActiveKey="Active Admissions"
            id="uncontrolled-tab-example"
          >
            <Tab eventKey="Active Admissions" title="Active Admissions">
              <ActiveAdmission state={this.props.state} />
            </Tab>
            <Tab eventKey="New Admission" title="New Admission">
              psfpewo
            </Tab>
            <Tab eventKey="Close Admission" title="Close Admission">
              psfpewo
            </Tab>
            <Tab eventKey="Admission History" title="Admission History">
              psfpewo
            </Tab>
          </Tabs>
        </Col>
      </div>
    );
  }
}

export default PersonalDetails;
