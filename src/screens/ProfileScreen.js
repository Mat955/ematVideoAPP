import React from 'react';
import { useSelector } from 'react-redux';
import { auth } from '../firebase';
import Nav from '../Nav';
import { selectUser } from '../userSlice';
import './ProfileScreen.css';

function ProfileScreen() {

  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt="" />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plan">
              <button onClick={() => auth.signOut()} className="profileScreen__signOut">Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;