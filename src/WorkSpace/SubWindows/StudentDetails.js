import React from "react";
import { Row, Col, Tab, Nav, Container } from "react-bootstrap";
import "../../assets/scss/style.scss";
import Aux from "../../hoc/_Aux";
import PersonalDetails from "./personalDetails";
import Home from "./home";
class TabsPills extends React.Component {
  state = {
    name: "Sandeep S J",
  };
  render() {
    return (
      <Aux>
        <Container>
          <Row>
            <Col>
              <h5 className="mt-4">{this.state.name}</h5>
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
                        <Nav.Link eventKey="fee-details">Fee Details</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="admission-details">
                          Admission Details
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={9}>
                    <Tab.Content>
                      <Tab.Pane eventKey="home">
                        <Home />
                      </Tab.Pane>
                      <Tab.Pane eventKey="profile">
                        <PersonalDetails />
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
                      <Tab.Pane eventKey="admission-details">
                        <p>
                          Eu dolore ea ullamco dolore Lorem id cupidatat
                          excepteur reprehenderit consectetur elit id dolor
                          proident in cupidatat officia. Voluptate excepteur
                          commodo labore nisi cillum duis aliqua do. Aliqua amet
                          qui mollit consectetur nulla mollit velit aliqua
                          veniam nisi id do Lorem deserunt amet. Culpa ullamco
                          sit adipisicing labore officia magna elit nisi in aute
                          tempor commodo eiusmod.
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
