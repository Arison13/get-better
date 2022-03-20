import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import {Switch, Route} from 'react-router-dom';
import Training from './components/Training';
import WeightLoss from './components/WeightLoss';
import Home from './components/Home';
import {FiX } from "react-icons/fi";

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
  {/* Every Components Section */}
  <div className='bg-img'>
    <div className='app'>
      {/* SideBar Section */}
     
      <div className={`sidebar ${sidebar}`}>

        {
          open &&
          <>
            <FiX className='x' onClick={onClick}/>
            <SideBar />
          </>
          // :  <FiMenu className='menu' onClick={onClick}/> 
        }       
        </div> 
        <Switch> 
          <Route path='/training' component={Training} />
          <Route path='/weight-loss' component={WeightLoss} />
          <Route path="/home">
            <Home showSide={onClick}/>
          </Route>
          <Route exact path='/'>
            <Home showSide={onClick}/>
          </Route>
        </Switch>  
    </div>
  </div>
  </>
  );
}

export default App;
