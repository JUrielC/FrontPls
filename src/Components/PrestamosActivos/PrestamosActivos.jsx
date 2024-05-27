import DataTable from 'react-data-table-component'
import {ApiUrl} from '../../services/apirest'
import axios from 'axios'
//import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './PrestamosActivos.css'
//import { response } from 'express';

const PrestamosActivos = () =>{
    
    const [data,setData] = useState([]); 
    const [loading, setLoading] = useState(true); 
    let url = ApiUrl + "prestamos/prestamos_activos"  
    const columns = [
                {
                    name: "ID Préstamo",
                    selector: row => row.id_prestamo,
                    sortable: true
                },
                {
                    name: "Solicitante",
                    selector: row => row.solicitante,
                    sortable: true
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
    
    useEffect(() => {
        axios.get(url)
          .then(response => {
            setData(response.data);
          })
          .catch(error => {
            try {
              alert(error.response.data.message.error_text);
            } catch (e) {
              alert("Error al intentar establecer la conexión con el servidor")
            }
          })
          .finally(()=>{
            setLoading(false);
          })
          
      }, [url]);

    return(
        <>  
            <p></p>
                <DataTable
                columns={columns}
                data={data}
                pagination
                persistTableHead={true}
                paginationPerPage={6}
                selectableRows
                progressPending={loading}
                progressComponent={
                    <div id = 'spinner'></div>
                }
                />
        </>
    )



}

export default PrestamosActivos;