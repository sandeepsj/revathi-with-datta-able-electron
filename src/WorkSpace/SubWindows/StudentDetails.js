import React from "react";
import { Row, Col, Tab, Nav, Container } from "react-bootstrap";
import "../../assets/scss/style.scss";
import Aux from "../../hoc/_Aux";
import PersonalDetails from "./personalDetails";
import Home from "./home";
import AdmissionDetails from "./admissionDetails";
const electron = window.require("electron");
const ipc = electron.ipcRenderer;
class TabsPills extends React.Component {
  state = {
    personalDetails: {
      StudentID: undefined,
      "Student's Name": undefined,
      School: undefined,
      "Date-of-Birth": undefined,
      Gender: undefined,
      Phone: undefined,
      "Alternate Phone": undefined,
      Email: undefined,
      "Father's Name": undefined,
      "Mother's Name": undefined,
      "Father's Occupation": undefined,
      "Mother's Occupation": undefined,
      "Monthly Income": undefined,
      pState: undefined,
      pDistrict: undefined,
      pCity: undefined,
      pHomeStreetLandMark: undefined,
      pPincode: undefined,
      rState: undefined,
      rDistrict: undefined,
      rCity: undefined,
      rHomeStreetLandMark: undefined,
      rPincode: undefined,
    },
    admissionDetails: [
      // 0: {
      //   AdmissionNo: 1,
      //   StudentID: 1,
      //   Subject: "Keyboard",
      //   "Admission Date": "2020-08-27",
      //   "Closed Date": null,
      //   Status: "OPEN",
      // },
      // 1: {
      //   AdmissionNo: 2,
      //   StudentID: 1,
      //   Subject: "Dance",
      //   "Admission Date": "2020-08-27",
      //   "Closed Date": null,
      //   Status: "OPEN",
      // },
    ],
  };

  personalDetailsRefs = {};
  submitPersonalDetailsEdits = () => {
    const editedObj = {};
    Object.keys(this.state.personalDetails).map((key) => {
      if (
        this.personalDetailsRefs[key].current.value !=
        this.state.personalDetails[key]
      ) {
        editedObj[key] = this.personalDetailsRefs[key].current.value;
      }
    });
    editedObj.StudentID = this.state.personalDetails.StudentID;
    ipc.send("updateReq", "Student", editedObj);
    ipc.on("updateRes-Student", (evt, res) => {
      this.requestId(this.state.personalDetails.StudentID);
    });
  };
  requestId = (studentID) => {
    if (studentID === undefined) {
      ipc.send("subWindowReq-StudentCard");
    } else {
      ipc.send("subWindowReq-StudentCard", studentID);
    }
    ipc.on("Res-StudentCard", (evt, reply) => {
      this.setState({ ...reply });
    });
  };
  componentDidMount() {
    this.requestId();
    Object.keys(this.state.personalDetails).map((key) => {
      this.personalDetailsRefs[key] = React.createRef();
    });
  }
  render() {
    return (
      <Aux>
        <Container>
          <Row>
            <Col>
              <h5 className="mt-4">
                {this.state.personalDetails["Student's Name"]}
              </h5>
              Student ID:{this.state.personalDetails["StudentID"]}
              <hr />
              <Tab.Container defaultActiveKey="home">
                <Row>
                  <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="home">Home</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="profile">Personal Details</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="admission-details">
                          Admission Details
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fee-details">Fee Details</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={9}>
                    <Tab.Content>
                      <Tab.Pane eventKey="home">
                        <Home state={this.state.personalDetails} key="home" />
                      </Tab.Pane>
                      <Tab.Pane eventKey="profile">
                        <PersonalDetails
                          state={this.state.personalDetails}
                          refs={this.personalDetailsRefs}
                          submitEdits={this.submitPersonalDetailsEdits}
                          key="personalDetails"
                        />
                      </Tab.Pane>
                      <Tab.Pane eventKey="admission-details">
                        <AdmissionDetails
                          state={this.state}
                          key="admissionDetails"
                        />
                      </Tab.Pane>
                      <Tab.Pane eventKey="fee-details">
                        <p>
                          Etsy mixtape wayfarers, ethical wes anderson tofu
                          before they sold out mcsweeney's organic lomo retro
                          fanny pack lo-fi farm-to-table readymade. Messenger
                          bag gentrify pitchfork tattooed craft beer, iphone
                          skateboard locavore carles etsy salvia banksy hoodie
                          helvetica. DIY synth PBR banksy irony. Leggings
                          gentrify squid 8-bit cred pitchfork. Williamsburg banh
                          mi whatever gluten-free, carles pitchfork biodiesel
                          fixie etsy retro mlkshk vice blog. Scenester cred you
                          probably haven't heard of them, vinyl craft beer blog
                          stumptown. Pitchfork sustainable tofu synth chambray
                          yr.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
      </Aux>
    );
  }
}

export default TabsPills;
