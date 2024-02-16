import React, { useState, useContext, useEffect } from "react";
import FormularioCheckout from "./FormularioCheckout";
import { CartContext } from "../../context/CartContex";
import { collection, addDoc } from "firebase/firestore";
import db from "../../db/db";

import './Checkout.css';

const Checkout = () => {
    const [datosForm, setDatosForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    });

    const { cartItems, precioTotal, clearCart } = useContext(CartContext);
    const [idOrden, setIdOrden] = useState(null);
    const [ordenEnviada, setOrdenEnviada] = useState(false);

    useEffect(() => {
    console.log("Carrito en Checkout:", cartItems);
    }, [cartItems]);

    const enviarOrden = async (event) => {
    event.preventDefault();

    try {
        const orden = {
        comprador: { ...datosForm },
        productos: [...cartItems],
        total: precioTotal(),
        };

        const ordenesRef = collection(db, "ordenes");
        const respuesta = await addDoc(ordenesRef, orden);

        setDatosForm({
        nombre: "",
        telefono: "",
        email: "",
        });

        setIdOrden(respuesta.id);
        setOrdenEnviada(true);

        clearCart();
    } catch (error) {
        console.error("Error al enviar la orden:", error);
    }
    };

    return (
        <div>
        {ordenEnviada ? (
            <div className="exito-container">
            <h2 className="exito-titulo">¡Orden generada con éxito!</h2>
            <p className="exito-mensaje">Guarde el ID de su orden: {idOrden}</p>
            </div>
        ) : (
            <FormularioCheckout
            datosForm={datosForm}
            guardarDatosInput={(event) => setDatosForm({ ...datosForm, [event.target.name]: event.target.value })}
            enviarOrden={enviarOrden}
            />
        )}
        </div>
    );
};

export default Checkout;