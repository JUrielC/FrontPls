import DataTable from 'react-data-table-component'
import { ApiUrl } from '../../services/apirest'
//import ToolTipForCells from '../TooltipForCells/ToolTipForCells';
import { useEffect, useState } from 'react';
import useGetWithAuth from '../../Hooks/useGetWithAUTH';
import ModalEditTipo from '../ModalesInfoTabla/ModalEditTipo';
import ModalDelete from '../ModalDelete.jsx/ModalDelete';
import './InvTipHerramienta.css'


/* LA PROP CORRESPONDE A LOS VALORES QUE SE QUIEREN BUSCAR EN LA TABLA A TRAVÉS DEL CUADRO DE BUSQUEDA */
const InvTipHerramientas = ({ filterSearch, showTiposHerramientas, setShowTiposHerramientas }) => {

    const [dataRow, setDataRow] = useState(null)

    const [openModalEdit, setOpenModalEdit] = useState(false)
    const [openModalDelete, setOpenModalDelete] = useState(false)

    const [records, setRecords] = useState([])
    let url = ApiUrl + "tipo_herramienta/"


    const { data, loading, error } = useGetWithAuth(url, setRecords)


    useEffect(() => {
        if (loading || error || !data) {
            return;
        }

        const newFilteredData = data.filter(
            item => {
                const matchSearched = item.nombre_tipo && item.nombre_tipo.toLowerCase().includes(filterSearch.toLowerCase())
                return matchSearched 
            }

        ) 

        setRecords(newFilteredData)




    }, [data, loading, error, filterSearch])

    /* COLUMNAS DE LA TABLA */
    const columns = [
        {
            name: "ID",
            selector: row => row.id_tipo,
            sortable: true
        },
        {
            name: "Tipo",
            selector: row => row.nombre_tipo,
            sortable: true,

        }, 
        {
            name: "Descripción",
            selector: row => row.descripcion,
            sortable: true,
        },
        {
          // Columna de botones
          name: 'Editar',
          cell: row => (
            <div className='invherr-button-group'>
              {/* Botón de Editar */}
              <button className='edit' tabIndex={-1} onClick={() =>{
                //console.log (row)
                setDataRow(row)
                setOpenModalEdit(true)
              }}><i className="fas fa-edit"></i></button>
            </div>
          ),
          fixed: true,
          ignoreRowClick: false, // No permitir hacer clic en la fila para esta columna
         width: '6rem' 
        },
        {
          // Columna de botones
          name: 'Eliminar',
          cell: row => (
            <div className='invherr-button-group'>
              {/* Botón de Eliminar */}
              <button className='eliminar' tabIndex={-1} onClick={() => {
                setDataRow(row)
                setOpenModalDelete(true)
              }}><i className="fas fa-trash"></i> </button>
            </div>
          ),
          fixed: true,
          ignoreRowClick: false, // No permitir hacer clic en la fila para esta columna
          width: '6rem'
        },
    ]


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    

    return (
        <>
            {/* <ModalContainer></ModalContainer> */}
            {openModalEdit && <ModalEditTipo data={dataRow} openThisModal={setOpenModalEdit} showTable={showTiposHerramientas} setShowTable={setShowTiposHerramientas}></ModalEditTipo>}
            {openModalDelete && <ModalDelete id_param={dataRow.id_tipo} nombre_elemento={dataRow.nombre_tipo} showTabla={showTiposHerramientas} setShowTabla={setShowTiposHerramientas} openThisModal={setOpenModalDelete} rutaDelete={url}></ModalDelete>}
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
                onRowClicked={(data) => { console.log(data.id_herramienta) }}  // Manejar clic en la fila
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
                    },/* headCells: {
                        style: {backgroundColor: '#1cac7c',
                            color: '#333',
                            
                          fontSize: '16px',
                          fontWeight: 'bold',
                        },
                      }, */
                }}
            />
        </>
    )



}

export default InvTipHerramientas;