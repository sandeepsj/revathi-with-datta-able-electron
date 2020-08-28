import React from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import Aux from "../hoc/_Aux";
import StudentDetailsForm from "./newAdmissionComponents/StudentDetailsForm";
import ParentsDetailsForm from "./newAdmissionComponents/parentsDetailsForm";
import AddressForm from "./newAdmissionComponents/addressForm";
import SubjectsForm from "./newAdmissionComponents/subjectsForm";

const electron = window.require("electron");
const ipc = electron.ipcRenderer;

class FormsElements extends React.Component {
  state = {
    subjects: [],
    admnNo: 0,
  };
  newAdmission = {
    admissionDate: React.createRef(),
    studentsName: React.createRef(),
    school: React.createRef(),
    dateOfBirth: React.createRef(),
    gender: React.createRef(),
    phone: React.createRef(),
    alternatePhone: React.createRef(),
    email: React.createRef(),
    fathersName: React.createRef(),
    fathersOccupation: React.createRef(),
    mothersName: React.createRef(),
    mothersOccupation: React.createRef(),
    mothlyIncome: React.createRef(),
    Pstate: React.createRef(),
    Pdistrict: React.createRef(),
    Pcity: React.createRef(),
    Ppincode: React.createRef(),
    PhomeStreetLandMark: React.createRef(),
    Rstate: React.createRef(),
    Rdistrict: React.createRef(),
    Rcity: React.createRef(),
    Rpincode: React.createRef(),
    RhomeStreetLandMark: React.createRef(),
  };
  getSubjects = () => {
    ipc.send("getReq", "Subject");
    ipc.on("getRes-Subject", (evt, reply) => {
      this.newAdmission.subjects = {};
      reply.map((subject) => {
        this.newAdmission.subjects[subject.Subject] = React.createRef();
      });
      this.setState({
        subjects: [...reply],
        admnNo: this.state.admnNo,
      });
    });
  };
  getAdmnNo = () => {
    ipc.send("nextAdmissionNo");
    ipc.on("Res-nextAdmissionNo", (evt, reply) => {
      this.setState({ ...this.state.subjects, admnNo: reply });
    });
  };
  submitAdmission = (values) => {
    var studentDetails = {};
    Object.keys(values).map((key) => {
      if (key === "subjects") {
        studentDetails.subjects = [];
        Object.keys(values.subjects).map((subject) => {
          if (values.subjects[subject].current.checked)
            studentDetails.subjects.push(subject);
        });
      } else studentDetails[key] = values[key].current.value;
    });
    ipc.send("newAdmission", { ...studentDetails });
    ipc.on("newAdmissionRes", (evt, reply) => {
      alert(reply);
    });
  };
  handleResidetialAddres = () => {
    this.newAdmission.Rstate.current.value = this.newAdmission.Pstate.current.value;
    this.newAdmission.Rcity.current.value = this.newAdmission.Pcity.current.value;
    this.newAdmission.Rdistrict.current.value = this.newAdmission.Pdistrict.current.value;
    this.newAdmission.RhomeStreetLandMark.current.value = this.newAdmission.PhomeStreetLandMark.current.value;
    this.newAdmission.Rpincode.current.value = this.newAdmission.Ppincode.current.value;
  };
  componentDidMount() {
    this.getSubjects();
    this.getAdmnNo();
  }

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
                    <Form
                      onSubmit={() => this.submitAdmission(this.newAdmission)}
                    >
                      <StudentDetailsForm
                        state={this.state}
                        newAdmission={this.newAdmission}
                      />
                      <hr />
                      <ParentsDetailsForm
                        state={this.state}
                        newAdmission={this.newAdmission}
                      />
                      <hr />
                      <AddressForm
                        state={this.state}
                        newAdmission={this.newAdmission}
                        handleResidetialAddres={this.handleResidetialAddres}
                      />
                      <hr />
                      <SubjectsForm
                        state={this.state}
                        newAdmission={this.newAdmission}
                      />
                      <hr />

                      <Button type="submit" variant="primary">
                        Submit
                      </Button>
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
