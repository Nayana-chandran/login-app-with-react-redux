import React from "react";
import axios from "axios";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.registerAction = this.registerAction.bind(this);
  }

  render() {
    let { username, password, contact } = this.state;
    return (
      <div className="customer-register">
        <form onSubmit={this.registerAction}>
          <h1>USER REGISTER HERE</h1>
          <div className="form-fields">
            <div>
              <div className="field-label">
                <label>Username</label>
              </div>
              <div>
                <input
                  type="text"
                  name="username"
                  onChange={e => this.setState({ username: e.target.value })}
                ></input>
              </div>
            </div>
            <div>
              <div className="field-label">
                <label>Contact Number</label>
              </div>
              <div>
                <input
                  type="text"
                  name="contact"
                  onChange={e => this.setState({ contact: e.target.value })}
                ></input>
              </div>
            </div>
            <div>
              <div className="field-label">
                <label>Password</label>
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  onChange={e => this.setState({ password: e.target.value })}
                ></input>
              </div>
            </div>
            <div className="signup-btn">
              <input type="submit" className="submitClass" value="SignUp" />
            </div>
          </div>
        </form>
      </div>
    );
  }
  registerAction(e) {
    e.preventDefault();
    let { username, password, contact } = this.state;
    axios
      .post("http://192.168.8.253:8080/addUser", { data: this.state })
      .then(res => {
        console.log("customer successfully registered");
      })
      .catch(error => {
        //on error
      });
  }
}
export default Register;
