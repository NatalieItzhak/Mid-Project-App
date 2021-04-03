import React, {useState} from 'react';
import RecipeDetails from './RecipeDetails'
import Totaldaily from './Totaldaily';

const Recipe = ({ recipe }) => {
    const [display, setDisplay] = useState(false);
    const { label, image, calories, dietLabels,ingredients, url, cuisineType } = recipe.recipe;
    return (
        <div className='recipe'>
            <h2>{label}</h2>
            <img src={image} alt={label} />
            <a href={url} target='_blank' >Click For Recipe</a>
            <div className='info'>Calories: {calories} <br></br> Diet Label: {dietLabels} <br></br> Cuisine Type: {cuisineType}</div>
            <button onClick={() => setDisplay(!display)}>Ingredients</button>
            {display && <RecipeDetails ingredients={ingredients} />}

        </div>
    )
}

export default Recipe;
