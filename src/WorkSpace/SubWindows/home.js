import React, { Component } from "react";
import { Badge } from "react-bootstrap";
import DefaultAvatar from "../../assets/images/user/avatar blank.png";

class Home extends Component {
  state = {};

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-3">
            <img
              src={DefaultAvatar}
              alt="Not found"
              className="img-thumbnail"
            />
          </div>
          <div className="col-9">
            <div className="row p-2">
              <h5>{this.props.state["Student's Name"]}</h5>
            </div>
            <div className="row p-2">School: {this.props.state["School"]}</div>
            <div className="row p-2">Phone: {this.props.state["Phone"]}</div>
            <div className="row p-2">
              <p>
                Fee Due:<Badge variant="warning">3 Months</Badge>
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12">
            <h5>Subjects Enrolled & Month of last payment</h5>
            Working on it...
            {/* <div className="row  p-2">
              <h6>KeyBoard: June</h6>
            </div>
            <div className="row  p-2">
              <h6>Veena: July</h6>
            </div>
            <div className="row  p-2">
              <h6>Guitar: March</h6>
            </div>
            <div className="row  p-2">
              <h6>Vocal: August</h6>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
