import React, { useState } from 'react'
import "./Join.css"
import main from "../Images/main.png"
import { Link } from 'react-router-dom'


const Register=()=>{

  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");

    return(
      <div className='JoinPage'>
      <div className="JoinContainer">
      <img src={main} alt='logo'/>
      <h1>Register</h1>
      <form action='POST'>
      <input onChange={e=>setUsername(e.target.value)} placeholder='Username' type='text' id='joininput' />
      <input onChange={e=>setEmail(e.target.value)}placeholder='Email' type='text' id='email' />
      <input onChange={e=>setPassword (e.target.value)}placeholder='Password' type='password' id='password' />
      <input placeholder='Confirm Password' type='password' id='cnfpassword' />
      </form>
     <Link to="/"> <button className='joinbtn'>Sign In</button></Link>
     <Link to='/'><p className='reg'>Already Registered?</p></Link>
    </div>
    </div>
    )
}

export default Register