import React from "react";
import './ModalInfoPrestConcluido.css';
import './ModalInfoTablaGeneric.css';

const ModInfoTablaGeneric = ({ data, titles, setOpenModalInf, tableUsuarios = false }) => {
    return (
        <div className="pconc-modalBackground">
            <div className="generic-modalContainer">
                <h4 id="pact-titulo">Detalles</h4>
                <label htmlFor=""></label>
                <label htmlFor=""></label>
                <div className="pconc-input-group">
                    {Object.keys(titles).map((key, index) => (
                        <label htmlFor="" key={index} id={key === "observaciones" || key === "descripcion" ? "pact-observaciones" : ""}>
                            {titles[key]}: <span>{  (tableUsuarios && (titles[key] == "Estatus activo")) ? (data[key] === 1 ? "Sí": "No") :  data[key]}</span>
                        </label>
                    ))}
                    <label htmlFor=""></label>
                    <label htmlFor=""></label>
                    <label htmlFor=""></label>
                    <label htmlFor=""></label>
                    <label htmlFor=""></label>
                    <label htmlFor=""></label>
                    <label htmlFor=""></label>
                    <label htmlFor=""></label>
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
