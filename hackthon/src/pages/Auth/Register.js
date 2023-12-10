import { message } from 'antd'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const initialization = {fullname:"",  email: "",dob:"",number:"",roll:'', password: ""  }
export default function Register() {
    const nevigate = useNavigate()
    const [state, setState] = useState(initialization)
    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(state)
        axios.post("http://localhost:8000/register",state)
        .then((res)=>{
            message.success("Successful register")
            nevigate('/login')
        })
        .catch((err) => {
            message.error(err)
        })
        
    }
    return (
        <main className='background'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                        <div className="card p-2 p-md-3 p-lg-4 cardColor">
                            <h2 className='register mb-2 text-white'>Register Form</h2>
                            <form onSubmit={handleSubmit}>

                                <div className="row mb-3">
                                    <div className="col">
                                        <label htmlFor="enter your fullName">Full Name</label>
                                        <input type="text" className='form-control' placeholder='Full Name' name='fullname' onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" className='form-control' placeholder='enter correct email' name='email' onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label htmlFor="number">Number</label>
                                        <input type="number" className='form-control' placeholder='enter phone number' name='number' onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-6">
                                        <label htmlFor="date">Date-of-Birth</label>
                                        <input type="date" className='form-control' name='dob' onChange={handleChange} />
                                    </div>
                                {/* </div>
                                <div className="row mb-3"> */}
                                    <div className="col-6">
                                        <label htmlFor='roll'>Register As</label>
                                        <select className='form-control' name='roll' onChange={handleChange}>
                                            <option value='patient' className='text-dark'>Patient</option>
                                            <option value='doctor' className='text-dark'>Doctor</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label htmlFor="password">Password</label>
                                        <input type="text" className='form-control' placeholder='enter strong password' name='password' onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <button className='btn btn-outline-primary w-100' >Register</button>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col text-center text-white">
                                        Already have account <Link to="/Auth/Login"><u className='text-dark fw-bold text-white'>Login</u></Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
