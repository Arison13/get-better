import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
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
    setResult(1)
  }
  console.log(formValues, result);

  return (
    <div>
      <Form onSubmit={onSubmit} >
        <Form.Group className="m-2" controlId="weight">
            <Form.Label className="d-block">Enter Your Weight</Form.Label>
            <Form.Control type="number" ref={weightRef} required/>
        </Form.Group>

        <Form.Group className="m-2" controlId="age">
            <Form.Label>Enter Your Age</Form.Label>
            <Form.Control type="number" ref={ageRef}  required/>
        </Form.Group>
        
        <Form.Group className="m-2" controlId="activityLevel">
            <Form.Label>Choose Your Activity Level</Form.Label>
            <Form.Select ref={activityLevelRef} defaultValue={0} required >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </Form.Select>
            <Form.Text className="text-muted"> From 1 to 5</Form.Text>
        </Form.Group>
        
        <div className='d-flex justify-content-center align-items-center'>
          <Button variant="primary" type="submit" >
              Calculate
          </Button>
        </div>
      {
        result && <Form.Text className="text"> Your Calorie Intake should be: {result} Cals </Form.Text>
      }
      </Form>
     </div>
  )
}
