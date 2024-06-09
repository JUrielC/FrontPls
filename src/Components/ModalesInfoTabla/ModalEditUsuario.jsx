import React, { useEffect, useState } from "react";
import { ApiUrl } from "../../services/apirest";
import actualizarDatos from "../../services/apiPut";
import './ModalEditUsuario.css'

const ModalEditUsuario = ({ data, openThisModal, showUsuarios, setShowUsuarios }) => {

    /*Modal para response del backend*/
    const [modalResp, setModalResp] = useState(false)
    const [message, setMessage] = useState('')

    const [form, setForm] = useState({
        id_usuario: data.id_usuario,
        id_rol: '',
        nombre_usuario: data.nombre_usuario,
        apellido_paterno: data.apellido_paterno,
        apellido_materno: data.apellido_materno,
        nombre_login: data.nombre_login,
    })

    useEffect(() => {
        const selectElement = document.getElementById("rol");

        if (data.nombre_rol === 'Administrador') {
            selectElement.value = "1";
            setForm((prevForm) => ({
                ...prevForm,
                id_rol: '1'
            }));
        }
        if (data.nombre_rol === 'Laboratorista') {
            selectElement.value = "2";
            setForm((prevForm) => ({
                ...prevForm,
                id_rol: '2'
            }));
        }
        if (data.nombre_rol === 'Asistente') {
            selectElement.value = "3";
            setForm((prevForm) => ({
                ...prevForm,
                id_rol: '3'
            }));
        }
       /*  setForm({
            nombre_usuario: data.nombre_usuario,
            apellido_paterno: data.apellido_paterno,
            apellido_materno: data.apellido_materno,
            nombre_login: data.nombre_login,
        }) */;

    }, [])



    return (
        <div className="au-modalBackground">
            <div className="meu-modalContainer">
                <div className="au-form-container">

                    <h4>Editar Usuario </h4>
                    <h5>{message}</h5>
                    <div className="au-row">
                        <div className="au-input-group">
                            <label htmlFor="nombre">Nombre(s):</label>
                            <input type="text" id="nombre" autoComplete="off" maxLength={45} className="selectric" value={form.nombre_usuario} onChange={
                                (e) => {
                                    setForm((prevForm) => ({
                                        ...prevForm,
                                        nombre_usuario: e.target.value.trim()
                                    }));
                                }
                            } />
                        </div>

                        <div className="au-input-group">
                            <label htmlFor="apellido1">Apellido paterno:</label>
                            <input type="text" id="apellido1" maxLength={45} autoComplete="off" className="selectric" value={form.apellido_paterno} onChange={
                                (e) => {
                                    setForm((prevForm) => ({
                                        ...prevForm,
                                        apellido_paterno: e.target.value.trim()
                                    }));
                                }
                            } />
                        </div>

                        <div className="au-input-group">
                            <label htmlFor="apellido2">Apellido materno:</label>
                            <input type="text" id="apellido2" autoComplete="off" placeholder="Opcional" maxLength={45} value={form.apellido_materno} className="selectric" onChange={
                                (e) => {
                                    setForm((prevForm) => ({
                                        ...prevForm,
                                        apellido_materno: e.target.value.trim()
                                    }));
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
                            <input type="text" id="nombre_login" autoComplete="off" maxLength={20} className="selectric" value={form.nombre_login} onChange={
                                (e) => {
                                    setForm((prevForm) => ({
                                        ...prevForm,
                                        nombre_login: e.target.value.trim()
                                    }));
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
                                    }));
                                }
                            } >
                                <option value="2">Laboratorista</option>
                                <option value="3">Asistente</option>
                                <option value="1">Administrador</option>
                                {/* <!-- Opciones del combobox Carrera --> */}
                            </select>
                        </div>

                    </div>
                    <div className="au-row">
                        <p /><p />
                    </div>

                    <div className="au-button-group">
                        <button type="submit" id="submit-btn" onClick={
                            async () => {
                                console.log(form)
/* */                                const ruta = ApiUrl + "usuarios/"
                                const response = await actualizarDatos(ruta, form)
                                setMessage(response)
                            }
                        }>Enviar</button>

                        <button type="button" id="cancel-btn" onClick={() => {
                            openThisModal(false)
                            if (showUsuarios) {
                                setShowUsuarios(false)
                                setTimeout(() => {
                                    setShowUsuarios(true)
                                })
                            }


                        }}>Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ModalEditUsuario;