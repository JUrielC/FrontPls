import React, { useState, useEffect } from "react";
import { ApiUrl } from "../../services/apirest";
import useGetWithAuth from '../../Hooks/useGetWithAUTH'
import actualizarDatos from "../../services/apiPut";
import './ModalEditHerramienta.css'

const ModalInfoHerramienta = ({ data, setMostrarInfo, showInvHerramientas, setShowHerramientas }) => {




    const urlGetTipos = ApiUrl + "tipo_herramienta"
    /* Modal response  */
    const [message, setMessage] = useState('')

    const { data: dataTipos, loading: loadingTipos, error: errorTipos } = useGetWithAuth(urlGetTipos, null)

    const [form, setForm] = useState({
        id_herramienta: data.id_herramienta,
        id_tipo: null,
        id_origen: null,
        observaciones: null
    })

    useEffect(() => {
        if (loadingTipos || errorTipos || !dataTipos) {
            return;
        }

    }, [loadingTipos, errorTipos, dataTipos, form])

    if (loadingTipos) return <p>Loading...</p>;
    if (errorTipos) return <p>Error: {errorTipos}</p>;

    return (

        <div className="mih-modalBackground">
            <div className="pact-modalContainer">
               {/*  {modalResp && <ModalResponse setModalResp={setModalResp} message={message} setOpenModalActual={funcionCerrar} cerrar = {true}></ModalResponse>} */}
                <h4 id="pact-titulo">Editar</h4>
                <div className="row">
                    <div className="pact-input-group">
                        <label htmlFor=""></label>
                        <label htmlFor=""></label>
                        <label htmlFor=""></label>
                    </div>
                </div>
                {/*

                    <div className="pact-input-group">
                        <label htmlFor="">ID: <span>{data.id_herramienta}</span></label>



                        <label htmlFor="">Tipo actual: <span>{data.nombre_tipo}</span></label>
                        <label htmlFor="">Estatus: <span>{data.nombre_estatus}</span></label>
                        <label htmlFor="">Origen: <span>{data.nombre_origen}</span></label>
                        <label htmlFor="">Fecha de registro: <span>{data.fecha_alta}</span></label>
                        <label htmlFor="">Usuario: <span>{data.usuario}</span></label>
                        <label htmlFor="">Observaciones: <span>{data.observaciones}</span></label>
                    </div>*/}



                {<div className="maifh-form-container">
                    <div className="pact-input-group">

                        <label htmlFor="">{message}</label>
                    </div>
                    <div className="pact-input-group">

                        <label htmlFor="">ID: <span>{data.id_herramienta}</span></label>
                        <label htmlFor="">Tipo: <span>{data.nombre_tipo}</span></label>
                    </div>

                    <div className="input-group">

                        <label htmlFor="tipo">Tipo:</label>
                        <select id="tipo" className="selectric" onChange={
                            (e) => {
                                if (e.target.value !== '') {

                                    setForm((prevForm) => ({
                                        ...prevForm,
                                        id_tipo: e.target.value
                                    }));

                                }
                                else {
                                    setForm((prevForm) => ({
                                        ...prevForm,
                                        id_tipo: null
                                    }));
                                }
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
                                if (e.target.value !== "") {
                                    setForm((prevForm) => ({
                                        ...prevForm,
                                        id_origen: e.target.value
                                    }));
                                }
                                else {

                                    setForm((prevForm) => ({
                                        ...prevForm,
                                        id_origen: null
                                    }));
                                }

                            }
                        }>
                            <option value="">Seleccionar</option>
                            <option value="1">Compra</option>
                            <option value="2">Donación</option>
                            {/* <!-- Opciones del combobox ID Herramienta --> */}
                        </select>
                    </div>

                    <div className="input-group">
                        <label htmlFor="observaciones">Observaciones:</label>
                        <textarea id="observaciones" rows="4" maxLength="255" placeholder="Opcional" onChange={
                            (e) => {
                                if ((e.target.value).trim() !== "") {
                                    setForm((prevForm) => ({
                                        ...prevForm,
                                        observaciones: (e.target.value).trim()
                                    }));
                                }
                                else {
                                    setForm((prevForm) => ({
                                        ...prevForm,
                                        observaciones: null
                                    }));
                                }
                            }
                        }></textarea>
                    </div>

                </div>}



                <div className="button-group">

                     <button type="button" id="cancel-btn" onClick={
                        async () => {
                            const ruta = ApiUrl + "herramientas/"
                            const response = await actualizarDatos(ruta, form)
                            setMessage(response)
                        }
                    }>Guardar Cambios</button>

                    <button type="button" id="cancel-btn" onClick={
                        () => {
                            setMostrarInfo(false)
                            if (showInvHerramientas){
                                setShowHerramientas (false)
                                setTimeout(()=>{setShowHerramientas (true)}, 0)
                            }
                        }
                    } >Cerrar</button>
                </div>

            </div>
        </div>

    )
}

export default ModalInfoHerramienta;