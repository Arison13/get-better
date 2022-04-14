import React, {useState} from 'react'
import "../styles/Training.css";
import exercises from './data'
import AddExercise from './AddExercise';

export default function Training() {
  const [data, setData] = useState(exercises);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(true)

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

  console.log(open)
  
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
    </div>
      
      <AddExercise open={open} setOpen={setOpen}/>
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
