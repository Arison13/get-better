import React, {useState} from 'react'
import "../styles/Training.css";
import exercises from './data'
// import AddExercise from './AddExercise';
import {FiX } from "react-icons/fi";
import '../styles/AddExercise.css';

export default function Training() {
  const [data, setData] = useState(exercises);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault();
    const filteredExercises = exercises.filter(e => {
      if(search.toLowerCase() === "all"){
        return data;
      }
      else{ return e.muscule.toLowerCase() === search.toLowerCase();}
    })
    setData(filteredExercises)
  }

  return (
    <div>
    <div className='training'>
      <div className="search">
        <form onSubmit={onSubmit}> 
          <label>Filter By Muscule:</label>
            <select className='search-input' value={search} onChange={(e)=> setSearch(e.target.value)}>
              <option>All</option>
              <option>Back</option>
              <option>Chest</option>
              <option>Shoulder</option>
            </select>

            <button className='submit-btn'>Search</button>
          </form>
      </div>
      <div className='exercise-group'>
        {
          data.map(e => {
            return <ExerciseBuilder exercise={e} key={e.name}/>
          })
        }
      </div>
      
      <div className='btn-div'>
        <button className='add-btn' onClick={()=> setOpen(true)}>Add Exercise</button>
      </div>
      
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
    </div>
      
      {/* <AddExercise open={open} setOpen={setOpen}/> */}
     </div>
    
  )
}





  const ExerciseBuilder = ({exercise}) =>{
    return (
      <div className='exercise-card'>

          {/* optional add image */}
          <h4>{exercise.muscule}</h4>
          <p>Exercise: {exercise.name} </p>
          <p>Reps:{exercise.reps}</p>
          <p>Weight:{exercise.weight}</p>
          <p>Sets:{exercise.sets}</p>
          <p>Tips:{exercise.tips}</p>
      </div>
    )
  }
