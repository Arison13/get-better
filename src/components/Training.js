import React from 'react'
import exercises from './data'
import "../styles/Training.css";

export default function Training() {
  
  return (
    <div>
      <h4> Training </h4>
      
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
          <p>Working Muscule: {exercise.muscule}</p>
          <p>Reps:{exercise.reps}</p>
          <p>Weight:{exercise.weight}</p>
          <p>Sets:{exercise.sets}</p>
          <p>Tips:{exercise.tips}</p>
      </div>
    )
  }
