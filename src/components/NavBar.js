import React from 'react'
import {Link} from 'react-router-dom';
import "../styles/NavBar.css"

export default function NavBar() {
  return (
    <>
      <div className='navbar'>
          <h4>Get Better</h4>
          <nav> 
              <Link to='/home'>Home</Link>
              <Link to='/weight-loss'>Weight Loss</Link>
              <Link to='/training'>Training</Link>
          </nav>
      </div>
    </>
  )
}
