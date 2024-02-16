import React from "react";
import './Checkout.css';

const FormularioCheckout = ({ datosForm, guardarDatosInput, enviarOrden }) => {
    return (
      <div className="formulario-container">
        <h2 className="formulario-titulo">Para continuar, complete los siguientes datos:</h2>
        <form onSubmit={enviarOrden} className="formulario-checkout">
          <div className="campo">
            <input type="text" id="nombre" name="nombre" placeholder="Nombre" value={datosForm.nombre} onChange={guardarDatosInput} />
          </div>
  
          <div className="campo">
            <input type="number" id="telefono" name="telefono" placeholder="Teléfono" value={datosForm.telefono} onChange={guardarDatosInput} />
          </div>
  
          <div className="campo">
            <input type="email" id="email" name="email" placeholder="Email" value={datosForm.email} onChange={guardarDatosInput} />
          </div>
  
          <button type="submit" className="button2">Enviar orden</button>
        </form>
        <h2 className="formulario-titulo">Al finalizar, se le indicará el ID de su orden de compra.</h2>
      </div>
    );
  };
  
  export default FormularioCheckout;