import React, { useState, useEffect } from 'react'
import "../styles/Training.css";
import AddExercise from './AddExercise';
import axios from 'axios';

export default function Training() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false)
  

  const LocalAPI = "http://localhost:9000/exercises";
  useEffect(()=> {    
    axios.get('https://get-better-be.herokuapp.com/exercises')
    // axios.get(LocalAPI)
    .then(res => { 
      // console.log('data coming back', res.data)
      setData(res.data);
    })
  }, [])

  const onSubmit = (e) => {
    e.preventDefault();
    // axios.get(`${LocalAPI}/${search}`)
    axios.get(`https://get-better-be.herokuapp.com/exercises/${search}`)
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log({err}))
  }

  return (
    <div>
    <div className='training'>
      <div className="search">
        <form onSubmit={onSubmit} > 
          <label>Filter By Muscule:</label>
            <select className='search-input' value={search} onChange={(e)=> setSearch(e.target.value)}>
              <option>All</option>
              <option>Back</option>
              <option>Chest</option>
              <option>Shoulder</option>
              <option>Legs</option>
              <option>Arms</option>
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
      
      
      { open 
        ? 
          <AddExercise open={open} setOpen={setOpen} setData={setData} /> 
        : 
          <div className='btn-div'>
            <button className='add-btn' onClick={()=> setOpen(true)}>Add Exercise </button>
          </div>
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
