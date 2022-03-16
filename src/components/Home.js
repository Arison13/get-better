import React from 'react'
import "../styles/Home.css";
import { Button } from 'react-bootstrap';

export default function Home({showSide}) {

  return (
    <div className='home'>
       <p>is simply dummy text of the printing and typesetting industry.is simply dummy text of the printing 
         and typesetting industry. is simply dummy text of the printing and typesetting industry. is simply dummy text of the printing and typesetting industry.
       </p>
       <div className='d-flex justify-content-center align-items-center'>
        <Button onClick={showSide} variant="primary" className='m-2'> Calculate Your Calories</Button>
       </div>
      
    </div>
  )
}
