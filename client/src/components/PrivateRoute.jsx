import React from 'react'
import { Navigate } from 'react-router-dom'

function PrivateRoute({children}) {
  return localStorage.getItem("valid") ? children : <Navigate to="/"/>
}

export default PrivateRoute