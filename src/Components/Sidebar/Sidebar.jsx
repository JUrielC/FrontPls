import React from "react"

const Sidebar = ({
    setShowPrestActivos, setShowPrestConcluidos, setShowListPrestamos, setShowHerramientas,
    setShowTiposHerramientas, setShowUsuarios, setShowSolicitantes,
    setlabelTitleTable
}) => {

    /* FUNCIÓN PARA MOSTRAR SOLO UNO DE LOS COMPONENTES PRINCIPALES */

    function showComponent(setShowComponent) {
   
        setShowPrestActivos(false)
        setShowPrestConcluidos(false)
        setShowListPrestamos(false)

        setShowHerramientas(false)
        setShowTiposHerramientas(false)

        setShowUsuarios(false)
        setShowSolicitantes(false)

        //setShowComponent(true)

        setTimeout(() => {
            setShowComponent(true);
          }, 0);
    }

    return (


        <div className="main-sidebar sidebar-style-2">
            <aside id="sidebar-wrapper">
                <div className="sidebar-brand">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-center align-items-center">
                                <p></p>
                            </div>
                        </div><div className="row">
                            <div className="col-12 d-flex justify-content-center align-items-center">
                                <h6>Laboratorio</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 d-flex justify-content-center align-items-center">
                                <p>Sistemas Computacionales</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sidebar-brand sidebar-brand-sm">
                    <a href="">LS</a>
                </div>
                <ul className="sidebar-menu">
                    <li className="menu-header">Laboratorio</li>
                    <li className="dropdown">
                        <a href="#" className="nav-link has-dropdown">
                            <i className="fas fa-exchange-alt" /* style={{ fontSize: '150%' }} */>
                                
                            </i>
                            <span>Préstamos</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="nav-link" href="" 
                                    onClick={(e)=>{
                                        e.preventDefault(); 
                                        showComponent(setShowPrestActivos);
                                        setlabelTitleTable('Préstamos Pendientes')
                                    }}>
                                Préstamos activos</a>
                            </li>

                            <li><a className="nav-link" href="" 
                                    onClick={ (e) => {
                                        e.preventDefault();
                                        showComponent(setShowPrestConcluidos)
                                        setlabelTitleTable('Préstamos Concluidos')
                                        }}>
                                    Préstamos concluidos</a>
                            </li>

                            <li>
                                <a className="nav-link" href="" onClick={
                                    (e)=>{
                                        e.preventDefault();
                                        showComponent(setShowListPrestamos)
                                        setlabelTitleTable('Lista de Préstamos')
                                    }
                                }>
                                    Lista de Préstamos</a>
                            </li>


                        </ul>
                    </li>
                    <li className="dropdown">
                        <a href="#" className="nav-link has-dropdown">
                            <i className="fas fa-clipboard-list" >

                            </i>
                            <span>Inventario</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="nav-link" href="" 
                                onClick={(e)=>{

                                    e.preventDefault();
                                    showComponent(setShowHerramientas)
                                    setlabelTitleTable('Lista de Herramientas')

                                }}>
                                Herramientas</a>
                            </li>
                            <li><a className="nav-link" href="" onClick={
                                (e) => {
                                    e.preventDefault();
                                    showComponent(setShowTiposHerramientas)
                                    setlabelTitleTable('Tipos de Herramientas')
                                }
                            }>Tipos de herramientas</a></li>
                        </ul>
                    </li>
                    <li className="menu-header">Administración</li>
                    <li className="dropdown">
                        <a href="#" className="nav-link has-dropdown" data-toggle="dropdown">
                            <i className="fas  fa-user-shield"></i>
                            <span>Usuarios</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li><a /* className="nav-link" */ href="" onClick={
                                (e)=>{
                                    e.preventDefault();
                                    showComponent(setShowUsuarios)
                                    setlabelTitleTable('Usuarios')

                                }
                            }>Usuarios</a></li>
                            <li><a /* className="nav-link" */ href="" onClick={
                                (e) => {
                                    e.preventDefault();
                                    showComponent(setShowSolicitantes)
                                    setlabelTitleTable('Solicitantes')
                                }
                            }>Solicitantes</a></li>
                        </ul>
                    </li>

                </ul>

            </aside>
        </div>

    )
}


export default Sidebar