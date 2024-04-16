import React from 'react'

import Navbar from './Component/Navbar'
import Signuparea from './Component/Signuparea'

const Signup = () => {
  return (
    <div className="login-container">
        <Signuparea/>
        <Navbar title="Already a user?" desc = "Login and discover access to great healthcare resources" linkname= "/" secname="Login"/>
    </div>
  )
}

export default Signup