import React from "react";
import './ModalResponse.css'
const ModalResponse = ({ setModalResp, message, setOpenModalActual, cerrar = false }) => {

    /* cerrar en true,  cierra el modal desde el cual se le llama */
    return (
        <>
            <div className="mresp-modalBackground">
                <div className="mresp-modalContainer">
                    <div className="button-group">
                        <h5 id="mesage">{message}</h5>
                        <div></div>
                        <button type="submit" id="submit-btn" onClick={
                            () => {
                                setModalResp(false)
                                if (message !== 'Ingrese valores válidos' && !cerrar) {
                                    setOpenModalActual(false);
                                    setTimeout(() => setOpenModalActual(true), 0);
                                }
                                if (cerrar) {
                                    /* Si el modal que lo llama se debe cerrar, se toma la funcion setOpenModalActual para cerrarlo, hay que pasar cerrar = true
                                    pero si además se necesita actualizar el componente de donde sale el modal principal, 
                                    se debe pasar en vez de setOpenModalActual
                                     una función similar a  
                                    const funcionCerrar = (modalAbierto **Tal cual, no hay que sustituir modalAbierto con nada**) => {
                                    if (showcomponent){
                                        setshowcomponent(modalAbierto);
                                        setTimeout(() => setshowcomponent(true), 0);
                                    }
                                    }
                                    donde el componente base se actualiza con 
                                        setshowcomponent(modalAbierto - que es false, debido a que - setOpenModalActualrecibe un false--);
                                        setTimeout(() => setShowPrestActivos(true), 0);
                                        y es esto lo que provoca el cierre del modal
                                        la validación if (showPrestActivos) asegura que el componente base está siendo mostrado realmente y que no 
                                        vaya a encimarse con otro
                                    */
                                    setOpenModalActual(false);
                                }
                            }
                        }>Aceptar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalResponse