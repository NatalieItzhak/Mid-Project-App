import React, {useState} from 'react';
import axios from 'axios';
import {v4 as uuid4} from 'uuid';
import Recipe from './Recipe';

function HomePage() {
    const[data, setData]= useState('');
    const[recipes, setRecipes]= useState([]);

    const APP_ID = "2a245b8d";
    const APP_KEY = "1b5d7651d5126b0169a372c4c7c7da36";
    const Url = `https://api.edamam.com/search?q=${data}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    const getData = async () => {
        const res = await axios.get(Url);
        setRecipes(res.data.hits)
        console.log(res);
        setData('')
        // console.log(res.data.hits);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        getData();

    }
    const onChange = (e) => {
    setData(e.target.value)
    };

    return (

        <div className="App">
            <h1 >Food Recipes</h1>
            <form className='search-form' onSubmit={onSubmit}>
                <input type='text' placeholder='Search Food' value={data}  onChange={onChange}></input>
                <button type='submit' value='search' >Search</button>
            </form>
            <div className='recipes'>
                {recipes !== [] &&recipes.map(recipe => <Recipe key={uuid4()} recipe={recipe}/>) }
            </div>
        </div>
    );
}

export default HomePage
