import { message } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useAuthContext } from '../../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom';
const initialization = { email: "", roll: '', password: "" }
export default function Login() {
    const [state, setState] = useState(initialization)
    const { isAuth, dispatch } = useAuthContext()
    const [messageApi, contextHolder] = message.useMessage();
    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(state)
        axios.post("http://localhost:8000/login", state)
            .then((res) => {
                window.sessionStorage.setItem("token", res.data.token)
                const decodeUserData = jwtDecode(res.data.token).user;
                console.log("decoded user data", decodeUserData);
                message.success("Login successful")
                dispatch({ type: "LOGIN", payload: decodeUserData })
            })
            .catch((err) => {
                message.error("Fill correct info")
            })
    }

    return (
        <main className='background'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                        <div className="card p-2 p-md-4 p-lg-5 cardColor">
                            <h2 className="text-center mb-4 text-white">Login Form</h2>
                            <form onSubmit={handleSubmit}>

                                <div className="row mb-3">
                                    <div className="col">
                                        <input type="email" className="form-control" placeholder='Email' name='email' onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <select name='roll' className='form-control' onChange={handleChange}>
                                            <option value='' className='text-dark'>Select Register As</option>
                                            <option value='patient' className='text-dark'>Patient</option>
                                            <option value='doctor' className='text-dark'>Doctor</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <input type="password" className="form-control" placeholder='Password' name='password' onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        {contextHolder}
                                        <button className='btn btn-outline-primary w-100'>Login</button>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col text-center text-white">
                                        Create new account <Link to="/Auth/Register"><u className='text-dark fw-bold text-white'>Register</u></Link>
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
