import React, { useState, Component } from 'react';
import './styles/styles.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Gallery from "./components/gallery.component";
import Navbar from "./components/navbar.component";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/login.component';
import { render } from '@testing-library/react';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: true,
      username: "",
      password: "",
      signedOut: true
    }
    this.gridToggle = this.gridToggle.bind(this)
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.signedOutToggle = this.signedOutToggle.bind(this)
    this.onSubmit = this.onSubmit.bind(this);
  }

  gridToggle(event) {
    this.setState({ grid: !this.state.grid })
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value })
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value })
  }

  signedOutToggle(event) {
    this.setState({
      signedOut: !this.state.signedOut,
    })
    this.setState({
      username: this.state.signedOut ? "rrr392" : ""
    })
  }

  onSubmit(e) {
    // This line prevents default HTML form submission behavior
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password
    }
    console.log(user);
    // axios.post('http://localhost:5000/users/add', user)
    //   .then(res => console.log(res.data));
    // to allow entering multiple users. instead of going back to main page, clear username.
    // this.setState({ username: "" });
    window.location = "/gallery";
  }

  render() {
    return (
      <Router>
        <div className={'container'}>
          <Navbar appName={'Photo Viewer'}
            username={this.state.username}
            signoutToggleFunc={this.signedOutToggle}
            signedOutFlag={this.state.signedOut} />

          <Route path="/login" exact render={(props) => <Login {...props}
            usernameChange={this.handleUsernameChange}
            passwordChange={this.handlePasswordChange} 
            onSubmit={this.onSubmit} />} />
          
          <Route path="/gallery" exact
            render={(props) => <Gallery {...props}
              galleryStyle={this.state.grid ? 'tile' : 'full'}
              gridToggle={this.gridToggle}
              gridView={this.state.grid} />} />
        </div>
      </Router>);
  }
}

