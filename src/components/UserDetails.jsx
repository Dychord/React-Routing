import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


export function UserDetails() {
  const {username} = useParams()
  const navigate = useNavigate()
  const goBackToUser = ()=>{
    return navigate('/user')
    // return navigate('-1') ek page piche chale jao
  }

  
  return (
    <>
    <div className='flex flex-col items-center mt-10'>
      <h1 className='text-5xl font-bold text-red-400'>User Details</h1>
      <h3 className='mt-4 font-semibold text-2xl'>hello {username} </h3>
      <button onClick={goBackToUser} className='bg-red-400 rounded-md px-3 py1 mt-3 font-semibold'>Go Back</button>
      {/* <Link to="/user"><button className='bg-red-400 rounded-md px-3 py1 mt-3 font-semibold'>Go Back</button></Link> */}
    </div>
    
      
    </>
  )
}
