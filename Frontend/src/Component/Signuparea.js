import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import { Navigate } from "react-router-dom";

const Signuparea = () => {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const navigate = useNavigate();

  function auth(e) {
    e.preventDefault();

    if (name === "" || age === "" || email === "" || password === "") {
      seterror("Please fill all the details");
    } else {
      Axios.post("http://localhost:3001/register", {
        name: name,
        age: age,
        email: email,
        password: password,
      }).then((response) => {
        if (response.data.message) {
          console.log("error");
        } else {
          // console.log("Account created successfully");
          navigate("/");
        }
      });
    }
  }

  return (
    <div className="loginarea">
      <div className="logo" data-aos="fade-in">
        <img src="./Images/Logo1.png" alt="" />
      </div>
      <div className="main-login-area">
        <div className="login-area" data-aos="flip-up">
          <div className="main-login-area-title">Sign up</div>

          <div className="signup-form-area">
            <form onSubmit={auth}>
              <input
                type="text"
                name=""
                id=""
                placeholder="Name"
                className="login-input"
                onChange={(e) => setname(e.target.value)}
              />
              <input
                type="text"
                name=""
                id=""
                className="login-input"
                placeholder="Age"
                onChange={(e) => setage(e.target.value)}
              />
              <input
                className="login-input"
                type="email"
                placeholder="Email"
                name=""
                id=""
                onChange={(e) => setemail(e.target.value)}
              />
              <input
                className="login-input"
                type="password"
                placeholder="Password"
                name=""
                id=""
                onChange={(e) => setpassword(e.target.value)}
              />

              <button className="login-btn">Signup</button>
              <p className="error-type">{error}</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signuparea;
