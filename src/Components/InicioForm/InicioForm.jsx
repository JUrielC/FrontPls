import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import PrestamosActivos from '../PrestamosActivos/PrestamosActivos'
import PrestamosConcluidos from '../PrestamosConcluidos/PrestamosConcluidos';
import InvHerramientas from '../InvHerramientas/InvHerramientas';
import InvTipHerramientas from '../InvTipHerramientas/InvTipHerramientas';
import Bajas from '../Bajas/Bajas';
import ListaPrestamos from '../ListaPrestamos/ListaPrestamos';
import Usuarios from '../Usuarios/Usuarios';
import Solicitantes from '../Solicitantes/Solicitantes';
import AddItemMenu from '../AddItemMenu/AddItemMenu'
import DropdownUserLogged from '../DropdownUserLogged/DropdownUserLogged';
import ModalAddPrestamo from '../ModalAddPrestamo/ModalAddPrestamo';
import ModalAddHerramienta from '../ModalAddHerramienta/ModalAddHerramienta';
import ModalAddTipoHerr from '../ModalAddTipoHerr/ModalAddTipoHerr';
import ModalAddUser from '../ModalAddUser/ModalAddUser';
import Sidebar from '../Sidebar/Sidebar';
import CboxFilter from '../CboxFilter/CboxFilter';
import ModalDelete from '../ModalDelete.jsx/ModalDelete';
import { ApiUrl } from '../../services/apirest';
import '../InvTipHerramientas/InvTipHerramienta.css'
import './InicioForm.css'


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
    const [showInvHerramientas, setShowHerramientas] = useState(false)
    const [showTiposHerramientas, setShowTiposHerramientas] = useState(false)
    const [showBajas, setShowBajas] = useState(false)
    //mostrar modal de borrar historial de bajas
    const [showModalDelBajas, setShowModalDelBajas] = useState(false)

    //Usuarios
    const [showUsuarios, setShowUsuarios] = useState(false)
    const [showSolicitantes, setShowSolicitantes] = useState(false)




    /* FUNCIÓN PARA TOMAR DATOS DEL USER  */
    const userData = localStorage.getItem('user-lab-sistemas')

    /* TITULO DEL CONTENEDOR DE LA TABLA */
    const [labelTitleTable, setlabelTitleTable] = useState('Prestamos Pendientes')

    /* FUNCIÓN PARA EL VALOR DEL CUADRO DE BÚSQUEDA DEL NAVBAR */
    const [valueSearch, setValueSearch] = useState("")

    /* MANEJAR EL  CBOX FILTER DEL COMPONENT INVHERRAMIENTAS */
    // Estado para almacenar el valor seleccionado
    const [selectedFilterEstatus, setselectedFilterEstatus] = useState('');
    const [selectedFilterOrigen, setselectedFilterOrigen] = useState('');


    // Función para manejar el cambio de selección
    const handleFilterEstatus = (event) => {
        event.preventDefault();
        setselectedFilterEstatus(event.target.value);
    };
    const handleFilterOrigen = (event) => {
        event.preventDefault();
        setselectedFilterOrigen(event.target.value);
    };

    const navigate = useNavigate()
    useEffect(() => {
        if(!localStorage.getItem('token-lab-sistemas')){
            navigate('/login')
        }
    }, [])



    return (
        <>  
        {showBajas && showModalDelBajas && 
             <ModalDelete id_param={""} nombre_elemento={"Historial de bajas"} 
             showTabla={showBajas} setShowTabla={setShowBajas} openThisModal={setShowModalDelBajas}
             rutaDelete={ApiUrl + "bajas/clear_bajas/all"}
             ></ModalDelete>
             }
            <div>
                <div id="app">
                    <div className="main-wrapper main-wrapper-1">
                        <div className="navbar-bg"></div>
                        <nav className="navbar navbar-expand-lg main-navbar">
                            <form className="form-inline mr-auto">
                                <ul className="navbar-nav mr-3">
                                    <li><a href="#" data-toggle="sidebar" aria-disabled tabIndex={-1} className="nav-link nav-link-lg"><i className="fas fa-bars"></i></a></li>
                                    <li><a href="#" data-toggle="search" className="nav-link nav-link-lg d-sm-none"><i className="fas fa-search"></i></a></li>
                                </ul>
                                <div className="search-element">
                                    <input
                                        onChange={(e) => { setValueSearch(e.target.value.trim()) }}
                                        className="form-control"
                                        type="search"
                                        placeholder="Buscar     "
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

                        <Sidebar
                            setShowPrestActivos={setShowPrestActivos}
                            setShowPrestConcluidos={setShowPrestConcluidos}
                            setShowListPrestamos={setShowListPrestamos}
                            setShowHerramientas={setShowHerramientas}
                            setShowTiposHerramientas={setShowTiposHerramientas}
                            setShowBajas={setShowBajas}
                            setShowUsuarios={setShowUsuarios}
                            setShowSolicitantes={setShowSolicitantes}
                            setlabelTitleTable={setlabelTitleTable}
                        />

                        {/* Main Content */}
                        <div className="main-content">
                            <section className="section">


                                {/* <div className="row"> */}
                                {/* <div className="col-lg-8"> */}
                                <div className="card">
                                    <div className="card-header d-flex justify-content-between align-items-center">
                                        <h4>{labelTitleTable}</h4>

                                        <div className="d-flex flex-row justify-content-between align-items-end" /* style={{backgroundColor:'red'}} */>
                                            {showInvHerramientas &&
                                                <>
                                                    <CboxFilter
                                                        options={[
                                                            { value: '', label: 'Todos los estatus' },
                                                            { value: 'Disponible', label: 'Disponibles' },
                                                            { value: 'Prestada', label: 'Prestadas' }
                                                        ]}
                                                        onChange={handleFilterEstatus}
                                                    />
                                                    <CboxFilter
                                                        options={[
                                                            { value: '', label: 'Cualquier origen' },
                                                            { value: 'Donación', label: 'Donación' },
                                                            { value: 'Compra', label: 'Compra' }
                                                        ]}
                                                        onChange={handleFilterOrigen}
                                                    />

                                                </>
                                            }
                                            {showBajas &&  
                                            <div className='inicio-button-group'>
                                             <button className='inicio-button-group'onClick={
                                                ()=>{
                                                    setShowModalDelBajas(true)
                                                }
                                             }> Borrar historial</button>
                                                </div>
                                             }

                                        </div>

                                        {/*  <p>
                                            
                                        {selectedOption && <p>Selected option: {selectedOption}</p>}
                                        </p> */}
                                    </div>

                                    {openModalPrestamos && <ModalAddPrestamo setOpenModalPrestamos={setOpenModalPrestamos} setShowPrestActivos={setShowPrestActivos} showPrestActivos={showPrestActivos}/>}
                                    {openModalAddHerramienta && <ModalAddHerramienta setOpenModalAddHerramienta={setOpenModalAddHerramienta} showInvHerramientas={showInvHerramientas} setShowHerramientas={setShowHerramientas}/>}
                                    {openModalAddTipoHerr && <ModalAddTipoHerr setOpenModalAddTipoHerr={setOpenModalAddTipoHerr} showTiposHerramientas={showTiposHerramientas} setShowTiposHerramientas={setShowTiposHerramientas} />}
                                    {openModalAddUser && <ModalAddUser setOpenModalAddUser={setOpenModalAddUser} showUsuarios={showUsuarios} setShowUsuarios={setShowUsuarios}/>}
                                    {/* {<ModalResponse/>} */}


                                    <div className="card-body">
                                        {showPrestActivos && <PrestamosActivos filterSearch={valueSearch} showPrestActivos={showPrestActivos} setShowPrestActivos={setShowPrestActivos}/>}
                                        {showPrestConcluidos && <PrestamosConcluidos filterSearch={valueSearch} />}
                                        {showListPrestamos && <ListaPrestamos filterSearch={valueSearch} />}
                                        {showInvHerramientas && <InvHerramientas
                                            filterSearch={valueSearch} cboxFilterEstatus={selectedFilterEstatus} 
                                            setCboxFilterEstatus={setselectedFilterEstatus} cboxFilterOrigen={selectedFilterOrigen} 
                                            setCboxFilterOrigen={setselectedFilterOrigen}
                                            showInvHerramientas={showInvHerramientas}
                                            setShowHerramientas={setShowHerramientas}
                                            />}
                                        {showTiposHerramientas && <InvTipHerramientas filterSearch={valueSearch} showTiposHerramientas = {showTiposHerramientas} setShowTiposHerramientas={setShowTiposHerramientas}/>}
                                        {showUsuarios && <Usuarios filterSearch={valueSearch} showUsuarios={showUsuarios} setShowUsuarios={setShowUsuarios}/> }
                                        {showSolicitantes && <Solicitantes filterSearch={valueSearch}/>}
                                        {showBajas && <Bajas filterSearch={valueSearch} showBajas={showBajas} setShowBajas={setShowBajas} />}
                                    </div>
                                </div>
                                {/* </div> */}

                                {/*  </div> */}


                            </section>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );

}

export default InicioForm;