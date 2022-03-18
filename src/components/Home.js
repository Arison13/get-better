import React from 'react'
import "../styles/Home.css";
import { Button } from 'react-bootstrap';

export default function Home({showSide}) {

  return (
    <div className='home bg-dark text-light'>
       <p>is simply dummy text of the printing and typesetting industry.is simply dummy text of the printing 
         and typesetting industry. is simply dummy text of the printing and typesetting industry. is simply dummy text of the printing and typesetting industry.
       </p>
       <div className='btn'>
        <Button onClick={showSide} variant="primary" className='mb-4'> Calculate Your Calories</Button>
       </div>

       <div className='d-flex justify-content-around align-items-center  mb-4'>
       <p className='w-25'>
          is simply dummy text of the printing and typesetting industry.
          is simply dummy text of the printing and typesetting industry.
         </p>
         <img className='w-25' alt="sample"
         src="https://images.unsplash.com/photo-1526401485004-46910ecc8e51?ixlib=rb-1.2.1
         &ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"/>
       </div>

       <div className='d-flex justify-content-around align-items-center mb-4'>
         <img className='w-25' alt="sample"
         src="https://images.unsplash.com/photo-1526401485004-46910ecc8e51?ixlib=rb-1.2.1
         &ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"/>
         <p className='w-25'>
          is simply dummy text of the printing and typesetting industry.
          is simply dummy text of the printing and typesetting industry.
         </p>
       </div>
    </div>
  )
}
