import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
const HomePage = () => {
  return (
    <div>
        <Header/>
      <Outlet/>
    </div>
  )
}

export default HomePage
