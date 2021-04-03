import React from 'react';
import axios from 'axios';

function HomePage() {
const APP_ID="2a245b8d";
const APP_KEY="1b5d7651d5126b0169a372c4c7c7da36";
    const Url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
    const getData= async ()=> {
        const res = await axios.get(Url);
        console.log(res);
    }


    return (

        <div >
<h1 onClick={getData}>Food Search App</h1>
        </div>
    )
}

export default HomePage
