import React from "react";
import { Row, Col, Tab, Nav } from "react-bootstrap";

import Aux from "../../hoc/_Aux";
class TabsPills extends React.Component {
  state = {
    name: "Sandeep S J",
  };
  render() {
    return (
      <Aux>
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
                      <div className="row">
                        <div className="col-3">
                          <img
                            src="../../assets/images/user/avatar blank.png"
                            alt="Not found"
                            className="img-thumbnail"
                          />
                        </div>
                        <div className="col-9">
                          <div className="row p-3">asdfargawrberberbr</div>
                          <div className="row p-3">asdfasdfasdfwevwe</div>
                          <div className="row p-3">asdfasdfasdfwevwe</div>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-12">
                          <div className="row  p-3">asdfasdfasdfasdf</div>
                          <div className="row  p-3">asdfasdfasdf</div>
                          <div className="row  p-3">asdfasdfasdfasdfasdf</div>
                          <div className="row  p-3">asdfasdfasdfasdf</div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="profile">
                      <p>
                        Food truck fixie locavore, accusamus mcsweeney's marfa
                        nulla single-origin coffee squid. Exercitation +1 labore
                        velit, blog sartorial PBR leggings next level wes
                        anderson artisan four loko farm-to-table craft beer
                        twee. Qui photo booth letterpress, commodo enim craft
                        beer mlkshk aliquip jean shorts ullamco ad vinyl cillum
                        PBR. Homo nostrud organic, assumenda labore aesthetic
                        magna delectus mollit. Keytar helvetica VHS salvia yr,
                        vero magna velit sapiente labore stumptown. Vegan fanny
                        pack odio cillum wes anderson 8-bit, sustainable jean
                        shorts beard ut DIY ethical culpa terry richardson
                        biodiesel. Art party scenester stumptown, tumblr butcher
                        vero sint qui sapiente accusamus tattooed echo park.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fee-details">
                      <p>
                        Etsy mixtape wayfarers, ethical wes anderson tofu before
                        they sold out mcsweeney's organic lomo retro fanny pack
                        lo-fi farm-to-table readymade. Messenger bag gentrify
                        pitchfork tattooed craft beer, iphone skateboard
                        locavore carles etsy salvia banksy hoodie helvetica. DIY
                        synth PBR banksy irony. Leggings gentrify squid 8-bit
                        cred pitchfork. Williamsburg banh mi whatever
                        gluten-free, carles pitchfork biodiesel fixie etsy retro
                        mlkshk vice blog. Scenester cred you probably haven't
                        heard of them, vinyl craft beer blog stumptown.
                        Pitchfork sustainable tofu synth chambray yr.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="admission-details">
                      <p>
                        Eu dolore ea ullamco dolore Lorem id cupidatat excepteur
                        reprehenderit consectetur elit id dolor proident in
                        cupidatat officia. Voluptate excepteur commodo labore
                        nisi cillum duis aliqua do. Aliqua amet qui mollit
                        consectetur nulla mollit velit aliqua veniam nisi id do
                        Lorem deserunt amet. Culpa ullamco sit adipisicing
                        labore officia magna elit nisi in aute tempor commodo
                        eiusmod.
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
        </Row>
      </Aux>
    );
  }
}

export default TabsPills;