import DataTable from 'react-data-table-component'
import { ApiUrl } from '../../services/apirest'
import axios from 'axios'
//import ToolTipForCells from '../TooltipForCells/ToolTipForCells';
import { useEffect, useState } from 'react';
import './ListaPrestamos.css'
//import { response } from 'express';


/* LA PROP CORRESPONDE A LOS VALORES QUE SE QUIEREN BUSCAR EN LA TABLA A TRAVÉS DEL CUADRO DE BUSQUEDA */
const ListaPrestamos = ({filterSearch}) => {

    const [data, setData] = useState([]);
    const [records, setRecords] = useState([])
    const [loading, setLoading] = useState(true);
    let url = ApiUrl + "prestamos/"
    
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
            name: "No. Ctrl/Nómina",
            selector: row => row.control_nomina,
            sortable: true
        },
        {
            name: "Entrega",
            selector: row => row.usuario_entrega,
            sortable: true
        },
        {
            name: "Recibe",
            selector: row => row.usuario_recibe,
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
            name: "Fecha de préstamo",
            selector: row => row.fecha_prestamo,
            sortable: true
        },
        {
            name: "Fecha devolución",
            selector: row => row.fecha_devolucion,
            sortable: true
        },
        {
            name: "Observaciones",
            selector: row => row.observaciones,
            sortable: true
        }
    ]

    /* FUNCIONES AL MONTAR EL COMPONENTE */
    useEffect(() => {
        axios.get(url)
            .then(response => {
                setData(response.data);
                setRecords(response.data)
            })
            .catch(error => {
                try {
                    alert(error.response.data.message.error_text);
                } catch (e) {
                    alert("Error al intentar establecer la conexión con el servidor")
                }
            })
            .finally(() => {
                setLoading(false);
            })

    }, [url]);


    /* MANEJADOR DEL filterSearch */
    useEffect(()=>{
        const trimmedFilterSearch = filterSearch.trim();
        if(trimmedFilterSearch === ""){
            setRecords(data)
        }
        else{
            const newFilteredData = data.filter(
                item =>
                item.solicitante && item.solicitante.toLowerCase().includes(trimmedFilterSearch.toLowerCase())
              ) 

              setRecords(newFilteredData)
        }
    },[filterSearch, data])



    return (
        <>
            <DataTable
                columns={columns}
                data={records}
                fixedHeader={true}
                pagination
                persistTableHead={true}
                paginationPerPage={8}/* 
                selectableRows */
                progressPending={loading}
                paginationRowsPerPageOptions={[6, 8, 10, 15, 20, 25, 30]}
                onRowClicked={(data) => { console.log(data.id_herramienta) }}  // Manejar clic en la fila
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
                }}
            />
        </>
    )



}

export default ListaPrestamos;