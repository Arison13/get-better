import React, {useState} from 'react'
import exercises from './data'
import "../styles/Training.css";

export default function Training() {
  const [data, setData] = useState(exercises);
  // const filteredExercise = exercises.filter(e => e.muscule == "Back") console.log(filteredExercise)
  //To Filter exercise based on input

  const onChange = (e) => {
    console.log(e.target.name, e.target.value)
  }
  
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   const filteredExercises = exercises.filter(e =>{
  //   return e.muscule === "Back"
  //   })
  //   setData(filteredExercises)
  // }
  return (
    <div className='training'>
      <div className="search">
        <form> 
          <label>Filter By Muscule:</label>
            <input className='search-input' 
            type='text' 
            name='search'
            // value=""
            onChange={onChange}
            placeholder='eg: Back, Chest, Shoulders' />
            <button className='submit-btn'>Search</button>
          </form>
      </div>
      <div className='exercise-group'>
        {
          exercises.map(e => {
            return <ExerciseBuilder exercise={e} key={e.name}/>
          })
        }
      </div>
    </div>
  )
}

  const ExerciseBuilder = ({exercise}) =>{
    return (
      <div className='exercise-card'>
          {/* optional add image */}
          <h4>{exercise.name}</h4>
          <p>Working Muscule(s): {exercise.muscule}</p>
          <p>Reps:{exercise.reps}</p>
          <p>Weight:{exercise.weight}</p>
          <p>Sets:{exercise.sets}</p>
          <p>Tips:{exercise.tips}</p>
      </div>
    )
  }
