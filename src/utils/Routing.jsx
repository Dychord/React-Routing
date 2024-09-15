import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from '../components/About'
import Home from '../components/Home'
import User from '../components/User'
import {UserDetails}  from '../components/userDetails'


function Routing() {
  return (
    <div>
        <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='/user' element={ <User/> }>
              <Route path='/user/:username' element={ <UserDetails/> } />
            </Route>
            <Route path='/about' element={ <About/> } />
        </Routes>
    </div>
  )
}

export default Routing