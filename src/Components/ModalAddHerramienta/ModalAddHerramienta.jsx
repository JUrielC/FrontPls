import React from "react";
import './ModalAddHerramienta.css'

const ModalAddHerramienta = ({setOpenModalAddHerramienta}) => {

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="form-container">
          <h2>Registrar Herramienta</h2>
          <div className="row">
            <div className="input-group">
              <label htmlFor="tipo">Tipo:</label>
              <select id="tipo">
                <option value="">Seleccionar</option>
                {/*  <!-- Opciones del combobox Tipo --> */}
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="origen">Origen:</label>
              <select id="origen">
                <option value="">Seleccionar</option>
                {/* <!-- Opciones del combobox ID Herramienta --> */}
              </select>
            </div>
          </div>
          <div className="row">
            <div className="input-group">
              <label htmlFor="cantidad">Cantidad:</label>
              <input type="number" id="cantidad" />
            </div>
            {/* <div className="input-group">
              <label for="carrera">Carrera:</label>
              <select id="carrera">
                <option value="">Seleccionar</option>
                
              </select>
            </div> */}
          </div>
          <div className="input-group">
            <label htmlFor="observaciones">Observaciones:</label>
            <textarea id="observaciones" rows="5" maxLength="255"></textarea>
          </div>
          <div className="button-group">
            <button type="submit" id="submit-btn">Enviar</button>
            <button type="button" id="cancel-btn" onClick={()=>{setOpenModalAddHerramienta(false)}}>Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  )

}

export default ModalAddHerramienta;