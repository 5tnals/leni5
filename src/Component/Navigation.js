import React from 'react'
import React from 'react-router-dom'


function Navigation() {
  return (
    <div className='nav'>
      <Link to={'/'}>Home</Link> 
      <Link to={'/about'}>About</Link> 
    </div>
  )
}

export default Navigation