import React, {useState} from 'react'
import exercises from './data'
import "../styles/Training.css";

export default function Training() {
  const [data, setData] = useState(exercises);
  
  return (
    <div className='training'>
      {/* <h4> Training </h4>
       */}
      <div className='exercise-group'>
        {
          exercises.map(e => {
            return <ExerciseBuilder exercise={e} key={e.name}/>
          })
        }
      </div>
      {/* <div className='search-section'>
        <h4>Filter By:</h4>
        <form> 
          <input className='search-input' 
          type='text' 
          name='Back'
          placeholder='eg. Back, Chest, Shoulders' />
         
         
        </form>
      </div> */}
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
