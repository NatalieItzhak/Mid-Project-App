import './App.css';
import React from 'react';
import HomePage from './Components/HomePage';
// import Recipe from './Components/Recipe';
// import RecipeDetails from './Components/RecipeDetails';
import {BrowserRouter, Route, Link} from 'react-router-dom';



function App() {

  return (
    <div className="App">
<BrowserRouter>
<div>
<Route path='/' exact><h1>Welcome to Foddies </h1> 
<div><Link to='/Components/HomePage'>Click to Enter</Link></div></Route>
<Route path='/Components/HomePage' component={HomePage}/>
</div>
</BrowserRouter>
    </div>
  );
}

export default App;
