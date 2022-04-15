import { useState } from 'react';
import {Switch, Route} from 'react-router-dom';
import {FiX } from "react-icons/fi";
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Training from './components/Training';
import WeightLoss from './components/WeightLoss';
import Home from './components/Home';
import './App.css';

function App() {
  const[sidebar, setSidebar]= useState("")
  const [open, setOpen] = useState(false);

  const onClick = () => {
    if(open === false){
      setOpen(true)
      setSidebar("sidebar-open")  
    }
    else if(open === true){
      setOpen(false)
      setSidebar("")
    }
  }

  return (
  <> 
  <div className="heading">
        <NavBar />    
  </div>

    <div className={`${open ? "app-open" : "app"}`}>
      <div className={`sidebar ${sidebar}`}>

        {
          open &&
          <>
            <FiX className='x' onClick={onClick}/>
            <SideBar />
          </>
        }       
        </div> 
        <Switch> 
          <Route path='/training'>
            <Training/>
          </Route>

          <Route path='/weight-loss' component={WeightLoss} />
          <Route path="/home">
            <Home showSide={onClick}/>
          </Route>
          <Route exact path='/'>
            <Home showSide={onClick}/>
          </Route>
        </Switch>  
  </div>
  </>
  );
}

export default App;
