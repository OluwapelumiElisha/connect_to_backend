import { useCurrentUser } from '@/shared/hook/useCurrentUser'
import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  const { currentUser } = useCurrentUser()
  return (
    <div>
      <h1>This is About Us Page</h1>
      <h1>Welcome {currentUser?.firstName || 'n'}</h1>
      <button><Link to={'/'}>Go to Home Page</Link></button>
    </div>
  )
}

export default About
// netlify  vercel hosting 