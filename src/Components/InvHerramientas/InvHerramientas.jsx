import DataTable from 'react-data-table-component'
import { ApiUrl } from '../../services/apirest'
import axios from 'axios'
//import ToolTipForCells from '../TooltipForCells/ToolTipForCells';
import { useEffect, useState } from 'react';
import './InvHerramientas.css'
import useGetWithAuth from '../../Hooks/useGetWithAUTH';
import ModalContainer from '../ModalesInfoTabla/ModalContainer'
import ModalInfoHerramienta from '../ModalesInfoTabla/ModalInfoHerramienta';
//import { response } from 'express';


/* LA PROP CORRESPONDE A LOS VALORES QUE SE QUIEREN BUSCAR EN LA TABLA A TRAVÉS DEL CUADRO DE BUSQUEDA */
const InvHerramientas = ({ filterSearch,  cboxFilterEstatus,setCboxFilterEstatus, cboxFilterOrigen, setCboxFilterOrigen, showInvHerramientas, setShowHerramientas }) => {

    const [records, setRecords] = useState([])
    const [mostarInfo, setMostrarInfo] = useState(false)
    const[dataRow, setDataRow] = useState(null)
    let url = ApiUrl + "herramientas/"


    const { data, loading, error } = useGetWithAuth(url, setRecords)

    useEffect(()=>{
        if (loading || error || !data) {
            return;
        }

        setCboxFilterEstatus('')
        setCboxFilterOrigen('')

    },[loading, error, data])

    useEffect(() => {
        if (loading || error || !data) {
            return;
        }

        const newFilteredData = data.filter(
            item => {
                const matchSearched = item.nombre_tipo && item.nombre_tipo.toLowerCase().includes(filterSearch.toLowerCase())
                const matchFilterEstatus = cboxFilterEstatus === "" || item.nombre_estatus === cboxFilterEstatus /**/
                const matchFilterOrigen = cboxFilterOrigen === "" ||( item.nombre_origen) === cboxFilterOrigen
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

        },
        {
            name: "Usuario",
            selector: row => row.usuario,
            sortable: true,
            width: "10rem"
        },
        {
          // Columna de botones
          name: 'Acciones',
          cell: row => (
            <div className='invherr-button-group'>
              {/* Botón de Editar */}
              <button onClick={() =>{}}>Editar</button>
              {/* Botón de Eliminar */}
              <button onClick={() => {}}>Eliminar</button>
            </div>
          ),
          ignoreRowClick: false, // No permitir hacer clic en la fila para esta columna
          allowOverflow: true, // Permitir que los botones se desborden de la celda
          button: true, // Indicar que los elementos son botones
        },
    ]
 

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    

    return (
        <> {mostarInfo &&
            <ModalInfoHerramienta data = {dataRow} setMostrarInfo={setMostrarInfo} showInvHerramientas={showInvHerramientas} setShowHerramientas={setShowHerramientas}></ModalInfoHerramienta>} 
            <DataTable
                columns={columns}
                data={records}
                pagination={true}
                fixedHeader={true}
                persistTableHead={true}
                paginationPerPage={8}/* 
                selectableRows */
                progressPending={loading}
                paginationRowsPerPageOptions={[6, 8, 10, 15, 20, 25, 30]}
                onRowClicked={(data) => { 
                    console.log(data) 
                    setDataRow(data)
                    setMostrarInfo(true)
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