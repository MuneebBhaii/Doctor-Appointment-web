import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <div className="container">
      <div className="row py-2">
        <div className="col">
          <p className="text-center text-white mb-0">&copy; {year} All right reserved by Muhammad Muneeb</p>
        </div>
      </div>
    </div>
  )
}
