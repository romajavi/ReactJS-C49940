import React from 'react';
import { Link } from 'react-router-dom';
import carrito from './assets/carrito.svg';
import { useCart } from '../../context/CartContex';
import './CartWidget.css';

const CartWidget = () => {
    const { getTotalQuantity } = useCart();
    const totalQuantity = getTotalQuantity();

    return (
        <Link to="/Cart">
            <div>
                <img src={carrito} alt="carrito-widget" />
                {totalQuantity > 0 && (
                    <span className="cart-quantity">{totalQuantity.toLocaleString()}</span>
                )}
            </div>
        </Link>
    );
}

export default CartWidget;