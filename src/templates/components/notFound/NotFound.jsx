import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='container'>
      <h3 className='not-found-mess'>
        Page not found. Back to <Link to='/'> login page </Link>?
      </h3>
    </div>
  )
};
export default NotFound;