import './App.css';
import React from 'react';
// import HomePage from './Components/HomePage';
import axios from 'axios';

function App() {
  const APP_ID="2a245b8d";
const APP_KEY="1b5d7651d5126b0169a372c4c7c7da36";
    const Url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
    const getData= async ()=> {
        const res = await axios.get(Url);
        console.log(res);
        console.log(res.data.hits);
    }

  return (
    <div className="App">
<h1 >Food Recipes App</h1>
<input></input>
<button onClick={getData}>Search</button>
    </div>
  );
}

export default App;
