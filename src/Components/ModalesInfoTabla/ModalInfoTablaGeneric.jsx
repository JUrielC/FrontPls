import React from "react";
import './ModalInfoPrestConcluido.css';

const ModInfoTablaGeneric = ({ data, titles, setOpenModalInf }) => {
    return (
        <div className="pconc-modalBackground">
            <div className="pconc-modalContainer">
                <h4 id="pact-titulo">Detalles</h4>
                <div className="pconc-input-group">
                    {Object.keys(titles).map((key, index) => (
                        <label htmlFor="" key={index} id={key === "observaciones" ? "pact-observaciones" : ""}>
                            {titles[key]}: <span>{data[key]}</span>
                        </label>
                    ))}
                </div>
                <div className="button-group">
                    <button
                        type="button"
                        id="cancel-btn"
                        onClick={() => setOpenModalInf(false)}
                    >
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModInfoTablaGeneric;
