import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

function Login(props) {
  return (
    <form>
      <div className="form-group">
        <div>
          <input type='text' className={'col-md-6'} placeholder={'Username'}></input>
        </div>
        <div>
          <input type='password' className={'col-md-6'} placeholder={'Password'}></input>
        </div>
        <div>
          <button type={'submit'} id={'login-button'} className={'btn btn-dark col-md-6'}>Login</button>
        </div>
      </div>
    </form>
  )
}

export default Login;