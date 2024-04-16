import React, { useState } from "react";
import "../Css/Login.css";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Axios from "axios";
const Loginarea = () => {
  const [eye, seteye] = useState(true);
  const [type, settype] = useState(true);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const navigate = useNavigate();

  function loginauth(e) {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please enter the login details");
    } else {
      Axios.post("http://localhost:3001/login", {
        email: email,
        password: password,
      }).then((res) => {
        if (res.data.message) {
          seterror("Invalid email or password");
        } else {
          // console.log("khush hoja login ho gya")
          // <Outlet/>
          const username = res.data[0].name;
          localStorage.setItem("username", username);
          navigate("/Home");
          console.log("done");
        }
      });
    }
  }

  function eyefunc() {
    seteye((oldvalue) => {
      return !oldvalue;
    });
    settype((oldvalue) => {
      return !oldvalue;
    });
  }

  return (
    <div className="loginarea">
      <div className="logo" data-aos="fade-in">
        <img src="./Images/Logo1.png" alt="" />
      </div>
      <div className="main-login-area">
        <div className="login-area" data-aos="flip-up">
          <div className="main-login-area-title">Login</div>

          <div className="form-area">
            <form onSubmit={loginauth}>
              <div className="inputs">
                <input
                  onChange={(e) => setemail(e.target.value)}
                  className="login-input"
                  type="text"
                  placeholder="Email"
                  name=""
                  id=""
                />
              </div>

              <div className="inputs eye-pos">
                <input
                  onChange={(e) => setpassword(e.target.value)}
                  className="login-input"
                  type={type ? "password" : "text"}
                  placeholder="Password"
                  name=""
                  id=""
                />
                {eye ? (
                  <FaEyeSlash className="eye" onClick={eyefunc} />
                ) : (
                  <FaEye className="eye" onClick={eyefunc} />
                )}
              </div>
              <button className="login-btn">Login</button>
              <p className="error-type">{error}</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginarea;
