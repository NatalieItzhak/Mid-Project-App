import React from 'react';
import '../Contact.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';


const Contact = (props) => {
    return (
        <div> <Link className='back' to='/'>Back</Link>
        <div className='formCont'>
            <form>
                <h2>Contact Us</h2>
                {/* <label>Full Name</label> */}
                <input type="text" placeholder="Your name"></input>
                {/* <label>Email</label> */}
                <input type="text" placeholder="Your Email"></input>
                {/* <label>Phone Number</label> */}
                <input type="number" placeholder="Your number" minLength='10' maxLength='10'></input>
                {/* <label>Message</label> */}
                <textarea required placeholder="Write Yout Message"></textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>
        </div>
    )
}



export default Contact;
