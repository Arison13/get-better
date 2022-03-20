import React from 'react'
import "../styles/Home.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home({showSide}) {

  return (
    <div className='home'>
      <div className='main-landing'>
       <div className='landing-text'>
        <p> <span> The Best Way To Get Fit & Healtier and & Better</span>.
        We'll Guide You Through Every Step of Your Fitness Journey. is simply dummy text of the printing and typesetting industry. is simply dummy text of the printing and typesetting industry.
        </p>
       </div>
       <div className='btn-div'>
        <button onClick={showSide} className='btn'> Calculate Your Calories</button>
        </div>
       </div>
      
       <div className='home-content'>
          <p className='home-text'>
          is simply dummy text of the printing and typesetting industry.
          is simply dummy text of the printing and typesetting industry.
          </p>
          <img alt="sample"
          src="https://images.unsplash.com/photo-1526401485004-46910ecc8e51?ixlib=rb-1.2.1
          &ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"/>
       </div>

       <div className='home-content'>
         <img alt="sample"
         src="https://images.unsplash.com/photo-1526401485004-46910ecc8e51?ixlib=rb-1.2.1
         &ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"/>
         <p className='home-text'>
          is simply dummy text of the printing and typesetting industry.
          is simply dummy text of the printing and typesetting industry.
         </p>
       </div>

    </div>
  )
}
