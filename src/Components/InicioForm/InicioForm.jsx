import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import PrestamosActivos from '../PrestamosActivos/PrestamosActivos'
import { useContext } from 'react';
import './InicioForm.css'


const InicioForm = () => {

    const userData = localStorage.getItem('user')
    const [labelTitleTable, setlabelTitleTable] = useState('Prestamos Pendientes')
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
                                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" data-width="250" />
                                    <button className="btn" type="submit"><i className="fas fa-search"></i></button>
                                    <div className="search-backdrop"></div>
                                    <div className="search-result">
                                        <div className="search-header">
                                            Histories
                                        </div>
                                        <div className="search-item">
                                            <a href="#">How to hack NASA using CSS</a>
                                            <a href="#" className="search-close"><i className="fas fa-times"></i></a>
                                        </div>
                                        <div className="search-item">
                                            <a href="#">Kodinger.com</a>
                                            <a href="#" className="search-close"><i className="fas fa-times"></i></a>
                                        </div>
                                        <div className="search-item">
                                            <a href="#">#Stisla</a>
                                            <a href="#" className="search-close"><i className="fas fa-times"></i></a>
                                        </div>
                                        <div className="search-header">
                                            Result
                                        </div>
                                        <div className="search-item">
                                            <a href="#">
                                                <img className="mr-3 rounded" width="30" src="assets/img/products/product-3-50.png" alt="product" />
                                                oPhone S9 Limited Edition
                                            </a>
                                        </div>
                                        <div className="search-item">
                                            <a href="#">
                                                <img className="mr-3 rounded" width="30" src="assets/img/products/product-2-50.png" alt="product" />
                                                Drone X2 New Gen-7
                                            </a>
                                        </div>
                                        <div className="search-item">
                                            <a href="#">
                                                <img className="mr-3 rounded" width="30" src="assets/img/products/product-1-50.png" alt="product" />
                                                Headphone Blitz
                                            </a>
                                        </div>
                                        <div className="search-header">
                                            Projects
                                        </div>
                                        <div className="search-item">
                                            <a href="#">
                                                <div className="search-icon bg-danger text-white mr-3">
                                                    <i className="fas fa-code"></i>
                                                </div>
                                                Stisla Admin Template
                                            </a>
                                        </div>
                                        <div className="search-item">
                                            <a href="#">
                                                <div className="search-icon bg-primary text-white mr-3">
                                                    <i className="fas fa-laptop"></i>
                                                </div>
                                                Create a new Homepage Design
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <ul className="navbar-nav navbar-right">
                                <li className="if-dropdown">
                                    <a href="#" className="if-dropdown-toggle nav-link nav-link message-toggle ">
                                        <i className="fa fa-plus"></i>
                                    </a>
                                    <div class="if-dropdown-menu">
                                        <a href="#">Préstamo</a>
                                        <a href="#">Herramienta</a>
                                        <a href="#">Tipo de Herramienta</a>
                                        <a href="#">Usuario</a>
                                        <a href="#">Alumno/Maestro</a>
                                    </div>

                                </li>

                                {/* NOMBRE DE USUARIO */}
                                <li className="dropdown"><a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle nav-link-lg nav-link-user">
                                    <img alt="image" src="assets/img/avatar/avatar-1.png" className="rounded-circle mr-1" />
                                    <div className="d-sm-none d-lg-inline-block">{userData}</div>

                                </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <div className="dropdown-title">Logged in 5 min ago</div>
                                        <a href="features-profile.html" className="dropdown-item has-icon">
                                            <i className="far fa-user"></i> Profile
                                        </a>
                                        <a href="features-activities.html" className="dropdown-item has-icon">
                                            <i className="fas fa-bolt"></i> Activities
                                        </a>
                                        <a href="features-settings.html" className="dropdown-item has-icon">
                                            <i className="fas fa-cog"></i> Settings
                                        </a>
                                        <div className="dropdown-divider"></div>
                                        <a href="#" className="dropdown-item has-icon text-danger">
                                            <i className="fas fa-sign-out-alt"></i> Logout
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </nav>
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
                                    <a href="index.html">LS</a>
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
                                        <div className="card-body">
                                            <PrestamosActivos></PrestamosActivos>
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