import React, { useState } from 'react'
import "../styles/SideBar.css";
import { useRef } from 'react';

const initialValues = {
  weight:0,
  age:0,
  activityLevel: 0
}

export default function SideBar() {
  const [formValues, setFormValues] = useState(initialValues)
  const [result, setResult] = useState()
  //refs
  const weightRef = useRef()
  const ageRef = useRef()
  const activityLevelRef = useRef()

  const onSubmit = (e) => {
    e.preventDefault()
    setFormValues({
    weight:weightRef.current.value,
    age:ageRef.current.value,
    activityLevel:activityLevelRef.current.value
    })
    // Result needs to be calculated based on the input.
    setResult(2000)
    alert(`Your estimated calorie intake should be: ${2000} cals`)
  }
  console.log(formValues, result);

  return (
    <div>
      <form onSubmit={onSubmit} >
        <div className="form-group" controlid="weight">
            <label>Enter Your Weight</label>
            <input type="number" min={80} max={350} ref={weightRef} required/>
        </div>

        <div className="form-group" controlid="age">
            <label>Enter Your Age</label>
            <input type="number" min={16} max={80} ref={ageRef}  required/>
        </div>
        
        <div className="form-group" controlid="activityLevel">
            <label>Choose Your Activity Level</label>
            <select ref={activityLevelRef} defaultValue={0} required >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
            <p className="text"> From 1 to 5</p>
        </div>
        
        <div className='btn-div-sidebar'>
          <button className="btn-sidebar" variant="primary" type="submit" >
              Calculate
          </button>
        </div>
      {
        result && <p className="text"> Your Calorie Intake should be: {result} Cals </p>
      }
      </form>
     </div>
  )
}
