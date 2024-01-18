import React from 'react';
import carrito from './assets/carrito.svg';

const CartWidget = () => {
    return (
        <div>
            <img src={carrito} alt="carrito-wdiget"/>
            0
        </div>
    );
}

export default CartWidget;
