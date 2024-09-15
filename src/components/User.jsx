import React from 'react'
import { Link } from 'react-router-dom'


function User() {
  return (
    <>
      <div className='flex flex-col  items-center  w-full '>
        <nav className='font-bold text-2xl p-5'>Users</nav>
        <div className='flex gap-2 flex-col'>
            <Link to="/user/men" className='bg-red-400 px-3 py-1 font-semibold text-lg w-20'>Men</Link>
            <Link to="/user/women" className='bg-red-400 px-3 py-1 font-semibold text-lg w-20'>Women</Link>
            <Link to="/user/kids" className='bg-red-400 px-3 py-1 font-semibold text-lg w-20'>Kids</Link>
        </div>
      </div>
    
    </>
  )
}

export default User