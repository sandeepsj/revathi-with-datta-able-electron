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
const electron = window.require("electron");
const ipc = electron.ipcRenderer;
class BootstrapTable extends React.Component {
  state = {
    subjects: [],

    modalStatus: false,
  };
  targetSubject;
  newSubjectName = React.createRef();
  newSubjectFee = React.createRef();
  getSubjects = () => {
    ipc.send("getReq", "Subject");
    ipc.on("getRes-Subject", (evt, reply) => {
      this.setState({
        subjects: [...reply],
        modalStatus: this.state.modalStatus,
      });
    });
  };
  deleteSubject = (subjectName) => {
    ipc.send("deleteReq", "Subject", subjectName);
    ipc.on("deleteRes-Subject", (evt, reply) => {
      if (reply === 1) this.getSubjects();
      console.log("Error while delete");
    });
  };
  updateSubject = (subjectName, fee) => {
    ipc.send("updateReq", "Subject", subjectName, fee);
    ipc.on("updateRes-Subject", (evt, reply) => {
      if (reply === 1) this.getSubjects();
      else console.log("Error while updating");
    });
  };
  addSubject = (subjectName, fee) => {
    ipc.send("addReq", "Subject", {
      subject: subjectName.current.value,
      fee: fee.current.value,
    });
    ipc.on("addRes-Subject", (evt, reply) => {
      if (reply === 1) {
        this.getSubjects();
        subjectName.current.value = "";
        fee.current.value = "";
      } else console.log("Error while adding");
    });
  };
  componentDidMount() {
    this.getSubjects();
  }
  render() {
    return (
      <Aux>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title as="h5">Hover Table</Card.Title>
                <span className="d-block m-t-5">
                  Update Fee, Remove a Subject or Add a new Subject.
                </span>
              </Card.Header>
              <Card.Body>
                <h5>Update Subjects Table</h5>
                <hr />
                <Row>
                  <Col md={5}>
                    <Form>
                      {this.state.subjects.map((row) => (
                        <InputGroup className="mb-3" key={row.Subject}>
                          <InputGroup.Prepend>
                            <Button variant="secondary" style={{ width: 120 }}>
                              {row.Subject}
                            </Button>
                          </InputGroup.Prepend>
                          <FormControl
                            defaultValue={row.Fee}
                            aria-describedby="basic-addon1"
                          />
                          <InputGroup.Append>
                            <Button
                              variant="outline-secondary"
                              onClick={() => {
                                this.targetSubject = row.Subject;
                                this.setState({
                                  ...this.state.subject,
                                  modalStatus: true,
                                });
                              }}
                            >
                              <i className="fa fa-trash"></i>
                            </Button>
                          </InputGroup.Append>
                        </InputGroup>
                      ))}
                      <Form
                        onSubmit={() => {
                          this.addSubject(
                            this.newSubjectName,
                            this.newSubjectFee
                          );
                        }}
                      >
                        <InputGroup className="mb-3">
                          <InputGroup.Prepend>
                            <FormControl
                              placeholder="New Subject"
                              aria-describedby="basic-addon1"
                              style={{ width: 120 }}
                              ref={this.newSubjectName}
                            />
                          </InputGroup.Prepend>
                          <FormControl
                            placeholder="New Fee"
                            aria-describedby="basic-addon1"
                            ref={this.newSubjectFee}
                          />
                          <InputGroup.Append>
                            <Button variant="warning" type="submit">
                              <i className="fa fa-plus-square"></i>
                            </Button>
                          </InputGroup.Append>
                        </InputGroup>
                      </Form>
                      <Button variant="primary">Save</Button>
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
                          This action cannot be reversed!! Are you Sure to
                          Delete?
                        </p>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="danger"
                          onClick={() => {
                            this.setState({
                              ...this.state.subject,
                              modalStatus: false,
                            });
                            this.deleteSubject(this.targetSubject);
                          }}
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
