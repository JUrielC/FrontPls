import React, { useState } from "react";
import { ApiUrl } from "../../services/apirest";
import actualizarDatos from "../../services/apiPut";
import './ModalEditTipo.css'

const ModalEditTipo = ({ data, showTable, setShowTable, openThisModal }) => {

    const [form, setForm] = useState({
        id_tipo: data.id_tipo,
        nombre_tipo: null,
        descripcion: null
    })

    /*Modal para response del backend*/
    const [message, setMessage] = useState('')





    return (
        <div className="etip-modalBackground">
            <div className="etip-modalContainer">
                <div className="form-container">
                    <h4>Editar</h4><div className="pact-input-group">

                        <label htmlFor="label-message">{message}<span></span></label>
                        <label htmlFor=""><span></span></label>
                        <label htmlFor=""><span></span></label>
                        <label htmlFor="">ID: <span>{data.id_tipo}</span></label>
                        <label htmlFor="">Tipo: <span>{data.nombre_tipo}</span></label>{/**/}  
                        
                    </div>
                    <div className="row">
                        <div className="input-group">

                            <label htmlFor="nombreTipo">Nombre de tipo de herramienta:</label>
                            <input type="text" id="nombreTipo" autoComplete="off" maxLength={50} className="selectric" onChange={
                                (e) => {
                                    if ((e.target.value).trim() === '') {
                                        setForm((prevForm) => ({
                                            ...prevForm,
                                            nombre_tipo: null
                                        }));
                                    }
                                    else {

                                        setForm((prevForm) => ({
                                            ...prevForm,
                                            nombre_tipo: e.target.value.trim()
                                        }));

                                    }
                                }
                            } />
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor="observaciones">Descripción:</label>
                        <textarea id="observaciones" placeholder="Opcional" rows="5" maxLength="255" onChange={
                            (e) => {
                                
                                if ((e.target.value).trim() === '') {
                                    setForm((prevForm) => ({
                                        ...prevForm,
                                        descripcion: null
                                    }));
                                }
                                else {

                                    setForm((prevForm) => ({
                                        ...prevForm,
                                        descripcion: e.target.value.trim()
                                    }));

                                }
                            }
                        }></textarea>
                    </div>
                    <div className="button-group">
                        <button type="submit" id="submit-btn" onClick={
                            async () => {
                                const ruta = ApiUrl + "tipo_herramienta/"
                                const response = await actualizarDatos (ruta, form)
                                setMessage(response)

                            
                            }
                        }>Enviar</button>
                        <button type="button" id="cancel-btn" onClick={() => {
                            openThisModal(false)/* */
                             if (showTable) {
                              setShowTable(false);
                              setTimeout(() => setShowTable(true), 0);
                            } 
                        }}>Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ModalEditTipo;