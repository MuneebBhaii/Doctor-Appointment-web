import React from 'react'
import {BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
// layout
import Doctor from "./Doctor"
import Auth from "./Auth"
import { useAuthContext } from '../context/AuthContext'
import PrivateRoute from '../context/PrivateRoute'
export default function Index() {
  const { isAuth} = useAuthContext()
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<PrivateRoute Component={Doctor}/>} />
      {/* <Route path="/*" element={<Doctor/>}/> */}
      <Route path="/Auth/*" element={!isAuth ? <Auth/> : <Navigate to ="/" replace/>} />
      <Route path='*' element ={<h1 className='text-center'>page not found <br /> 404</h1>} />
    </Routes>
    </BrowserRouter>
  )
}
