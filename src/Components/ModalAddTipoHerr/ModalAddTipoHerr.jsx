import React, { useState } from "react";
import useGetWithAuth from '../../Hooks/useGetWithAUTH'
import { ApiUrl } from "../../services/apirest";
import enviarDatos from "../../services/apiPost";
import ModalResponse from "../ModalResponse/ModalResponse";
import './ModalAddTipoHerr.css'

const ModalAddTipoHerr = ({ setOpenModalAddTipoHerr, showTiposHerramientas, setShowTiposHerramientas }) => {

  const [form, setForm] = useState({ nombre_tipo: '', descripcion: '' })

  /*Modal para response del backend*/
  const [modalResp, setModalResp] = useState(false)
  const [message, setMessage] = useState('')


  /* desactivar boton para evitar spam */

  const [buttonDisabled, setButtonDisabled] = useState(false);



  return (
    <div className="te-modalBackground">
      <div className="te-modalContainer">
        <div className="form-container">
          <h2>Registrar Tipo de Herramienta</h2>
          <div className="row">
          </div>
          <div className="row">
            <div className="input-group">
              {modalResp && <ModalResponse setModalResp={setModalResp} message={message} setOpenModalActual={setOpenModalAddTipoHerr}></ModalResponse>}
              <label htmlFor="nombreTipo">Nombre de tipo de herramienta:</label>
              <input type="text" id="nombreTipo" autoComplete="off" maxLength={50} className="selectric" onChange={
                (e) => {
                  setForm((prevForm) => ({
                    ...prevForm,
                    nombre_tipo: e.target.value.trim()
                  }));
                }
              } />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="observaciones">Descripción:</label>
            <textarea id="observaciones" placeholder="Opcional" rows="5" maxLength="255" onChange={
              (e) => {
                setForm((prevForm) => ({
                  ...prevForm,
                  descripcion: e.target.value.trim()
                }));
              }
            }></textarea>
          </div>
          <div className="button-group">
            <button type="submit" id="submit-btn" disabled={buttonDisabled} onClick={
              async () => {
                setButtonDisabled(true)
                if ((form.nombre_tipo).trim() !== '') {

                  const ruta = ApiUrl + "tipo_herramienta/"
                  const response = await enviarDatos(ruta, form)
                  setModalResp(true)
                  setMessage(response)
                  setButtonDisabled(false)
                }
                else {
                  setModalResp(true)
                  setMessage('Ingrese valores válidos')
                  setButtonDisabled(false)
                }
              }
            }>Enviar</button>
            <button type="button" id="cancel-btn" onClick={() => {
              setOpenModalAddTipoHerr(false)
              if (showTiposHerramientas) {
                setShowTiposHerramientas(false);
                setTimeout(() => setShowTiposHerramientas(true), 0);
              }
            }}>Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  )

}

export default ModalAddTipoHerr;