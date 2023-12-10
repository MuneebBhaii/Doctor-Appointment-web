import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    
    <footer className="container-fluid footer">
      <div className="row py-2">
        <div className="col">
          <p className="text-center mb-0 text-white">&copy; {year} All right reserved by Muhammad Muneeb</p>
        </div>
      </div>
    </footer>
  )
}
