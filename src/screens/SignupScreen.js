import React, { useRef } from 'react';
import { auth } from '../firebase';
import './SignupScreen.css';

function SignupScreen() {

  const emailRef = useRef(null);
  const passwordref = useRef(null);

  const register = e => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordref.current.value
      )
      .then((authUser) => {

      })
      .catch(error => {
        alert(error.message)
      });
  };

  const signIn = e => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordref.current.value
    )
      .then(authUser => {

      })
      .catch(error => alert(error.message));
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign in</h1>
        <input ref={emailRef} placeholder="Email" typeof="email" />
        <input ref={passwordref} placeholder="Password" type="password" />
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
