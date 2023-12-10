import { message } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext';

const logo = require('../asets/image/logo.jpg')
export default function Navbar() {
  const { dispatch } = useAuthContext();
  const handleLogout = () => {
    dispatch({ type: "LOGOUT", payload: null })
    message.success("Logged out successfully")
    window.sessionStorage.removeItem("token")
  }
  return (
    <nav className="nav navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <img className="navbar-brand" src={logo} alt="logo" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <Link to='/Auth/login' className='btn btn-primary' onClick={handleLogout} >Logout</Link>
          </form>
        </div>
      </div>
    </nav>
  )
}
