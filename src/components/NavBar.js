import React from 'react'
import {Link} from 'react-router-dom';
import "../styles/NavBar.css"

export default function NavBar() {
  return (
    <>
      <div className='navbar'>
          <h3>Get Better</h3>
          <nav> 
              <Link to='/home'>Home</Link>
              <Link to='/training'>Training</Link>
              <Link to='/nutrition'>Nutrition</Link>
             
          </nav>
      </div>
    </>
  )
}
