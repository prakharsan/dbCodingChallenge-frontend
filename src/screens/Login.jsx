import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

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

    let { uname, pass } = document.forms[0];

    /*
    ----- OLD CODE FOR DUMMY AUTHENTICATION -----

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        localStorage.setItem('username', userData.username);
        localStorage.setItem('password', userData.password);
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }

    */

    //---- NEW CODE FOR BACKEND SUPPORTED AUTHENTICATION ----

    //Authenticate the user with the backend and generate token:
    const backendURL = "localhost:8081";

    fetch(backendURL+"/api/token", {
      // Adding body or contents to send
      body: JSON.stringify({
          "username": uname,
          "password" : pass
      }),
      headers: {
          'Content-Type': 'application/json',
      },
      // Adding method type
      method: "POST",
    })
    // Converting to JSON
    .then((response) => {
    response.json().then((data)=> {
            //console.log(data)
            //If login is successful, then dispatch the token and currentUser data into the store
            if(response.status===200){
                console.log("Success");
                console.log(response);
            }
            else{
                console.log("Failure");
                console.log(response);
            }
            
        });
    })
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
