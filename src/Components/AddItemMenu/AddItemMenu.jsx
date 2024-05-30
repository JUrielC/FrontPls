import React, { useState } from "react";
import ModalAddPrestamo from "../ModalAddPrestamo/ModalAddPrestamo";
import ModalAddHerramienta from "../ModalAddHerramienta/ModalAddHerramienta";
import './AddItemMenu.css';

const AddItemMenu = (
    { setOpenModalPrestamos, setOpenModalAddHerramienta, setOpenModalAddTipoHerr, setOpenModalAddUser }
) => {


    return (
        <>
            <li className="if-dropdown">
                <button className="if-dropdown-toggle nav-link message-toggle">
                    <i className="fa fa-plus"></i>
                </button>
                <div className="if-dropdown-menu">

                    <button onClick={() => {
                        setOpenModalPrestamos(true)
                        setOpenModalAddHerramienta(false)
                        setOpenModalAddTipoHerr(false)
                        setOpenModalAddUser(false)
                    }
                    } className="dropdown-item">
                        Préstamo
                    </button>


                    <button onClick={
                        () => {
                            setOpenModalAddHerramienta(true)
                            setOpenModalPrestamos(false)
                            setOpenModalAddTipoHerr(false)
                            setOpenModalAddUser(false)
                        }
                    } className="dropdown-item">
                        Herramienta
                    </button>


                    <button className="dropdown-item" onClick={
                        () => {
                            setOpenModalAddTipoHerr(true)
                            setOpenModalAddHerramienta(false)
                            setOpenModalPrestamos(false)
                            setOpenModalAddUser(false)
                        }
                    }>
                        Tipo de Herramienta
                    </button>



                    <button className="dropdown-item" onClick={
                        () => {
                            setOpenModalAddUser(true)
                            setOpenModalAddTipoHerr(false)
                            setOpenModalAddHerramienta(false)
                            setOpenModalPrestamos(false)
                        }
                    }>Usuario</button>
                    <button className="dropdown-item">Alumno/Maestro</button>
                </div>
            </li>
        </>
    );
};

export default AddItemMenu;
