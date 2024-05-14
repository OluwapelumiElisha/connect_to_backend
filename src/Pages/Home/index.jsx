import React from 'react'
import { Link } from 'react-router-dom'
import SectionA from './Component/SectionA'

const Home = () => {
  return (
    <div>

      <h1>This is Home Page</h1>
      <SectionA/>
      <button className=' border-2'><Link to={'/about'}>Go to About Page</Link></button>
    </div>
  )
}

export default Home
