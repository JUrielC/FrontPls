import React, { useState } from "react";
import enviarDatos from "../../services/apiPost";
import { ApiUrl } from "../../services/apirest";
import './ModalRegistrarBaja.css'

const ModalRegistrarBaja = ({ id_elemento, nombre_elemento, showTabla, setShowTabla, openThisModal, ruta }) => {

    const [labelInfo, setLabelInfo] = useState('')
    const [labelTitle, setLabelTitle] = useState('Confirmación')
    const [showOptions, setShowOptions] = useState(true)
    const [colorTitle, setColorTilte] = useState({ color: 'gray' })

    const [form, setForm] = useState({
        id_herramienta: id_elemento,
        id_motivo: '2',
        observaciones: ''
    })

    return (
        <>
            <div className="mrb-modalBackground">
                <div className="mrb-modalContainer"><div className="mdel-input-group">
                    <label htmlFor=""></label>
                </div>
                    <h4 id="mdel-titulo" style={colorTitle}>{labelTitle}</h4>

                    <div className="mdel-input-group">
                        <label htmlFor=""></label>
                        <label htmlFor="">{labelInfo}</label>
                    </div>

                    <div className="mdel-input-group">
                        {showOptions && <>

                            <label htmlFor=""> Baja
                                <span>
                                  ID: {id_elemento} {", "} Nombre: {nombre_elemento} 
                                </span>
                               </label>

                            <div className="row">
                                <div className="input-group">

                                    <label htmlFor="Motivo">Motivo:</label>
                                    <select id="Motivo" className="selectric" onChange={
                                        (e) => {
                                            setForm((prevForm)=>({
                                                ...prevForm,
                                                id_motivo: e.target.value
                                            }))
                                        }
                                    }>
                                       {/*  <option value="">Seleccionar</option> */}
                                        <option value="2">Daño</option>
                                        <option value="1">Extravío</option>

                                    </select>

                                </div>
                                <div className="input-group">
                                    <label htmlFor="observaciones">Observaciones:</label>
                                    <input id="observaciones" type="text" maxLength={255} className="selectric" onChange={
                                        (e)=>{
                                            setForm((prevForm)=>({
                                                ...prevForm,
                                                observaciones: e.target.value.trim()
                                            }))
                                        }
                                    }/>
                                </div>

                            </div>

                        </>


                        }
                    </div>



                    <div className="button-group">

                        {showOptions &&
                            <button type="button" id="baja-btn" onClick={
                                async () => {
                                    console.log (form)
                                    const response = await enviarDatos(ruta, form)
                                    setLabelInfo(response)
                                    setShowOptions(false)

                                }
                            }>Confirmar baja</button>}

                        <button type="button" id="cancel-btn" onClick={
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
export default ModalRegistrarBaja;
