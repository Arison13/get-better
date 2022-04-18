import React from 'react'
import '../styles/AddExercise.css';
import {FiX } from "react-icons/fi";

export default function AddExercise({open, setOpen}) {

  return (
    <> 
    <dialog className = "dialog" open={open}>
        <header className='modal-header'> 
            <h3>AddExercise </h3>
            <FiX onClick={()=> setOpen(false)}/>
        </header>
        <form className='add-form'>
            <div className='question'> 
                <label> Enter muscule targeted </label>
                <input type='text' placeholder="trying stuff"/>
            </div>
            <div className='question'> 
                <label> Enter exercise name </label>
                <input type='text' placeholder="trying stuff"/>
            </div>
            <div className='question'> 
                <label> Enter numer of reps </label>
                <input type='text' placeholder="trying stuff"/>
            </div>
            
            <div className='question'> 
                <label> Enter number of sets </label>
                <input type='text' placeholder="trying stuff"/>
            </div>
            <div className='question'> 
                <label> Enter any tips </label>
                <input type='text' placeholder="trying stuff"/>
            </div>
        </form>
        <div className='btn-div'> 
            <button className='exercise-submit' onClick={()=> setOpen(false)}> Submit </button>
        </div> 
    </dialog>
    </>
  )
}

