import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/Home.css";

export default function Home({showSide}) {

  return (
    <div className='home'>
      <div className='main-landing'>
       <div className='landing-text'>
        <p> <span> The Best Way To Get Fit & Healtier & Better</span>.
        We'll Guide You Through Every Step of Your Fitness Journey. is simply dummy text of the printing and typesetting industry. is simply dummy text of the printing and typesetting industry.
        </p>
       </div>
       <div className='btn-div'>
        <button onClick={showSide} className='btn'> Calculate Your Calories</button>
        <Link className='btn link' to='/training'>Get Training </Link>
        </div>
       </div>
      

    </div>
  )
}
