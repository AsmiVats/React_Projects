import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';


function SignUp() {
  const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  return (
    <div className='flex-auto bg-slate-600 h-screen flex justify-center items-center'>
    <div className='flex justify-center flex-col w-1/4 bg-white items-center p-2 rounded-md shadow-md'>
    <h2 className="text-4xl font-bold ">Sign Up</h2>
      <p className='text-gray-600 m-1 w-3/4 text-center'>Enter your information to create an account.</p>

      <form action="" method="post">


        <p className='block text-sm font-medium text-gray-700'>First Name</p>
       <input 
        onChange={(e)=>setFirstName(e.target.value)}
         className='m-1 p-2 block w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
        type="text" name="firstName" id="firstName" placeholder='John' required/>

        <p className='block text-sm font-medium text-gray-700'>Last Name</p>
        <input
        onChange={(e)=>setLastName(e.target.value)}
         className='m-1 p-2 block w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
         type="text" name="lastName" id="lastName" placeholder='Doe'/>

        <p className='block text-sm font-medium text-gray-700'>Email</p>
        <input
        onChange={(e)=>setUsername(e.target.value)}
        className='m-1 p-2 block w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
         type="email" name="username" id="username" placeholder='johndoe@gmail.com'/>

        <p className='block text-sm font-medium text-gray-700'>Password</p>
        <input
        onChange={(e)=>setPassword(e.target.value)}
          className='m-1 p-2 block w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
         type="text" name="password" id="password" />

        <button
        onClick={async()=>{
         const response= await axios.post("http://localhost:3000/api/v1/user/signup",
         { username,
          firstName,
          lastName,
          password});
          localStorage.setItem("token", response.data.token)
            navigate("/dashboard")
        }}
         type='button' className='bg-slate-900 text-white w-full py-2 px-4 border border-transparent rounded-md shadow-sm'>SignUp</button>
        <p>
          Already have an account? 
          <Link to="/signin" className='underline text-gray-900'>Login</Link>

        </p>
      </form>
    </div>
    </div>

  )
}

export default SignUp