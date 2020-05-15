import React, { useState, Component } from 'react';
import './styles/styles.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Gallery from "./components/gallery.component";
import Navbar from "./components/navbar.component";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/login.component';
import { render } from '@testing-library/react';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: true,
      username: 'rrr392',
      signedOut: false
    }
    this.gridToggle = this.gridToggle.bind(this)
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.signedOutToggle = this.signedOutToggle.bind(this)
  }

  gridToggle(event) {
    this.setState({ grid: !this.state.grid })
  }

  handleUsernameChange(event) {

  }

  signedOutToggle(event) {
    this.setState({
      signedOut: !this.state.signedOut,
    })
    this.setState({
      username: this.state.signedOut ? "rrr392" : ""
    })
  }

  render() {
    return (
      <Router>
        <div className={'container'}>
          <Navbar appName={'Photo Viewer'}
            username={this.state.username}
            signoutToggleFunc={this.signedOutToggle}
            signedOutFlag={this.state.signedOut} />
          <button
            className={'btn btn-light centered'}
            onClick={this.gridToggle}>View as {this.state.grid ? `List` : `Grid`}</button>
          {/* {this.state.signedOut ? <Login /> : <Gallery galleryStyle={this.state.grid ? 'tile' : 'full'} />} */}
          {/* {this.state.signedOut ?
            null : null
          } */}
          <Route path="/login" exact component={Login} />
          <Route path="/gallery" exact 
          render={(props)=><Gallery {...props} galleryStyle={this.state.grid ? 'tile' : 'full'} />} />
        </div>
      </Router>);
  }
}

