import React from "react";
import './ModalResponse.css'
const ModalResponse = ({ setModalResp, message, setOpenModalActual }) => {
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
                                if (message !== 'Ingrese valores válidos'){
                                setOpenModalActual(false);
                                setTimeout(() => setOpenModalActual(true), 0);}
                            }
                        }>Aceptar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalResponse