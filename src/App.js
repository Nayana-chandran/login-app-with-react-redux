import React from "react";
import { connect } from "react-redux";
import Subscribers from "../src/Subscribers";
import Register from "../src/components/Register";
import SignIn from "../src/components/Signin";
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
export default App;
