import React from 'react'
import { Link, NavLink } from 'react-router-dom'


function Nav() {
  const styleLink = (e)=>{
    return {
        color: e.isActive ? "tomato" : ""
    }
  }
  return (
       <div>
         <nav className=' p-5 flex gap-10 justify-center font-semibold text-lg'>
            <NavLink style={styleLink} to="/">Home</NavLink>
            <NavLink style={styleLink} to="/user">User</NavLink>
            <NavLink style={styleLink} to="/about">About</NavLink>
        </nav>
       </div>
  )
}

export default Nav