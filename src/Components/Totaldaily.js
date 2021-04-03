import React from 'react';
import { v4 as uuidv4 } from "uuid";

const Totaldaily = ({totalDaily}) => {
    return totalDaily.CA.map(daily => {
        return (
          <ul key={uuidv4()}>
            <li>{daily.label}</li> 
            <li>{daily.quantity}</li> 
    
            
        
            </ul>
           
        );
      });
    };


export default Totaldaily;




