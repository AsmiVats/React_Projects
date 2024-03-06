import React from 'react'
import { Appbar, Balance, Users } from './Appbar'

function Dashboard() {
  
  return (
    <div className='flex flex-col  w-3/4 h-screen mx-auto my-5'>
        <Appbar/>
        
            <Balance value={100} />
            <Users />
        
    </div>
);

}

export default Dashboard