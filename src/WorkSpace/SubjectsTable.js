import React from "react";
import {
  Row,
  Col,
  Card,
  InputGroup,
  Form,
  Button,
  FormControl,
  Modal,
} from "react-bootstrap";

import Aux from "../hoc/_Aux";

class BootstrapTable extends React.Component {
  state = {
    subjects: {
      Veena: 300,
      Guitar: 500,
      Keyboard: 1000,
      Dance: 700,
      Vocal: 400,
      Drawing: 500,
      Tabla: 550,
    },
    modalStatus: false,
  };
  render() {
    return (
      <Aux>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title as="h5">Hover Table</Card.Title>
                <span className="d-block m-t-5">
                  use props <code>hover</code> with <code>Table</code> component
                </span>
              </Card.Header>
              <Card.Body>
                <h5>Update Subjects Table</h5>
                <hr />
                <Row>
                  <Col md={5}>
                    <Form>
                      {Object.keys(this.state.subjects).map((subject) => (
                        <InputGroup className="mb-3" key={subject}>
                          <InputGroup.Prepend>
                            <Button variant="secondary" style={{ width: 150 }}>
                              {subject}
                            </Button>
                          </InputGroup.Prepend>
                          <FormControl
                            defaultValue={this.state.subjects[subject]}
                            aria-describedby="basic-addon1"
                          />
                          <InputGroup.Append>
                            <Button
                              variant="outline-secondary"
                              onClick={() =>
                                this.setState({
                                  ...this.state.subject,
                                  modalStatus: true,
                                })
                              }
                            >
                              <i className="fa fa-trash"></i>
                            </Button>
                          </InputGroup.Append>
                        </InputGroup>
                      ))}
                      <Button variant="primary">Submit</Button>
                    </Form>
                    <Modal
                      size="sm"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                      show={this.state.modalStatus}
                    >
                      <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                          Are you sure to delete?
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <p>
                          Cras mattis consectetur purus sit amet fermentum. Cras
                          justo odio, dapibus ac facilisis in, egestas eget
                          quam. Morbi leo risus, porta ac consectetur ac,
                          vestibulum at eros.
                        </p>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="danger"
                          onClick={() =>
                            this.setState({
                              ...this.state.subject,
                              modalStatus: false,
                            })
                          }
                        >
                          Delete
                        </Button>
                        <Button
                          variant="primary"
                          onClick={() =>
                            this.setState({
                              ...this.state.subject,
                              modalStatus: false,
                            })
                          }
                        >
                          Cancel
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Aux>
    );
  }

  deleteConfirmationModal = (isopen) => {
    console.log(isopen);
    return <div></div>;
  };
}

export default BootstrapTable;
