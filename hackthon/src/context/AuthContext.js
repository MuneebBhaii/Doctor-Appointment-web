import { jwtDecode } from 'jwt-decode'
import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'

export const AuthContext = createContext()
const initialState = { isAuth: false, user: null }
export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { isAuth: true, user: action.payload }
    case "LOGOUT":
      return { isAuth: false, user: null }
    default:
      return state
  }
}

export default function AuthContextProvider({ children }) {

  const [state, dispatch] = useReducer(authReducer, initialState)
  useEffect(() => {
    const token = window.sessionStorage.getItem("token");
    if (token) {
      const decodeTokenUser = jwtDecode(token).user;
      dispatch({ type: "LOGIN", payload: decodeTokenUser });
    }


  }, [])
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  return useContext(AuthContext)
}
