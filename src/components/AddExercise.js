import React, { useState } from 'react'
import '../styles/AddExercise.css';
import { FiX } from "react-icons/fi";
import exercises from './data';
import axios from 'axios';


const initialFormValues = {
    name:"",
    muscule:"",
    sets:"",
    weight:"",
    reps:"",
    tips:"",
}
export default function AddExercise({open, setOpen, data, setData}) {
    const [formValues, setFormValues] = useState(initialFormValues)

    const handleOnChange = ev => {
        setFormValues({
            ...formValues, 
            [ev.target.name]:ev.target.value
        })
    }

    const onSubmit = ev => {
        ev.preventDefault();
        setOpen(false)  
        axios.post('https://get-better-be.herokuapp.com/exercises', formValues)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log({err})
            })
        exercises.push(formValues)
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
                <input required value={formValues.muscule} name="muscule" type='text' onChange={handleOnChange} placeholder="Enter muscule"/>
            </div>
            <div className='question'> 
                <label> Enter exercise name </label>
                <input required value={formValues.name} name='name' type='text' onChange={handleOnChange} placeholder="Enter exercise name"/>
            </div>
            <div className='question'> 
                <label> Enter numer of reps </label>
                <input required value={formValues.reps} name='reps' type='text' onChange={handleOnChange} placeholder="Enter reps"/>
            </div>
            
            <div className='question'> 
                <label> Enter number of sets </label>
                <input required value={formValues.sets} name='sets' type='text' onChange={handleOnChange} placeholder="Enter sets"/>
            </div>
            <div className='question'> 
                <label> Enter any tips </label>
                <input required value={formValues.tips} name='tips' type='text' onChange={handleOnChange} placeholder="Enter tips"/>
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