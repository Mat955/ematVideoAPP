import React from 'react';
import './SignupScreen.css';

function SignupScreen() {

  const register = (e) => {
    e.preventDefault();
  };

  const signIn = e => {
    e.preventDefault();
  }

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign in</h1>
        <input placeholder="Email" typeof="email" />
        <input placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>Sign In</button>
        <h4>
          <span className="signupScreen__gray">New to ematPRO Films? </span>
          <span className="signupScreen__link" onClick={register}>Sign Up now.</span>
        </h4>
      </form>
    </div>
  )
}

export default SignupScreen;
