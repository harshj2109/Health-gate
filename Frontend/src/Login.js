import React from "react";
import "./Css/Login.css";
import Navbar from "./Component/Navbar";
import Loginarea from "./Component/Loginarea";
import Aos from "aos";
const Login = () => {
  return (
    <div className="login-container">
      <Loginarea />
      <Navbar
        title="New User?"
        desc="Sign up and discover access to great healthcare resources"
        linkname="/Signup"
        secname="Sign up"
      />
    </div>
  );
};

export default Login;
