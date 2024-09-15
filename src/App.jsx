import React from 'react'
import Home from './components/Home'
import User from './components/User'
import About from './components/About'
import { Link, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <nav className='bg-sky-400 p-5 flex gap-10 font-semibold text-lg'>
          <Link to="/">Home</Link>
          <Link to="/user">User</Link>
          <Link to="/about">About</Link>
      </nav>
      
      <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/user' element={ <User/> } />
          <Route path='/about' element={ <About/> } />
      </Routes>

    </>

  )
}

export default App
