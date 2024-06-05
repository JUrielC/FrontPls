import React from "react";
import './ModalAddUser.css'

const ModalAddUser = ({setOpenModalAddUser}) => {

  return (
    <div className="au-modalBackground">
      <div className="au-modalContainer">
        <div className="au-form-container">
          <h2>Registrar Usuario</h2>
          <div className="au-row">
            <div className="au-input-group">
              <label htmlFor="nombre">Nombre(s):</label>
              <input type="text" id="nombre" maxLength={45} className="selectric" />
            </div>
            
            <div className="au-input-group">
              <label htmlFor="apellido1">Apellido paterno:</label>
              <input type="text" id="apellido1" maxLength={45} className="selectric" />
            </div>

            <div className="au-input-group">
              <label htmlFor="apellido2">Apellido materno:</label>
              <input type="text" id="apellido2" maxLength={45} className="selectric"/>
            </div>
          </div>

          <div className="au-row">
                <p/><p/>
            </div>

          <div className="au-row">
            <div className="au-input-group">
              <label htmlFor="nombre_login">Nombre de usuario:</label>
              <input type="text" id="nombre_login" maxLength={20} className="selectric" />
            </div>
            
            <div className="au-input-group">
              <label htmlFor="passw">Password:</label>
              <input type="text" id="passw" maxLength={60} className="selectric" />
            </div>

            <div className="au-input-group">
              <label htmlFor="rol">Rol:</label>
              <select id="rol" className="selectric">
                <option value="2">Laboratorista</option>
                <option value="3">Asistente</option>
                <option value="1">Administrador</option>
                {/* <!-- Opciones del combobox Carrera --> */}
              </select>
            </div>

            <div className="au-input-group">
              <label htmlFor="estatus">Activo:</label>
              <select id="estatus" className="selectric">
                <option value="1">Si</option>
                <option value="0">No</option>
                {/* <!-- Opciones del combobox Carrera --> */}
              </select>
            </div>

          </div>

          {/* <div className="input-group">
            <label htmlFor="observaciones">Observaciones:</label>
            <textarea id="observaciones" rows="5" textarea>
          </div> */}

            <div className="au-row">
                <p/><p/>
            </div>

          <div className="au-button-group">
            <button type="submit" id="submit-btn">Enviar</button>
            <button type="button" id="cancel-btn" onClick={()=>{setOpenModalAddUser(false)}}>Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  )

}

export default ModalAddUser;