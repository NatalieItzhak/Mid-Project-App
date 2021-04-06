import React, { useState } from 'react';
import axios from 'axios';


 function  Tacos() {
    const [tacos, setTacos] = useState('');
    const Url = `http://taco-randomizer.herokuapp.com//random/`;
    const getData = async () => {
        const res = await axios.get(Url);
        console.log(res);
    }
      

        return (
            <div>
                <h1>Tacos</h1>
            </div>
        )
    }



export default Tacos;
