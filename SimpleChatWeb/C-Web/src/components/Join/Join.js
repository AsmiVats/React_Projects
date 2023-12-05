import React, { useState } from 'react'
import "./Join.css"
import main from "../Images/main.png"
import {  Link } from 'react-router-dom'

let user;

const Join=()=> {

  const [name, setname] = useState("");
  const [Password, setPassword] = useState("");
  
  const sendUser = ()=>{
    user = document.getElementById('joininput').value;
    document.getElementById('joininput').value = null;
   }
  return (
    <div className='JoinPage'>
    <div className="JoinContainer">
      <img src={main} alt='logo'/>
      <h1>Chat App</h1>
      <form action='POST'>
      <input onChange={(e)=> setname(e.target.value)} placeholder='Username' type='text' id='joininput' name='username' required />
      <input onChange={(e)=> setPassword(e.target.value)} placeholder='Password' type='password' id='joinpassword' name='password' required/>
      </form>
     <Link onClick={(e)=> !name ? e.preventDefault():null} to="./chat"> <button onClick={sendUser} className='joinbtn'>Login In</button></Link>
     <Link to='./register' className='reg'>Sign Up</Link>
    </div>
    </div>
  )
}

export default Join
export { user}