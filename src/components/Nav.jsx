import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {
  return (
       <div>
         <nav className=' p-5 flex gap-10 justify-center font-semibold text-lg'>
            <Link to="/">Home</Link>
            <Link to="/user">User</Link>
            <Link to="/about">About</Link>
        </nav>
       </div>
  )
}

export default Nav