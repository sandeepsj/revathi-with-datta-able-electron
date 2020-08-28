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
      StudentID: 0,
      "Student's Name": "",
      School: "",
      "Date-of-Birth": "2020-08-27",
      Gender: "",
      Phone: "",
      "Alternate Phone": "",
      Email: "ssj@gmc.oms",
      "Father's Name": "",
      "Mother's Name": "",
      "Father's Occupation": "",
      "Mother's Occupation": "",
      "Monthly Income": 1000,
      pState: "",
      pDistrict: "",
      pCity: "",
      pHomeStreetLandMark: "",
      pPincode: "",
      rState: "",
      rDistrict: "",
      rCity: "",
      rHomeStreetLandMark: "",
      rPincode: "",
    },
    admissionDetails: {
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
    },
  };

  requestId = () => {
    ipc.send("subWindowReq-StudentCard");
    ipc.on("Res-StudentCard", (evt, reply) => {
      ipc.send("StudentCard", reply);
      this.setState({ ...reply });
      console.log(this.state, "kugyfyrxuji");
    });
  };
  componentDidMount() {
    this.requestId();
  }
  render() {
    return (
      <Aux>
        <Container>
          <Row>
            <Col>
              <h5 className="mt-4">{this.state["Student's Name"]}</h5>
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
