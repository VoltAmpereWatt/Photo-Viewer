import React, { useState } from 'react';
import './styles/styles.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Gallery from "./components/gallery.component";
import Navbar from "./components/navbar.component";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/login.component';


function App() {
  const [grid, toggleView] = useState(true);
  const [userName, updateUserName] = useState('user1');
  const [signedOut, signedOutToggle] = useState(false);
  console.log({userName})
  console.log({ grid });
  console.log({signedOut})
  return (
    <Router>
      <div className={'container'}>
        <Navbar appName={'Photo Viewer'}
          username={signedOut ? userName : ''}
          signout={() => {
            updateUserName('')
            signedOutToggle(!signedOut)
          }} signedOutFlag={signedOut} />
        {signedOut?<button
          className={'btn btn-light centered'}
          onClick={() => toggleView(!grid)}>View as {grid ? `Grid` : `List`}</button>:null}
        {signedOut?<Login/>:<Gallery galleryStyle={grid ? 'tile' : 'full'} />}
        <button type={'button'} id={'prev-page'} className={'btn btn-dark nav-button'}>Previous</button>
        <button type={'button'} id={'next-page'} className={'btn btn-primary nav-button'}>Next</button>
      </div>
    </Router>);
}

export default App;

