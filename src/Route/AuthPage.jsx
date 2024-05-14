import React from 'react'
import { Outlet } from "react-router-dom";
const AuthPage = () => {
  return (
    <div>
      <h1>Auth Page.</h1>
      <Outlet/>
    </div>
  )
}

export default AuthPage
