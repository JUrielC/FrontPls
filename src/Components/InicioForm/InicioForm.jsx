import React, { useEffect, useState } from 'react'
import PrestamosActivos from '../PrestamosActivos/PrestamosActivos'
import AddItemMenu from '../AddItemMenu/AddItemMenu'
import DropdownUserLogged from '../DropdownUserLogged/DropdownUserLogged';
import ModalAddPrestamo from '../ModalAddPrestamo/ModalAddPrestamo';
import ModalAddHerramienta from '../ModalAddHerramienta/ModalAddHerramienta';
import ModalAddTipoHerr from '../ModalAddTipoHerr/ModalAddTipoHerr';
import ModalAddUser from '../ModalAddUser/ModalAddUser';
import Sidebar from '../Sidebar/Sidebar';
//cdimport './InicioForm.css'


const InicioForm = () => {
    /* FUNCIONES PARA ABRIR MODALES */
    const [openModalPrestamos, setOpenModalPrestamos] = useState(false);
    const [openModalAddHerramienta, setOpenModalAddHerramienta] = useState(false);
    const [openModalAddTipoHerr, setOpenModalAddTipoHerr] = useState(false)
    const [openModalAddUser, setOpenModalAddUser] = useState(false)

    /* FUNCIONES PARA ABRIR COMPONENTES DEL MENU SIDEBAR */

    //Préstamos 
    const [showPrestActivos, setShowPrestActivos] = useState(true)
    const [showPrestConcluidos, setShowPrestConcluidos] = useState(false)
    const [showListPrestamos, setShowListPrestamos] = useState(false)

    //Inventario
    const [showHerramientas, setShowHerramientas] = useState(false)
    const [showTiposHerramientas, setShowTiposHerramientas] = useState(false)

    //Usuarios
    const [showUsuarios, setShowUsuarios] = useState(false)
    const [showSolicitantes, setShowSolicitantes] = useState(false)    

    /* FUNCIÓN PARA TOMAR DATOS DEL USER  */
    const userData = localStorage.getItem('user')

    /* TITULO DEL CONTENEDOR DE LA TABLA */
    const [labelTitleTable, setlabelTitleTable] = useState('Prestamos Pendientes')

    /* FUNCIÓN PARA EL VALOR DEL CUADRO DE BÚSQUEDA DEL NAVBAR */
    const [valueSearch, setValueSearch] = useState("")


    useEffect(() => {
    }, [])



    return (
        <>
            <div>
                <div id="app">
                    <div className="main-wrapper main-wrapper-1">
                        <div className="navbar-bg"></div>
                        <nav className="navbar navbar-expand-lg main-navbar">
                            <form className="form-inline mr-auto">
                                <ul className="navbar-nav mr-3">
                                    <li><a href="#" data-toggle="sidebar" className="nav-link nav-link-lg"><i className="fas fa-bars"></i></a></li>
                                    <li><a href="#" data-toggle="search" className="nav-link nav-link-lg d-sm-none"><i className="fas fa-search"></i></a></li>
                                </ul>
                                <div className="search-element">
                                    <input
                                        onChange={(e)=>{setValueSearch(e.target.value.trim())}}
                                        className="form-control" 
                                        type="search" 
                                        placeholder="Search" 
                                        aria-label="Search" 
                                        data-width="250"
                                    />
                                    <button className="btn" type="submit"><i className="fas fa-search"></i></button>

                                </div>
                            </form>
                            <ul className="navbar-nav navbar-right">
                                <AddItemMenu
                                    setOpenModalPrestamos={setOpenModalPrestamos}
                                    setOpenModalAddHerramienta={setOpenModalAddHerramienta}
                                    setOpenModalAddTipoHerr={setOpenModalAddTipoHerr}
                                    setOpenModalAddUser={setOpenModalAddUser}
                                />
                                <DropdownUserLogged userData={userData} />
                            </ul>
                        </nav>
                        
                       {/* SIDEBAR */}

                        <Sidebar></Sidebar>

                        {/* Main Content */}
                        <div className="main-content">
                            <section className="section">

                                <div className="row">
                                </div>
                                <div className="row">
                                    {/* <div className="col-lg-8"> */}
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>{labelTitleTable}</h4>
                                        </div>

                                        {openModalPrestamos && <ModalAddPrestamo setOpenModalPrestamos={setOpenModalPrestamos} />}
                                        {openModalAddHerramienta && <ModalAddHerramienta setOpenModalAddHerramienta={setOpenModalAddHerramienta} />}
                                        {openModalAddTipoHerr && <ModalAddTipoHerr setOpenModalAddTipoHerr={setOpenModalAddTipoHerr} />}
                                        {openModalAddUser && <ModalAddUser setOpenModalAddUser={setOpenModalAddUser} />}


                                        <div className="card-body">
                                            {showPrestActivos && <PrestamosActivos filterSearch={valueSearch}></PrestamosActivos>}
                                        </div>
                                    </div>
                                    {/* </div> */}

                                </div>


                            </section>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );

}

export default InicioForm;