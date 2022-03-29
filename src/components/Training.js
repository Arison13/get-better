import React, {useState} from 'react'
import exercises from './data'
import "../styles/Training.css";

export default function Training() {
  const [data, setData] = useState(exercises);
  const [search, setSearch] = useState("");

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
        <button className='add-btn'> <a href='#'>Add Exercise </a></button>
      </div>
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
