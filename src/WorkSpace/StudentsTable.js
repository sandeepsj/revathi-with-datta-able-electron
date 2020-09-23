import { Block, Filter } from "@material-ui/icons";
import React from "react";
import Fullscreen from "react-full-screen";
import {
  Row,
  Col,
  Card,
  Form,
  Table,
  Badge,
  Dropdown,
  DropdownButton,
  FormControl,
  Button,
} from "react-bootstrap";
import Aux from "../hoc/_Aux";
import "./css/table.css";
import StandardTable from "./Tables/standardTable";
import AdvancedTable from "./Tables/advancedTable";

const electron = window.require("electron");
const ipc = electron.ipcRenderer;
class TableBootstrap extends React.Component {
  state = {
    data: [],
    headers: [],
    selectedHeaders: [],
    isFull: false,
    tableToggle: true,
  };
  originalData = {
    data: [],
    headers: [],
  };
  searchKeys = {};
  goFull = () => {
    this.setState({
      ...this.state,
      isFull: !this.state.isFull,
    });
  };

  getStudents = () => {
    ipc.send("getReq", "Student");
    ipc.on("getRes-Student", (evt, reply) => {
      if (reply[0]) {
        this.setState({
          ...this.state,
          data: [...reply],
          headers: [...Object.keys(reply[0])],
          selectedHeaders: [...Object.keys(reply[0])],
        });
        this.originalData = {
          ...this.state,
          data: [...reply],
          headers: [...Object.keys(reply[0])],
          selectedHeaders: [...Object.keys(reply[0])],
        };
      }
    });
  };

  handleSearch = (col, value) => {
    this.searchKeys[col] = value;
    const newState = {
      ...this.state,
      data: [],
      header: { ...this.originalData.headers },
    };
    this.originalData.data.map((row) => {
      var count = 0;
      Object.keys(this.searchKeys).map((key) => {
        if (String(row[key]).match(RegExp(`.*${this.searchKeys[key]}.*`, "i")))
          count++;
      });
      if (count === Object.keys(this.searchKeys).length)
        newState.data.push(row);
    });
    this.setState({ ...newState });
  };
  notifyMain = (id) => {
    ipc.send("newSubWindow-StudentCard", id);
    ipc.on("StudentUpdated", (evt) => {
      this.getStudents();
    });
  };
  setSelectedHeaders = (headers) => {
    const newstate = {
      ...this.state,
      data: [...this.state.data],
      headers: [...this.state.headers],
      selectedHeaders: [...headers],
    };
    this.setState(newstate);
  };
  selectHeaders = (header) => {
    if (this.state.selectedHeaders.includes(header)) {
      this.setSelectedHeaders(
        this.state.selectedHeaders.filter((head) => head !== header)
      );
    } else {
      const newheaders = [...this.state.selectedHeaders];
      newheaders.push(header);
      this.setSelectedHeaders(newheaders);
    }
  };

  componentDidMount() {
    this.getStudents();
  }
  render() {
    return (
      <Aux>
        <Fullscreen enabled={this.state.isFull}>
          <Row>
            <Col>
              <Card>
                <Card.Header>
                  <Card.Title as="h5">Student Details</Card.Title>

                  <span className="d-block m-t-5">
                    Click on <Badge variant="success">More Details</Badge> for
                    editing and seeing all the data related to a particular
                    student.
                  </span>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col>
                      <Dropdown>
                        <Dropdown.Toggle variant="warning" id="dropdown-basic">
                          Filter Options
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          className="bg-light text-sm"
                          style={{
                            overflowY: "auto",
                            height: 450,
                            width: 950,
                            padding: 25,
                          }}
                        >
                          <div className="mx-3 my-2 w-auto">
                            <Row>
                              {this.state.headers.map((header) => (
                                <Col md="3" key={header}>
                                  <Form.Group>
                                    <Form.Check
                                      label={header}
                                      defaultChecked
                                      onClick={() => this.selectHeaders(header)}
                                    />
                                    <Form.Control
                                      size="sm"
                                      type="text"
                                      placeholder={header}
                                      onChange={(event) =>
                                        this.handleSearch(
                                          header,
                                          event.target.value
                                        )
                                      }
                                    />
                                  </Form.Group>
                                </Col>
                              ))}
                            </Row>
                          </div>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                    <Col>
                      <Button
                        variant="btn btn-outline-secondary"
                        style={{ float: "right" }}
                        onClick={this.goFull}
                      >
                        Full Screen
                        <i className="feather icon-maximize ml-2"></i>
                      </Button>
                      <Button
                        variant="btn btn-outline-secondary"
                        style={{ float: "right" }}
                        onClick={this.toggleTable}
                      >
                        Advanced Editing
                        <i className="fa fa-pencil-square-o ml-2"></i>
                      </Button>
                    </Col>
                  </Row>
                  {this.getTable()}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Fullscreen>
      </Aux>
    );
  }
  getTable = () => {
    if (this.state.tableToggle) {
      return (
        <StandardTable
          state={this.state}
          handlers={{ notifyMain: this.notifyMain }}
        />
      );
    } else {
      return <AdvancedTable state={this.state} />;
    }
  };
  toggleTable = () => {
    this.setState({ ...this.state, tableToggle: !this.state.tableToggle });
  };
}

export default TableBootstrap;
