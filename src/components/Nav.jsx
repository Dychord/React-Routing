import React from 'react'
import { Link, NavLink } from 'react-router-dom'


function Nav() {
  const styleLink = (e)=>{
    return [
        e.isActive ? "text-red-300" : "",
        e.isActive ? "font-semibold" : "",
    ].join(" ")
  }
  return (
       <div>
         <nav className=' p-5 flex gap-10 justify-center font-semibold text-lg'>
            <NavLink className={styleLink} to="/">Home</NavLink>
            <NavLink className={styleLink} to="/user">User</NavLink>
            <NavLink className={styleLink} to="/about">About</NavLink>
        </nav>
       </div>
  )
}

export default Nav