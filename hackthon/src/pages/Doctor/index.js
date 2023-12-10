import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Navbar from '../../component/Navbar'
import Footer from '../../component/Footer'
import Schedule from './Schedule'
import Appointment from './Appointment'
export default function index() {
  return (
    <>
    {/* navbar */}
      <Navbar />
      {/* pages Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Schedule' element={<Schedule/>}/>
        <Route path='/Appointment' element={<Appointment/>} />
      </Routes>
      {/* footer */}
      <Footer />
    </>
  )
}
