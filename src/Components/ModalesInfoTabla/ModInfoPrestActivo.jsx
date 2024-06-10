import React, { useState } from "react";
import actualizarDatos from '../../services/apiPut'
import { ApiUrl } from "../../services/apirest";
import ModalResponse from "../ModalResponse/ModalResponse";
import './ModInfoPrestActivo.css'

const ModInfoPrestActivo = ({ data, setOpenModalInf, showPrestActivos, setShowPrestActivos }) => {

    /*Modal para response del backend*/
    const [modalResp, setModalResp] = useState(false)
    const [message, setMessage] = useState('')

    const funcionCerrar = (modalAbierto) => {
       if (showPrestActivos){
        setShowPrestActivos(modalAbierto);
        setTimeout(() => setShowPrestActivos(true), 0);
       }
    }

    return (

        <div className="pact-modalBackground">
            <div className="pact-modalContainer">
                {modalResp && <ModalResponse setModalResp={setModalResp} message={message} setOpenModalActual={funcionCerrar} cerrar={true}></ModalResponse>}
                <h4 id="pact-titulo">Detalles</h4>
                <div className="row">
                    <div className="pact-input-group">
                        <label htmlFor=""></label>
                        <label htmlFor=""></label>
                        <label htmlFor=""></label>
                    </div>
                </div>
                <div className="pact-input-group">
                    <label htmlFor="">ID: <span>{data.id_prestamo}</span></label>
                    <label htmlFor="">Solicitante: <span>{data.solicitante}</span></label>
                    <label htmlFor="">Correo de solicitante: <span>{data.mail_solicitante}</span></label>
                    <label htmlFor="">Teléfono de solicitante: <span>{data.telefono_solicitante}</span></label>
                    <label htmlFor="">Entrega: <span>{data.usuario_entrega} </span></label>
                    <label htmlFor="">ID Herramienta: <span>{data.id_herramienta}</span></label>
                    <label htmlFor="">Tipo: <span>{data.nombre_tipo}</span></label>
                    <label htmlFor="">Carrera: <span>{data.nombre_carrera}</span></label>
                    <label htmlFor="">Estatus: <span>{data.nombre_estatus}</span></label>
                    <label htmlFor="">Fecha: <span>{data.fecha_prestamo}</span></label>
                    <label htmlFor="" id="pact-observaciones">Observaciones: <span> {data.observaciones} </span></label>
                </div>

                <div className="button-group">
                    <button type="submit" id="submit-btn" onClick={
                        async () => {
                            const ruta = ApiUrl + "prestamos/devolver_prestamo"
                            const form = {
                                id_prestamo: data.id_prestamo
                            }
                            const response = await actualizarDatos(ruta, form)
                            setMessage(response)
                            await setModalResp(true)

                        }
                    }>Concluir</button>
                    <button type="button" id="cancel-btn" onClick={
                        () => {
                            setOpenModalInf(false)
                        }
                    }>Cerrar</button>
                </div>

            </div>
        </div>

    )
}

export default ModInfoPrestActivo