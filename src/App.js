import React from "react";
import { connect } from "react-redux";
import { login } from "./reducer/reducer";
import store from "./reducer/store";
import Subscribers from "../src/Subscribers";
import axios from "axios";
import "./App.css";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="main-container">
        <h1>CLUB FM Portal</h1>
        <Router>
          <div>
            <Link to="/sign-up">Singn Up</Link> ||
            <Link to="/sign-in">Sign In</Link> ||
            <Link to="/subscribers">Channel Subscribers</Link>
            <Switch>
              <Route exact path="/sign-up" component={Register} />
              <Route path="/sign-in" component={SignIn} />
              <Route path="/subscribers" component={Subscribers} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginFailed: state.loginFailed
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
};

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

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.submitAction = this.submitAction.bind(this);
  }
  render() {
    let { email, password } = this.state;
    let { isLoginPending, isLoginSuccess, loginFailed } = this.props;
    return (
      <div className="logincontainer">
        <form
          className="loginForm"
          name="loginForm"
          onSubmit={this.submitAction}
        >
          <h1>USER LOGIN HERE</h1>
          <div className="form-fields">
            <div>
              <div>
                <label>Username </label>
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  onChange={e => this.setState({ email: e.target.value })}
                ></input>
              </div>
            </div>
            <div>
              <div>
                <label>Password </label>
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  onChange={e => this.setState({ password: e.target.value })}
                ></input>
              </div>
            </div>
            <input type="submit" className="submitClass" value="SignIn" />
            <div className="message">
              {isLoginPending && <div>Please wait...</div>}
              {isLoginSuccess && <div>Success.</div>}
              {loginFailed && <div>{loginFailed.message}</div>}
            </div>
          </div>
        </form>
      </div>
    );
  }
  submitAction(e) {
    e.preventDefault();
    let { email, password } = this.state;
    this.props.login(email, password);
    this.setState({ email: "", password: "" });
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
