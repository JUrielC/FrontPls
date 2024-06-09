import React, { useState } from "react";
import actualizarDatos from "../../services/apiPut";
import { ApiUrl } from "../../services/apirest";
import './ModalResetPass.css'

const ModalResetPass = ({ data, showTabla, setShowTabla, openThisModal }) => {

    const [labelInfo, setLabelInfo] = useState(data.nombre_usuario + ' ' + data.apellido_paterno)
    const [message, setMessage] = useState(true)

    const [form, setForm] = useState({
        id_usuario: data.id_usuario,
        password: ''
    })

    return (
        <>
            <div className="pconc-modalBackground">
                <div className="restp-modalContainer"><div className="mdel-input-group">
                    <label htmlFor=""></label>
                    <label htmlFor=""></label>{/* 
                            <label htmlFor=""></label> */}
                </div>
                    <h4 id="mdel-titulo">Reset Password</h4>

                    <div className="mdel-input-group">
                        <label htmlFor="">{message}</label>
                        <label htmlFor=""></label>
                        <label htmlFor="">{labelInfo}</label>
                    </div>

                    <div className="au-input-group">
                        <h6 htmlFor="">Nuevo Password:</h6>
                        <input type="text" id="nuevo-pass" maxLength={60} autoComplete="off" className="selectric" onChange={
                            (e) => {
                                setForm((prevform) => ({
                                    ...prevform,
                                    password: e.target.value.trim()
                                }))
                            }
                        } />
                    </div>

                    {/*  <div className="mdel-input-group">
                        {showOptions && <>  <label htmlFor="">¿Eliminar el siguiente elmento?
                                <span>
                                    Nombre: 
                                </span>
                                <span>
                                    ID: 
                                </span></label></>
                        }
                        </div> */}


                    <div className="button-group">

                        
                            <button type="button" id="" onClick={
                                async () => {
                                    const ruta = ApiUrl + "usuarios/rec_pass"
                                    const response = await actualizarDatos(ruta, form)
                                    setMessage(response)

                                }
                            }>Enviar</button>

                        <button type="button" id="" onClick={
                            () => {
                                openThisModal(false)
                                if (showTabla) {
                                    setShowTabla(false)
                                    setTimeout(() => { setShowTabla(true) }, 0)
                                }
                            }
                        }>Cerrar</button>
                    </div>

                </div>
            </div>
        </>
    )
}
export default ModalResetPass;
