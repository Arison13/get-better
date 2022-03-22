import React, {useState} from 'react'
import exercises from './data'
import "../styles/Training.css";

export default function Training() {
  const [data, setData] = useState(exercises);
  const [search, setSearch] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const filteredExercises = exercises.filter(e => {
      if(search === "All" || search === "all"){
        return data;
      }
      else{ return e.muscule === search;}
    })
    setSearch("")
    setData(filteredExercises)
  }
  return (
    <div className='training'>
      <div className="search">
        <form onSubmit={onSubmit}> 
          <label>Filter By Muscule:</label>
            <input className='search-input' 
            type='text' 
            name='search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='eg: Back, Chest, Shoulders' />
            <button className='submit-btn'>Search</button>
          </form>
          {/* <button className='submit-btn'>Reset Filter</button> */}
      </div>
      <div className='exercise-group'>
        {
          data.map(e => {
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
          <h4>{exercise.muscule}</h4>
          <p>Exercise: {exercise.name} </p>
          <p>Reps:{exercise.reps}</p>
          <p>Weight:{exercise.weight}</p>
          <p>Sets:{exercise.sets}</p>
          <p>Tips:{exercise.tips}</p>
      </div>
    )
  }
