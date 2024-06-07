import DataTable from 'react-data-table-component'
import { ApiUrl } from '../../services/apirest'
import axios from 'axios'
import { useEffect, useState } from 'react';
import useGetWithAuth from '../../Hooks/useGetWithAUTH';
import ModalContainer from '../ModalesInfoTabla/ModalContainer'



const Usuarios = ({ filterSearch }) => {

    const [records, setRecords] = useState([])
    let url = ApiUrl + "usuarios"


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
            name: "Rol",
            selector: row => row.nombre_rol,
            sortable: true,

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
            name: "Activo",
            selector: row => row.estatus_activo ? "Sí" : "No",
            sortable: true,
        }   
    ]


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    

    return (
        <>
            {/* <ModalContainer></ModalContainer> */}
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