import DataTable from 'react-data-table-component'
import { ApiUrl } from '../../services/apirest'
import axios from 'axios'
import '../TooltipForCells/ToolTipForCells.css'
import { useEffect, useState } from 'react';
import './PrestamosActivos.css'
import useGetWithAuth from '../../Hooks/useGetWithAUTH';
import ModInfoPrestActivo from '../ModalesInfoTabla/ModInfoPrestActivo';
import Modal from 'react-modal'
//import { response } from 'express';


const PrestamosActivos = ({ filterSearch, showPrestActivos, setShowPrestActivos }) => {

    const [records, setRecords] = useState([])
    let url = ApiUrl + "prestamos/prestamos_activos"

    const [openModalInf, setOpenModalInf] = useState(false)
    const [dataRow, setDataRow] = useState(null)

    const { data, loading, error } = useGetWithAuth(url, setRecords)

    /* COLUMNAS DE LA TABLA */
    const columns = [
        {
            name: "ID",
            selector: row => row.id_prestamo,
            sortable: true,
            width: "6rem"
        },
        {
            name: "Solicitante",
            selector: row => row.solicitante,
            sortable: true,
            width: "17rem"

        },
        {
            name: "Entrega",
            selector: row => row.usuario_entrega,
            sortable: true
        },
        {
            name: "ID Herramienta",
            selector: row => row.id_herramienta,
            sortable: true
        },
        {
            name: "Tipo",
            selector: row => row.nombre_tipo,
            sortable: true
        },
        {
            name: "Carrera",
            selector: row => row.nombre_carrera,
            sortable: true
        },
        {
            name: "Estatus",
            selector: row => row.nombre_estatus,
            sortable: true
        },
        {
            name: "Fecha",
            selector: row => row.fecha_prestamo,
            sortable: true
        },
        { 
            name: "Observaciones",
            selector: row => row.observaciones,
            sortable: true
        }
    ]

    /* MANEJADOR DEL filterSearch */
    useEffect(() => {
        if (loading || error || !data) {
            return;
        }
        const trimmedFilterSearch = filterSearch.trim();
        if (trimmedFilterSearch === "") {
            setRecords(data)
        }
        else {
            const newFilteredData = data.filter(
                item =>
                    item.solicitante && item.solicitante.toLowerCase().includes(trimmedFilterSearch.toLowerCase())
            )

            setRecords(newFilteredData)
        }
    }, [filterSearch, data, loading, error])


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div >
           { openModalInf && < ModInfoPrestActivo data = {dataRow} setOpenModalInf = {setOpenModalInf} showPrestActivos={showPrestActivos} setShowPrestActivos={setShowPrestActivos}></ModInfoPrestActivo> }
            <DataTable
                fixedHeader={true}
                columns={columns}
                data={records}
                pagination
                persistTableHead={true}
                paginationPerPage={9}/* 
                selectableRows */
                progressPending={loading}
                paginationRowsPerPageOptions={[7, 9, 11, 15, 20, 25, 30]}
                onRowClicked={(data) => { 
                    //console.log(data)
                    setDataRow(data)
                    setOpenModalInf(true)
                }}  // Manejar clic en la fila
                highlightOnHover  // Resaltar la fila al pasar el ratón por encima
                pointerOnHover    // Mostrar puntero al pasar el ratón por encima
                progressComponent={
                    <div id='spinner'></div>
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
                    header: {
                        style: {
                            borderColor: 'red'
                        }
                        
                    },
                   /*  headCells: {
                        style: {
                          backgroundColor: '#49b3ee', // Cambia esto al color que desees
                          color: 'white', // Cambia esto al color que desees
                          fontSize: '16px',
                          fontWeight: 'bold',
                        },
                      }, */
                }}
            />
        </div>
    )



}

export default PrestamosActivos;