import React, { useState } from 'react';
import './LoginSignup.css';
import user_icon from '../c/person.png';
import email_icon from '../c/email.png';
import password_icon from '../c/password.png';
const LoginSignup = () => {
    const[action,setAction] = useState("Sign up");
  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
      <img src={user_icon}alt="" style={{width:'30px',height:'30px'}}></img>
      <input type="text"placeholder='Name' required/>
    </div>}
      
      <div className="input">
      <img src={email_icon}alt=" "style={{width:'30px',height:'30px'}}></img>
      <input type="email"placeholder='Email' required/>
    </div>

      <div className="input">
      <img src={password_icon}alt=" "style={{width:'33px',height:'33px'}}></img>
      <input type="password"placeholder='Password' required/>
    </div>
    </div>
    {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}
    <div className="submit-container">
    <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
    <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
    
            </div>
        </div>
  )
}
export default LoginSignup;