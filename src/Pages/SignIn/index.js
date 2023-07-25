import React, { useState } from 'react';
import Expensia from '../../assets/images/expensia.png';
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <div className="sign">
      <div className="signCard">
        <div>image</div>
        <h1 className="signtitle">Login to Expensia</h1>
        <div className="inputWrap">
          <label className="labelSign" htmlFor="email">
            Email
          </label>
          <input
            // value={userData.email}
            // onChange={(e) =>
            //   setUserData({ ...userData, email: e.target.value })
            // }
            type="email"
            placeholder="Enter email"
            required
            className="inputSign"
            id="email"
          />
        </div>
        <div className="inputWrap">
          <label className="labelSign" htmlFor="password">
            Password
          </label>
          <input
            // value={userData.password}
            // onChange={(e) =>
            //   setUserData({ ...userData, password: e.target.value })
            // }
            type="password"
            placeholder="Enter password"
            required
            className="inputSign"
            id="password"
          />
        </div>
        <button className="signBtn">Login</button>
        <Link to="/forgotpassword">
          <div className="SignLink" onClick={signIn}>
            Forgot password?
          </div>
        </Link>
      </div>
      <div className="noAccount">
        <Link to="/signup">
          <div className="SignLink">Don't have an account? Signup now!</div>
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
