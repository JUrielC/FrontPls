import DataTable from 'react-data-table-component'
import { ApiUrl } from '../../services/apirest'
import { useEffect, useState } from 'react';
import useGetWithAuth from '../../Hooks/useGetWithAUTH';
import actualizarDatos from '../../services/apiPut';
import ModalEditUsuario from '../ModalesInfoTabla/ModalEditUsuario';
import ModalResetPass from '../ModalResetPass/ModalResetPass';
import ModInfoTablaGeneric from '../ModalesInfoTabla/ModalInfoTablaGeneric';
import './Usuarios.css'



const Usuarios = ({ filterSearch, showUsuarios, setShowUsuarios }) => {

    const [records, setRecords] = useState([])
    let url = ApiUrl + "usuarios/"

    const [dataRow, setDataRow] = useState(null)
    const [openModalEdit, setOpenModalEdit] = useState(false)

    const [openModalresetPass, setOpenModalResetPass] = useState(false)
    const [showInfo, setShowInfo] = useState(false)

    const { data, loading, error } = useGetWithAuth(url, setRecords)


    useEffect(() => {
        if (loading || error || !data) {
            return;
        }

        const newFilteredData = data.filter(
            item => {
                const matchSearched = item.nombre_usuario && item.nombre_usuario.toLowerCase().includes(filterSearch.toLowerCase())
                return matchSearched 
            }

        )

        setRecords(newFilteredData)




    }, [data, loading, error, filterSearch])

    /* COLUMNAS DE LA TABLA */
    const columns = [
        {
            name: "ID",
            selector: row => row.id_usuario,
            sortable: true
        }, 
        {
            name: "Nombre(s)",
            selector: row => row.nombre_usuario,
            sortable: true,
        }, {
            name: "Apellido 1",
            selector: row => row.apellido_paterno,
            sortable: true,
        }, 
        {
            name: "Apellido 2",
            selector: row => row.apellido_materno,
            sortable: true,
        },
        {
            name: "Usuario",
            selector: row => row.nombre_login,
            sortable: true,
        },
        {
            name: "Rol",
            selector: row => row.nombre_rol,
            sortable: true,

        },
        {
            name: "Activo",
            selector: row => row.estatus_activo ? "Sí" : "No",
            sortable: true,
        }, 
        {
          // Columna de botones
          name: 'Editar',
          cell: row => (
            <div className='invherr-user-button-group'>
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
          name: 'Activar',
          cell: row => (
            <div className='invherr-user-button-group'>
              {/* Botón de Eliminar */}
              <button className='eliminar' tabIndex={-1} onClick={async() => {
                setDataRow(row)

                const ruta = url + "estatus_activo"
                const response = await actualizarDatos(ruta,{id_usuario: row.id_usuario})
                alert (response)

                if(showUsuarios){
                    setShowUsuarios(false)
                    setTimeout(()=>{setShowUsuarios(true)})
                }

              }}> {row.estatus_activo ? "Desactivar" : "Activar"}</button>
            </div>
          ),
          fixed: true,
          ignoreRowClick: false, // No permitir hacer clic en la fila para esta columna
          width: '6rem'
        },{
            // Columna de botones
            name: 'Reset Password',
            cell: row => (
              <div className='invherr-user-button-group'>
                {/* Botón de Eliminar */}
                <button className='rest-pass' tabIndex={-1} onClick={async() => {
                 setDataRow(row)
                 setOpenModalResetPass(true)
  
                }}><i className="fas fa-key"></i></button>
              </div>
            ),
            fixed: true,
            ignoreRowClick: false, // No permitir hacer clic en la fila para esta columna
            width: '6rem'
          },
    ]


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const titles = {
        id_usuario: "ID usuario",
        nombre_usuario: "Nombre",
        apellido_paterno: "Apellido 1",
        apellido_materno: "Apellido 2",
        nombre_login: "Nombre de usuario",
        estatus_activo: "Estatus activo"
    }

    return (
        <>
            {showInfo && <ModInfoTablaGeneric data={dataRow} titles={titles} setOpenModalInf={setShowInfo} tableUsuarios={true} />}
            {openModalresetPass && <ModalResetPass data={dataRow} showTabla={showUsuarios} setShowTabla={setShowUsuarios} openThisModal={setOpenModalResetPass}/>}
            { openModalEdit && <ModalEditUsuario data ={dataRow} openThisModal={setOpenModalEdit} showUsuarios={showUsuarios} setShowUsuarios={setShowUsuarios}/>}
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
                onRowClicked={(data) => { setDataRow(data); setShowInfo(true) }}  // Manejar clic en la fila
                highlightOnHover  // Resaltar la fila al pasar el ratón por encima
                pointerOnHover    // Mostrar puntero al pasar el ratón por encima
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

export default Usuarios;