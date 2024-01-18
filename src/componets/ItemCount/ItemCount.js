import React, { useState } from "react";
import "../ItemCount/ItemCount.css";
import { Button } from "react-bootstrap";

const ItemCount = ({ stock = 5, initial = 1, onAdd, isVisible }) => {
const [count, setCount] = useState(initial);

const sumar = () => {
    if (stock > count) {
    setCount((prevCount) => prevCount + 1);
    }
};

const restar = () => {
    if (count > 1) {
    setCount((prevCount) => prevCount - 1);
    }
};

const agregarCantidad = () => {
    onAdd(count);
};

return isVisible ? (
    <div className="containerButton">
    <button className="Boton1" onClick={restar}>
        {" "}
        -{" "}
    </button>
    <label> {count} </label>
    <button className="Boton1" onClick={sumar}>
        {" "}
        +{" "}
    </button>
    <button className="Agregar" onClick={agregarCantidad}>
        {" "}
        AGREGAR AL CARRITO{" "}
    </button>
    </div>
) : null;
};

export default ItemCount;