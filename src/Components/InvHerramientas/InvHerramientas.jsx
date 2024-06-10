import DataTable from 'react-data-table-component'
import { ApiUrl } from '../../services/apirest'
import { useEffect, useState } from 'react';
import './InvHerramientas.css'
import useGetWithAuth from '../../Hooks/useGetWithAUTH';
import ModalEditHerramienta from '../ModalesInfoTabla/ModalEditHerramienta';
import ModalRegistrarBaja from '../ModalRegistrarBaja/ModalRegistrarBaja';
import ModInfoTablaGeneric from '../ModalesInfoTabla/ModalInfoTablaGeneric';

//import { response } from 'express';


/* LA PROP CORRESPONDE A LOS VALORES QUE SE QUIEREN BUSCAR EN LA TABLA A TRAVÉS DEL CUADRO DE BUSQUEDA */
const InvHerramientas = ({ filterSearch, cboxFilterEstatus, setCboxFilterEstatus, cboxFilterOrigen, setCboxFilterOrigen, showInvHerramientas, setShowHerramientas }) => {

    const [records, setRecords] = useState([])
    const [mostrarEditar, SetMostrarEditar] = useState(false)
    const [dataRow, setDataRow] = useState(null)
    const [openModalInfo, setOpenModalInfo] = useState(false)

    const [showModalBaja, setShowModalBaja] = useState(false)

    let url = ApiUrl + "herramientas/"


    const { data, loading, error } = useGetWithAuth(url, setRecords)

    useEffect(() => {
        if (loading || error || !data) {
            return;
        }

        setCboxFilterEstatus('')
        setCboxFilterOrigen('')

    }, [loading, error, data])

    useEffect(() => {
        if (loading || error || !data) {
            return;
        }

        const newFilteredData = data.filter(
            item => {
                const matchSearched = item.nombre_tipo && item.nombre_tipo.toLowerCase().includes(filterSearch.toLowerCase())
                const matchFilterEstatus = cboxFilterEstatus === "" || item.nombre_estatus === cboxFilterEstatus /**/
                const matchFilterOrigen = cboxFilterOrigen === "" || (item.nombre_origen) === cboxFilterOrigen
                return matchSearched && matchFilterEstatus && matchFilterOrigen;
            }

        )

        setRecords(newFilteredData)




    }, [data, loading, error, filterSearch, cboxFilterEstatus, cboxFilterOrigen])

    /* COLUMNAS DE LA TABLA */
    const columns = [
        {
            name: "ID",
            selector: row => row.id_herramienta,
            sortable: true,
            width: "6rem"
        },
        {
            name: "Tipo",
            selector: row => row.nombre_tipo,
            sortable: true,

        },
        {
            name: "Estatus",
            selector: row => row.nombre_estatus,
            sortable: true,

        },
        {
            name: "Origen",
            selector: row => row.nombre_origen,
            sortable: true,

        },
        {
            name: "Fecha de registro",
            selector: row => row.fecha_alta,
            sortable: true,

        },
        {
            name: "Observaciones",
            selector: row => row.observaciones,
            sortable: true,
            width: "10rem"

        },
        {
            name: "Usuario",
            selector: row => row.usuario,
            sortable: true,
            width: "10rem"
        },
        {
            // Columna de botones
            name: 'Editar',
            cell: row => (
                <div className='invherr-button-group'>
                    {/* Botón de Editar */}
                    <button className='edit' tabIndex={-1} onClick={() => {
                        setDataRow(row)
                        SetMostrarEditar(true)
                    }}><i className="fas fa-edit"></i></button>
                </div>
            ),
            fixed: true,
            ignoreRowClick: false, // No permitir hacer clic en la fila para esta columna
            width: '6rem'
        },

        {
            // Columna de botones
            name: 'Baja',
            cell: row => (
                <div className='invherr-button-group'>
                    {/* Botón de Editar */}
                    <button className='baja' tabIndex={-1} onClick={() => {
                        setDataRow(row)
                        setShowModalBaja(true)
                    }}> <i className="fas fa-times-circle"></i></button>
                </div>
            ),
            fixed: true,
            ignoreRowClick: false, // No permitir hacer clic en la fila para esta columna
            width: '6rem'
        },


    ]

    const titles = {
        id_herramienta: "ID",
        nombre_tipo: "Tipo",
        nombre_estatus: "Estatus",
        nombre_origen: "Origen",
        fecha_alta: "Fecha de alta",
        usuario: "Usuario",
        observaciones: "Observaciones"
    }


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;



    return (
        <>
        {openModalInfo && <ModInfoTablaGeneric data={dataRow} titles={titles} setOpenModalInf={setOpenModalInfo}></ModInfoTablaGeneric>}
        { showModalBaja && <ModalRegistrarBaja openThisModal={setShowModalBaja} id_elemento={dataRow.id_herramienta} 
        nombre_elemento={dataRow.nombre_tipo} showTabla={showInvHerramientas} setShowTabla={setShowHerramientas} ruta={ApiUrl + "bajas/"}></ModalRegistrarBaja>}

            {mostrarEditar &&
                <ModalEditHerramienta data={dataRow} setMostrarInfo={SetMostrarEditar} showInvHerramientas={showInvHerramientas} setShowHerramientas={setShowHerramientas}></ModalEditHerramienta>}
            {/* {showModalDelete && <ModalDelete  id_param={dataRow.id_herramienta} nombre_elemento={dataRow.nombre_tipo} showTabla={showInvHerramientas}  setShowTabla={setShowHerramientas} openThisModal={setShowModalDelete} rutaDelete={url}/>} */}
            <DataTable
                columns={columns}
                data={records}
                pagination={true}
                fixedHeader={true}
                persistTableHead={true}
                paginationPerPage={9}/* 
                selectableRows */
                progressPending={loading}
                paginationRowsPerPageOptions={[7, 9, 11, 15, 20, 25, 30]}
                onRowClicked={(data) => {
                     setDataRow(data)
                     setOpenModalInfo(true)
                }}  // Manejar clic en la fila
                highlightOnHover  // Resaltar la fila al pasar el ratón por encima
                pointerOnHover    // Mostrar puntero al pasar el ratón por encima
                progressComponent={
                    <div>
                        <p></p>
                        <div id='spinner'></div>
                    </div>
                }
                customStyles={{
                    table: {
                        style: {
                            // Estilos personalizados para la tabla en sí misma
                            minHeight: '56vh', // Establece la altura mínima deseada
                            fontFamily: 'Helvetica, Arial, sans-serif'
                        },
                    },
                    rows: {
                        style: {
                            minHeight: '5.5vh'
                        }
                    },
                }}
            />
        </>
    )



}

export default InvHerramientas;