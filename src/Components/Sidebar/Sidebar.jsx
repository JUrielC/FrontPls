import React from "react"

const Sidebar = () =>{

    

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
                <i className="fas" style={{ fontSize: '150%' }}>
                    P
                </i>
                <span>Préstamos</span>
            </a>
            <ul className="dropdown-menu">
                <li><a className="nav-link" href="">Préstamos activos</a></li>
                <li><a className="nav-link" href="">Préstamos concluidos</a></li>
                <li><a className="nav-link" href="">Lista de Préstamos</a></li>
            </ul>
        </li>
        <li className="dropdown">
            <a href="#" className="nav-link has-dropdown">
                <i className="fas fa-archive" >

                </i>
                <span>Inventario</span>
            </a>
            <ul className="dropdown-menu">
                <li><a className="nav-link" href="">Herramientas</a></li>
                <li><a className="nav-link" href="">Tipos de herramientas</a></li>
            </ul>
        </li>
        <li className="menu-header">Administración</li>
        <li className="dropdown">
            <a href="#" className="nav-link has-dropdown" data-toggle="dropdown">
                <i className="fas fa-columns"></i>
                <span>Usuarios</span>
            </a>
            <ul className="dropdown-menu">
                <li><a /* className="nav-link" */ href="">Usuarios</a></li>
                <li><a /* className="nav-link" */ href="">Solicitantes</a></li>
            </ul>
        </li>

    </ul>

</aside>
</div>

    )
}


export default Sidebar