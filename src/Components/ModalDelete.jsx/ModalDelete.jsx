import React, { useState } from "react";
import eliminarDatos from "../../services/apiDelete";
import { ApiUrl } from "../../services/apirest";
import './ModalDelete.css'

const ModalDelete = ({ id_param, nombre_elemento, showTabla, setShowTabla, openThisModal, rutaDelete, delUser = false }) => {

    const [labelInfo, setLabelInfo ] = useState('')
    const [labelTitle, setLabelTitle] = useState('Confirmación')
    const [showOptions, setShowOptions] = useState(true)
    const [colorTitle, setColorTilte] = useState({color: 'gray'})

    return (
        <>
            <div className="pconc-modalBackground">
                <div className="mdel-modalContainer"><div className="mdel-input-group">
                            <label htmlFor=""></label>
                        </div>
                    <h4 id="mdel-titulo" style={colorTitle}>{labelTitle}</h4>
                    { delUser && <h6>Si elimina el usuario, todos los registros relacionados a este aparecerán como "usuario eliminado"</h6>}
                  
                        <div className="mdel-input-group">
                            <label htmlFor=""></label>
                            <label htmlFor=""></label>
                            <label htmlFor="">{labelInfo}</label>
                        </div>
                     
                    <div className="mdel-input-group">
                      {showOptions && <>  <label htmlFor="">¿Eliminar el siguiente elemento?
                            <span>
                                Nombre: {nombre_elemento}
                            </span>
                            <span>
                                ID: {id_param}
                            </span></label></>
                    }
                    </div>
                    

                    <div className="button-group">

                        { showOptions &&  
                        <button type="button" id="eliminar-btn" onClick={
                            async () => {
                                //console.log (rutaDelete)
                                const ruta = rutaDelete + id_param
                                const response = await eliminarDatos(ruta)
                                if (response.ok) {
                                    setLabelTitle('Hecho')
                                    setColorTilte({color: '#49b3ee'})
                                }
                                else {
                                    setLabelTitle('No realizado')
                                    setColorTilte({color: 'red'})
                                }
                                setLabelInfo(response.message)
                                setShowOptions(false)

                            }
                        }>Eliminar</button>}

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
export default ModalDelete;
