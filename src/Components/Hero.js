import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';



const Hero = ({ handleLogout }) => {
    return (
        <section className='hero'>
            <nav>
                <span className='logo'></span>
                <div><h2>Welcome Foddie!</h2>
                    <div className='topMsg'>Check Our New Recipes</div></div>
                <div className='linksNav'>
                    <Link className='link' to='/Components/HomePage'> Recipes</Link>
                    <Link className='link' to='/Components/Grocery'> Grocery</Link>
                    <Link className='link' to='/Components/Contact'> Contact Us</Link>
                </div>

                <button onClick={handleLogout}>Logout</button>
            </nav>
            <p className='about'>
                A <span className='bold'> foodie</span> is a person who has an ardent or refined interest in food and who eats food not only out of hunger but also as a hobby. The terms "gastronome" and "gourmet" define the same thing, i.e. a person who enjoys food for pleasure..</p>
        </section>
   
    )
}



export default Hero
