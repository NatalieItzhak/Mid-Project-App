import './App.css';
import React from 'react';
import HomePage from './Components/HomePage';
import Tacos from './Components/Tacos';
import {BrowserRouter, Route, Link} from 'react-router-dom';



function App() {

  return (
    <div className="App">
<BrowserRouter>
<div>
<Route path='/' exact><h1>Welcome to Foddies </h1> 
<div className='Navbar'>
  <Link className='link' to='/Components/HomePage'> Main Recipes</Link>
  <br></br>
  <Link className='link' to='/Components/Tacos'> Mexican Tacos</Link>
  </div></Route>
<Route path='/Components/HomePage' component={HomePage}/>
<Route path='/Components/Tacos' component={Tacos}/>
</div>
</BrowserRouter>
    </div>
  );
}

export default App;
