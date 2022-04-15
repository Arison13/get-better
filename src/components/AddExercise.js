import React, {useState} from 'react'
import '../styles/AddExercise.css';

export default function AddExercise({open, setOpen}) {

  return (
    <> 
    <dialog open={open}>
        <h3>AddExercise </h3>
        <p>Tring to add modal</p>
        <form>
            <label> Enter name </label>
                <input type='text' placeholder="trying stuff"/>
            <label> Enter name </label>
                <input type='text' placeholder="trying stuff"/>
            <label> Enter name </label>
                <input type='text' placeholder="trying stuff"/>
            <label> Enter name </label>
                <input type='text' placeholder="trying stuff"/>
        </form>
        <button onClick={()=> setOpen(false)}> Submit </button>
    </dialog>
    </>
  )
}

