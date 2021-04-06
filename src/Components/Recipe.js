import React, {useState} from 'react';
import RecipeDetails from './RecipeDetails'


const Recipe = ({ recipe }) => {
    const [display, setDisplay] = useState(false);
    const { label, image, calories,ingredients, url, cuisineType } = recipe.recipe;
    return (
        <div className='recipe'>
            <h2>{label}</h2>
            <img src={image} alt={label} />
            <a href={url} target='_blank' rel='noreferrer' >Click For Recipe</a>
            <div className='info'>Calories: {calories} <br></br> Cuisine Type: {cuisineType}</div>
            <button onClick={() => setDisplay(!display)}>Ingredients</button>
            {display && <RecipeDetails ingredients={ingredients} />}

        </div>
    )
}

export default Recipe;
