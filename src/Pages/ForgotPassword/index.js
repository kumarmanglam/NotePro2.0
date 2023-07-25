import React, { useState } from 'react';
import Expensia from '../../assets/images/expensia.png';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  const [userData, setUserData] = useState({
    email: '',
  });

  return (
    <div className="sign">
      <div className="signCard">
        <div>
          <img src={Expensia} alt="ene" className="Expensia" />
        </div>
        <h1 className="signtitle">Reset Password</h1>
        <p className="text-sm">Enter email to receive password reset link</p>
        <div className="inputWrap">
          <label className="labelSign" htmlFor="email">
            Email
          </label>
          <input
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            type="email"
            placeholder="Enter email"
            required
            className="inputSign"
            id="email"
          />
        </div>
        <button className="signBtn">Send Link</button>
      </div>
      <div className="noAccount">
        <Link to="/signup">
          <a className="SignLink">Don't have an account? Signup now!</a>
        </Link>
      </div>
    </div>
  );
}

export default ForgotPassword;
