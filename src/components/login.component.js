import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

function Login(props) {
  return (
    <form>
      <div className="form-row">
        <div className="form-group col-md-6">
          <input type='text' className={'form-control'} placeholder={'Username'}></input>
        </div>
        <div className="form-group col-md-6">
        <input type='password' className={'form-control'} placeholder={'Password'}></input>
        </div>
      </div>
    </form>
  )
}

export default Login;