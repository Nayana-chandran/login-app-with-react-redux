import React from "react";
import { connect } from "react-redux";
import { login } from "./reducer/reducer";
import store from "./reducer/store";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.submitAction = this.submitAction.bind(this);
  }
  render() {
    let { email, password } = this.state;
    let { isLoginPending, isLoginSuccess, loginFailed } = this.props;
    console.log(isLoginSuccess);
    return (
      <div className="logincontainer">
        <form
          className="loginForm"
          name="loginForm"
          onSubmit={this.submitAction}
        >
          <h1>USER LOGIN FORM</h1>
          <div className="form-fields">
            <div>
              <label>Username : </label>
              <input
                type="email"
                name="email"
                onChange={e => this.setState({ email: e.target.value })}
              ></input>
            </div>
            <div>
              <label>Password : </label>
              <input
                type="pasword"
                name="password"
                onChange={e => this.setState({ password: e.target.value })}
              ></input>
            </div>
            <input type="submit" className="submitClass" value="Login" />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
