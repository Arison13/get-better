import React, { useState } from 'react'
import '../styles/AddExercise.css';
import { FiX } from "react-icons/fi";


const initialFormValues = {
    muscule:"",
    exercise:"",
    reps:"",
    sets:"",
    tips:""
  };
export default function AddExercise({open, setOpen}) {
    const [formValues, setFormValues] = useState(initialFormValues)

    const handleOnChange = ev => {
        setFormValues({
            ...formValues, 
            [ev.target.name]:ev.target.value
        })
    }

    const onSubmit = ev => {
        ev.preventDefault();
        console.log(formValues)
        setOpen(false)  
    }

  return (
    <> 
    <dialog className="dialog" open={open} >
        <header className='modal-header'> 
            <h3>New Exercise </h3>
            <FiX onClick={()=> setOpen(false)}/>
        </header>
        <form className='add-form' onSubmit={onSubmit} >
            <div className='question'> 
                <label> Enter muscule targeted </label>
                <input value={formValues.muscule} name="muscule" type='text' onChange={handleOnChange} placeholder="Enter muscule"/>
            </div>
            <div className='question'> 
                <label> Enter exercise name </label>
                <input value={formValues.exercise} name='exercise' type='text' onChange={handleOnChange} placeholder="Enter exercise"/>
            </div>
            <div className='question'> 
                <label> Enter numer of reps </label>
                <input value={formValues.reps} name='reps' type='text' onChange={handleOnChange} placeholder="Enter reps"/>
            </div>
            
            <div className='question'> 
                <label> Enter number of sets </label>
                <input value={formValues.sets} name='sets' type='text' onChange={handleOnChange} placeholder="Enter sets"/>
            </div>
            <div className='question'> 
                <label> Enter any tips </label>
                <input value={formValues.tips} name='tips' type='text' onChange={handleOnChange} placeholder="Enter tips"/>
            </div>
            
            <div className='btn-div'> 
                <button className='exercise-submit' onSubmit={onSubmit} >Add Exercise!</button>
            </div> 
        </form>
        
    </dialog>
    </>
  )
}


// onFocusCapture={()=> alert('focus on dialog')}