import React from "react";
import './ModalAddTipoHerr.css'

const ModalAddTipoHerr = ({setOpenModalAddTipoHerr}) => {

  return (
    <div className="te-modalBackground">
      <div className="te-modalContainer">
        <div className="form-container">
          <h2>Registrar Tipo de Herramienta</h2>
          <div className="row">
          </div>
          <div className="row">
            <div className="input-group">
              <label htmlFor="nombreTipo">Nombre de tipo de herramienta:</label>
              <input type="text" id="nombreTipo"  maxLength={50}/>
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="observaciones">Observaciones:</label>
            <textarea id="observaciones" rows="5" maxLength="255"></textarea>
          </div>
          <div className="button-group">
            <button type="submit" id="submit-btn">Enviar</button>
            <button type="button" id="cancel-btn" onClick={()=>{setOpenModalAddTipoHerr(false)}}>Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  )

}

export default ModalAddTipoHerr;