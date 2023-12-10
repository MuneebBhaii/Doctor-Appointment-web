import React from 'react'
import { useAuthContext } from './AuthContext'
import { Navigate, useLocation } from 'react-router-dom'

export default function PrivateRoute({ Component }) {
  const { isAuth } = useAuthContext()
  const location = useLocation()
  console.log(location.pathname )
  if(!isAuth)
    return <Navigate to="/auth/login" state={{from: location.pathname}}  replace />
  
  return (
    <Component />
  )

}
