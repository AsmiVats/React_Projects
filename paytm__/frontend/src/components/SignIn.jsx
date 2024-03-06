import React from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <div className='flex-auto bg-slate-600 h-screen flex justify-center items-center'>
    <div className='flex justify-center flex-col w-1/4 bg-white items-center p-2 rounded-md shadow-md'>
    <h2 className="text-4xl font-bold ">Sign In</h2>
      <p className='text-gray-600 m-1 w-3/4 text-center'>Enter your credentials to access to your account.</p>
      <form action="" method="post">
        

        <p className='block text-sm font-medium text-gray-700'>Email</p>
        <input
        className='m-1 p-2 block w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
         type="email" name="username" id="username" placeholder='johndoe@gmail.com'/>

        <p className='block text-sm font-medium text-gray-700'>Password</p>
        <input
          className='m-1 p-2 block w-full border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
         type="text" name="password" id="password" />

        <button className='bg-slate-900 text-white w-full py-2 px-4 border border-transparent rounded-md shadow-sm'>SignUp</button>
        <p>
          Don't have an account? 
          <Link to="/signup" className='underline text-gray-900'>Sign Up</Link>

        </p>
      </form>
    </div>
    </div>

  )
}

export default SignIn