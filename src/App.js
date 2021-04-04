import './App.css';
import React from 'react';
import HomePage from './Components/HomePage';
import {BrowserRouter, Route, Link} from 'react-router-dom';



function App() {

  return (
    <div className="App">
<BrowserRouter>
<div>
<Route path='/' exact><h1>Welcome to Foddies </h1> 
<div className='Navbar'>
  </div></Route>
<Route path='/Components/HomePage' component={HomePage}/>
</div>
</BrowserRouter>
    </div>
  );
}

export default App;
