import React, { useState } from "react";
import { ApiUrl } from "../../services/apirest";
import enviarDatos from "../../services/apiPost";
import ModalResponse from "../ModalResponse/ModalResponse";
import './ModalAddUser.css'

const ModalAddUser = ({ setOpenModalAddUser, showUsuarios, setShowUsuarios }) => {

  /*Modal para response del backend*/
  const [modalResp, setModalResp] = useState(false)
  const [message, setMessage] = useState('')

  /* desactivar boton para evitar spam */

  const [buttonDisabled, setButtonDisabled] = useState(false);


  const [form, setForm] = useState({
    id_rol: '2',
    nombre_usuario: '',
    apellido_paterno: '',
    apellido_materno: '',
    nombre_login: '',
    password: '',
    estatus_activo: '1'
  })

  return (
    <div className="au-modalBackground">
      <div className="au-modalContainer">
        <div className="au-form-container">
          {modalResp && <ModalResponse setModalResp={setModalResp} message={message} setOpenModalActual={setOpenModalAddUser}></ModalResponse>}
          <h2>Registrar Usuario</h2>
          <div className="au-row">
            <div className="au-input-group">
              <label htmlFor="nombre">Nombre(s):</label>
              <input type="text" id="nombre" autoComplete="off" maxLength={45} className="selectric" onChange={
                (e) => {
                  setForm((prevForm) => ({
                    ...prevForm,
                    nombre_usuario: (e.target.value).trim()
                  }))
                }
              } />
            </div>

            <div className="au-input-group">
              <label htmlFor="apellido1">Apellido paterno:</label>
              <input type="text" id="apellido1" maxLength={45} autoComplete="off" className="selectric" onChange={
                (e) => {
                  setForm((prevForm) => ({
                    ...prevForm,
                    apellido_paterno: (e.target.value).trim()
                  }))
                }
              } />
            </div>

            <div className="au-input-group">
              <label htmlFor="apellido2">Apellido materno:</label>
              <input type="text" id="apellido2" autoComplete="off" placeholder="Opcional" maxLength={45} className="selectric" onChange={
                (e) => {
                  setForm((prevForm) => ({
                    ...prevForm,
                    apellido_materno: (e.target.value).trim()
                  }))
                }
              } />
            </div>
          </div>

          <div className="au-row">
            <p /><p />
          </div>

          <div className="au-row">
            <div className="au-input-group">
              <label htmlFor="nombre_login">Nombre de usuario:</label>
              <input type="text" id="nombre_login" autoComplete="off" maxLength={20} className="selectric" onChange={
                (e) => {
                  setForm((prevForm) => ({
                    ...prevForm,
                    nombre_login: (e.target.value).trim()
                  }))
                }
              } />
            </div>

            <div className="au-input-group">
              <label htmlFor="passw">Password:</label>
              <input type="text" id="passw" maxLength={60} autoComplete="off" className="selectric" onChange={
                (e) => {
                  setForm((prevForm) => ({
                    ...prevForm,
                    password: (e.target.value).trim()
                  }))
                }
              } />
            </div>

            <div className="au-input-group">
              <label htmlFor="rol">Rol:</label>
              <select id="rol" className="selectric" onChange={
                (e) => {
                  setForm((prevForm) => ({
                    ...prevForm,
                    id_rol: e.target.value
                  }))
                }
              } >
                <option value="2">Laboratorista</option>
                <option value="3">Asistente</option>
                <option value="1">Administrador</option>
                {/* <!-- Opciones del combobox Carrera --> */}
              </select>
            </div>

            <div className="au-input-group">
              <label htmlFor="estatus">Activo:</label>
              <select id="estatus" className="selectric" onChange={
                (e) => {
                  setForm((prevForm) => ({
                    ...prevForm,
                    estatus_activo: (e.target.value)
                  }))
                }
              } >
                <option value="1">Si</option>
                <option value="0">No</option>
              </select>
            </div>

          </div>
          <div className="au-row">
            <p /><p />
          </div>

          <div className="au-button-group">
            <button type="submit" id="submit-btn" disabled={buttonDisabled} onClick={
              async () => {
                setButtonDisabled(true)
                if (form.nombre_usuario.trim() !== '' && form.apellido_paterno.trim() !== '' && form.nombre_login.trim() !== '' && (form.password).trim() !== '' && form.id_rol.trim() !== '' && form.estatus_activo.trim() !== '') {
                  
                  const ruta = ApiUrl + "usuarios/"
                  const response = await enviarDatos(ruta, form)
                  setMessage(response)
                  setModalResp(true)
                  setButtonDisabled(false)
                }
                else {
                  setMessage('Ingrese valores válidos')
                  setModalResp(true)
                  setButtonDisabled(false)
                }
              }
            }>Enviar</button>
            <button type="button" id="cancel-btn" onClick={() => { 
              setOpenModalAddUser(false) 
              if (showUsuarios) {
                setShowUsuarios(false);
                setTimeout(() => setShowUsuarios(true), 0);
              }
              }}>Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  )

}

export default ModalAddUser;