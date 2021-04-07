import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';


const Hero = ({ handleLogout }) => {
    return (
        <section className='hero'>
            <nav>
                <h2>Welcome To Foddies</h2>

                <Link className='link' to='/Components/HomePage'> Recipes</Link>
                <Link className='link' to='/Components/Grocery'> Grocery</Link>
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </section>
    )
}



export default Hero
