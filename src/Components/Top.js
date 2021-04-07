import React from 'react';
import '../index.css';



function Top() {
    return (
   <header className='row block center'>
       <div>
           <a href='#/'>
               <h1>Grocery Store</h1>
           </a>
       </div>
       <div>
           <a href='#/cart'>Cart</a>
       </div>
   </header>
    )
}



export default Top;
