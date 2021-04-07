import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Main from './Main';
import Basket from './Basket';
import Top from './Top';
import '../index.css';
import data from './data';



function Grocery() {
    const { Products } = data;
    const [cartItems, setCartItems] = useState([]);
    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    };
    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    };
    return (
        <div>
            <Link className='back' to='/'>Back</Link>
            <h1></h1>
            <Top countCartItems={cartItems.length} />
            <div className='row'>
                <Main products={Products} onAdd={onAdd} />
                <Basket cartItems={cartItems}
                    onAdd={onAdd}
                    onRemove={onRemove} />
            </div>
        </div>
    )
}



export default Grocery;
