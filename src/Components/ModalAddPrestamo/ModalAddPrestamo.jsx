import React from "react";
import './ModalAddPrestamo.css'

const ModalAddPrestamo = ({setOpenModalPrestamos}) => {

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="form-container">
          <h2>Registrar Préstamo</h2>
          <div className="row">
            <div className="input-group">
              <label htmlFor="tipo">Tipo de herramienta:</label>
              <select id="tipo">
                <option value="">Seleccionar</option>
                {/*  <!-- Opciones del combobox Tipo --> */}
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="id-herramienta">ID Herramienta:</label>
              <select id="id-herramienta">
                <option value="">Seleccionar</option>
                {/* <!-- Opciones del combobox ID Herramienta --> */}
              </select>
            </div>
          </div>
          <div className="row">
            <div className="input-group">
              <label htmlFor="solicita">Solicita:</label>
              <input type="text" id="solicita" />
            </div>
            <div className="input-group">
              <label htmlFor="carrera">Carrera:</label>
              <select id="carrera">
                <option value="">Seleccionar</option>
                {/* <!-- Opciones del combobox Carrera --> */}
              </select>
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="observaciones">Observaciones:</label>
            <textarea id="observaciones" rows="5" maxLength="255"></textarea>
          </div>
          <div className="button-group">
            <button type="submit" id="submit-btn">Enviar</button>
            <button type="button" id="cancel-btn" onClick={()=>{setOpenModalPrestamos(false)}}>Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  )

}

export default ModalAddPrestamo;