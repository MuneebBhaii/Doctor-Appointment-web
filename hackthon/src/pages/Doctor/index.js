import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Navbar from '../../component/Navbar'
import Footer from '../../component/Footer'
export default function index() {
  return (
    <>
      <Navbar />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </main>
      <Footer />
    </>
  )
}
