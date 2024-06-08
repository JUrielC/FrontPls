import React, { useEffect, useState } from "react";
import useGetWithAuth from '../../Hooks/useGetWithAUTH'
import { ApiUrl } from "../../services/apirest";
import enviarDatos from "../../services/apiPost";
import ModalResponse from "../ModalResponse/ModalResponse";
import './ModalAddHerramienta.css'

const ModalAddHerramienta = ({ setOpenModalAddHerramienta, showInvHerramientas, setShowHerramientas }) => {

  const urlGetTipos = ApiUrl + "tipo_herramienta"
  const { data: dataTipos, loading: loadingTipos, error: errorTipos } = useGetWithAuth(urlGetTipos, null)
  /*Modal para response del backend*/
  const [modalResp, setModalResp] = useState(false)
  const [message, setMessage] = useState('')

  const [form, setForm] = useState({
    id_tipo: '',
    id_origen: '',
    observaciones: '',
    cantidad: ''
  })


  useEffect(() => {
    if (loadingTipos || errorTipos || !dataTipos) {
      return;
    }

  }, [loadingTipos, errorTipos, !dataTipos])



  if (loadingTipos) return <p>Loading...</p>;
  if (errorTipos) return <p>Error: {errorTipos}</p>;
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="form-container">
          <h2>Registrar Herramienta</h2>
          <div className="row">
            <div className="input-group">
              {modalResp && <ModalResponse setModalResp={setModalResp} message={message} setOpenModalActual={setOpenModalAddHerramienta}></ModalResponse>}
              <label htmlFor="tipo">Tipo:</label>
              <select id="tipo" className="selectric" onChange={
                (e) => {
                  setForm((prevForm) => ({
                    ...prevForm,
                    id_tipo: e.target.value
                  }));
                }
              }>
                <option value="">Seleccionar</option>

                {dataTipos.map(item => (
                  <option key={item.id_tipo} value={item.id_tipo}>{item.nombre_tipo}</option>
                ))}

              </select>
            </div>
            <div className="input-group">
              <label htmlFor="origen">Origen:</label>
              <select id="origen" className="selectric" onChange={
                (e) => {
                  setForm((prevForm) => ({
                    ...prevForm,
                    id_origen: e.target.value
                  }));
                }
              }>
                <option value="">Seleccionar</option>
                <option value="1">Compra</option>
                <option value="2">Donación</option>
                {/* <!-- Opciones del combobox ID Herramienta --> */}
              </select>
            </div>
          </div>
          <div className="row">
            <div className="input-group">
              <label htmlFor="cantidad">Cantidad:</label>
              <input type="number" id="cantidad" className="selectric" onChange={
                (e) => {
                  setForm((prevForm) => ({
                    ...prevForm,
                    cantidad: e.target.value
                  }));
                }
              } />
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
            <textarea id="observaciones" rows="5" maxLength="255" placeholder="Opcional. Si se ingresa mas de una herramienta, todas las herramientas ingresadas compartirán este campo" onChange={
              (e) => {
                setForm((prevForm) => ({
                  ...prevForm,
                  observaciones: e.target.value
                }));
              }
            }></textarea>
          </div>
          <div className="button-group">
            <button type="submit" id="submit-btn" onClick={
              async () => {

                if (form.id_tipo !== '' && form.id_origen !== '' && form.cantidad !=='0' && form.cantidad !== "" && !(form.cantidad.includes('.'))) {

                  const ruta = ApiUrl + "herramientas/"
                  const response = await enviarDatos(ruta, form)
                  setModalResp(true)
                  setMessage(response)

                }
                else {
                  setModalResp(true)
                  setMessage('Ingrese valores válidos')

                }

                /*  */
              }
            }>Enviar</button>
            <button type="button" id="cancel-btn" onClick={() => { 
              setOpenModalAddHerramienta(false) 
              if (showInvHerramientas) {
                setShowHerramientas(false);
                setTimeout(() => setShowHerramientas(true), 0);
              }
              }}>Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  )

}

export default ModalAddHerramienta;