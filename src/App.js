import React, { useEffect, useState } from 'react'

import {
  BrowserRouter as Router, Route, Routes

} from "react-router-dom";
import Home from './component/home/Home';
import Login from './component/login/Login';
import Signup from './component/signup/Signup';
import { auth } from './Firebbase';

const App = () => {
  const [userName, setUserName] = useState("")

  // response coming from here
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName)
      } else setUserName("")

      // console.log(user)
    })
  }, [])


  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home name={userName} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
