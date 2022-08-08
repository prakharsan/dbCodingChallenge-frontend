import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import BasicCard from '../components/card';
import InfoModal from "../components/modal";

function Login() {
  const navigate = useNavigate();

  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
    {
      username: "user3",
      password: "pass3",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  useEffect(() => {
    if (isSubmitted) {
      navigate("/books");
    }
  }, [navigate, isSubmitted]);

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  return (
    <div className="app">
      <div className="login-text">FIC Bond Tracker</div>
      <div className="login-form">
        <div className="title">Sign In</div>
        <InfoModal
          name="Reliance"
          isin="US-000402625-0"
          cusip="CUSIP 084664BL4"
          issuer="ABC Ltd."
          maturityDate={new Date()}
          coupon="0"
          type="Government"
          faceValue="200 INR"
          status="Overdue"
        />
        {/* Login Form */}
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Username </label>
              <input type="text" name="uname" required />
              {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="pass" required />
              {renderErrorMessage("pass")}
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
