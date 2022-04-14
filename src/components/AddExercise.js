import React, {useState} from 'react'
import '../styles/AddExercise.css';

export default function AddExercise({open, setOpen}) {
    // const [open, setOpen] = useState(false)
  return (

      <> 
      {/* <button onClick={() => {
          console.log('open clicked, modal open;')
          setOpen(true)
          }}> Open Modal</button> */}
        <dialog open={open}>
            <h3>AddExercise </h3>
            <p>Tring to add modal</p>
            <form>
                <label> Enter name </label>
                    <input type='text' placeholder="trying stuff"/>
                <label> Enter name </label>
                    <input type='text' placeholder="trying stuff"/>
                <label> Enter name </label>
                    <input type='text' placeholder="trying stuff"/>
                <label> Enter name </label>
                    <input type='text' placeholder="trying stuff"/>
            </form>
            <button onClick={()=> {
                console.log('closed clicked')
                setOpen(false)
            }}> Submit</button>
        </dialog>
    </>
  )
}

