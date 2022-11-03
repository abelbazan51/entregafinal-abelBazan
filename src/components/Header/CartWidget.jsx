import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const {totalUnidades} =useContext(CartContext)
    return (
        <div className="widget-container">
            <span className="material-icons">shopping_cart</span>
            <span className='Carrit'>{totalUnidades()}</span>
        </div>
    );
};

export default CartWidget;
