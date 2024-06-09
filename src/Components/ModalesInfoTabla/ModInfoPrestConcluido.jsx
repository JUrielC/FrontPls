import React, { useState } from "react";
import './ModalInfoPrestConcluido.css'

const ModInfoPrestConcluido = ({ data, setOpenModalInf }) => {

 return(

        <div className="pconc-modalBackground">
            <div className="pconc-modalContainer">
                <h4 id="pact-titulo">Detalles</h4>
                <div className="row">
                    <div className="pconc-input-group"> 
                        <label htmlFor=""></label>
                        <label htmlFor=""></label>
                        <label htmlFor=""></label> 
                    </div> 
                </div>
                <div className="pconc-input-group">
                    <label htmlFor="">ID: <span>{data.id_prestamo}</span></label>
                    <label htmlFor="">Solicitante: <span>{data.solicitante}</span></label>
                    <label htmlFor="">No. Ctrl/Nomina: <span>{data.control_nomina}</span></label>
                    <label htmlFor="">Entrega: <span>{data.usuario_entrega} </span></label>
                    <label htmlFor="">Recibe    : <span>{data.usuario_recibe} </span></label>
                    <label htmlFor="">ID Herramienta: <span>{data.id_herramienta}</span></label>
                    <label htmlFor="">Tipo: <span>{data.nombre_tipo}</span></label>
                    <label htmlFor="">Carrera: <span>{data.nombre_carrera}</span></label>
                    <label htmlFor="">Estatus: <span>{data.nombre_estatus}</span></label>
                    <label htmlFor="">Fecha de préstamo: <span>{data.fecha_prestamo}</span></label>
                    <label htmlFor="">Fecha de devolución: <span>{data.fecha_devolucion}</span></label>
                    <label htmlFor="" id="pact-observaciones">Observaciones: <span>{data.observaciones}</span></label>
                </div>

                <div className="button-group">
    
                    <button type="button" id="cancel-btn"onClick={
                        () => {
                            setOpenModalInf(false)
                           
                        }
                    }>Cerrar</button>
                </div>

            </div>
        </div>

    )
}

export default ModInfoPrestConcluido