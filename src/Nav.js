import React, { useState, useEffect } from 'react';
import './Nav.css';
import logo from './Images/logo-ematpro-dev.png';
import { useHistory } from 'react-router';

function Nav() {

  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img onClick={() => history.push("/")} className="nav__logo" src={logo} alt="" />
        <img onClick={() => history.push("./profile")} className="nav__avatar" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt="" />
      </div>
    </div>
  )
}

export default Nav;
