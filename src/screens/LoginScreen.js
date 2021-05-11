import React, { useState } from 'react';
import './LoginScreen.css';
import logo from '../Images/logo-ematpro-dev.png';
import SignupScreen from './SignupScreen';

function Login() {

  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img className="loginScreen__logo" src={logo} alt="" />
        <button className="loginScreen__button" onClick={() => setSignIn(true)}>
          Sign in
        </button>
        <div className="loginScreen__gradient" />
      </div>
      <div className="loginScreen__body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>THE HOME OF SERIES ONLINE</h2>
            <h3>No binding period, cancel anytime online.</h3>
            <div className="loginScreen__input">
              <form>
                <input type="email"
                  placeholder="Email Adress"
                />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen__getStarted">
                  START TODAY
              </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login
