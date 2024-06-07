import React, { act, useEffect } from "react";
import { useState } from "react";
import useGetWithAuth from '../../Hooks/useGetWithAUTH'
import { ApiUrl } from "../../services/apirest";
import enviarDatos from "../../services/apiPost";
import ModalResponse from "../ModalResponse/ModalResponse";
import './ModalAddPrestamo.css'

const ModalAddPrestamo = ({ setOpenModalPrestamos, showPrestActivos, setShowPrestActivos }) => {

  let url = ApiUrl + "tipo_herramienta/tipos_mas_herramientas/"
  let url_sol = ApiUrl + "solicitantes/"
  let url_carr = ApiUrl + "carreras/"


  const { data, loading, error } = useGetWithAuth(url, null)
  const { data: dataSol, loading: loading_sol, error: error_sol } = useGetWithAuth(url_sol, null)
  const { data: dataCarreras, loading: loadingCarreras, error: errorCarreras } = useGetWithAuth(url_carr, null)
  /* VALORES DE LOS COMBOBOX TIPO Y HERRAMIENTAS DISPONIBLES */
  const [selectedTipo, setSelectedTipo] = useState('');
  const [herramientas, setHerramientas] = useState([]);
  /* ID_ herramienta seleccionada */
  const [idSelected, setIdSelected] = useState('')
  /* Busqueada por numero de control */
  const [controlNomina, setControlNomina] = useState();
  const [nombreEncontrado, setNombreEncontrado] = useState('');
  /* carreras */
  const [selectedCarrera, setSelectedCarrera] = useState('')

  /*Modal para response del backend*/
  const [modalResp, setModalResp] = useState(false)
  const [message, setMessage] = useState('')

  /* Formulario */

  const [form, setForm] = useState({
    id_herramienta: '',
    id_carrera: '',
    id_solicitante: '',
    observaciones: ''
  })


  useEffect(() => {

    setForm((prevForm) => ({
      ...prevForm,
      id_herramienta: idSelected,
      id_carrera: selectedCarrera
    }));
  }, [idSelected, selectedCarrera])

  useEffect(() => {
    if (loading || error || !data) {
      return;
    }
    /* CARGAR COMOBOX */

  }, [data])

  useEffect(() => {
    if (loadingCarreras || errorCarreras || !dataCarreras) {
      return;
    }

    setSelectedCarrera(dataCarreras[0].id_carrera)

  }, [dataCarreras])

  useEffect(() => {
    if (loading_sol || error_sol || !dataSol) {
      return;
    }

    setNombreEncontrado('')


  }, [dataSol])



  /* ACTUALIZAR CBOX DE IDE HERRAMIENTA CON EL CAMBIO DE TIPO */
  const handleTipoChange = (event) => {
    const selectedId = event.target.value;
    setSelectedTipo(selectedId);

    const selectedTipoData = data.find(item => item.id_tipo === parseInt(selectedId));

    if (selectedTipoData) {
      setIdSelected('')
      setHerramientas(JSON.parse(selectedTipoData.herramientas));
    } else {
      setHerramientas([]);
    }
  };

  const handleChangeCtrlNomina = (event) => {
    const valorInput = event.target.value;
    setControlNomina(valorInput);

    if (valorInput.trim() === "") {
      setNombreEncontrado('')
      setForm((prevForm) => ({
        ...prevForm,
        id_solicitante: ''
      }));
    }
    else {
      // Buscar si el número de control ingresado coincide con algún control_nomina en los datos
      const encontrado = dataSol.find(item => item.control_nomina === valorInput);
      if (encontrado) {
        setNombreEncontrado("Usuario encontrado: " + encontrado.nombre + " " + encontrado.apellido_paterno + " " + encontrado.apellido_materno);
        setForm((prevForm) => ({
          ...prevForm,
          id_solicitante: encontrado.id_solicitante
        }));
      } else {
        setNombreEncontrado('Usuario no encontrado');
        setForm((prevForm) => ({
          ...prevForm,
          id_solicitante: ''
        }));
      }

    }



  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (loading_sol) return <p>Loading...</p>;
  if (error_sol) return <p>Error: {error}</p>;
  if (loadingCarreras) return <p>Loading...</p>;
  if (errorCarreras) return <p>Error: {error}</p>;

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="form-container">
          <h2>Registrar Préstamo</h2>
          <div className="row">
            <div className="input-group">

              {modalResp && <ModalResponse setModalResp={setModalResp} message={message} setOpenModalActual={setOpenModalPrestamos}></ModalResponse>}
              <label htmlFor="tipo">Tipo de herramienta(solo disponibles):</label>
              <select id="tipo" className="selectric" onChange={handleTipoChange}>
                <option value="">Seleccionar</option>

                {data.map(item => (
                  <option key={item.id_tipo} value={item.id_tipo}>{item.nombre_tipo}</option>
                ))}

              </select>

            </div>
            <div className="input-group">
              <label htmlFor="id-herramienta">ID Herramienta(solo disponibles):</label>
              <select id="id-herramienta" className="selectric" onChange={(e) => {
                setIdSelected(e.target.value)
              }}>
                <option value="">Seleccionar</option>
                {herramientas.map(herramienta => (
                  <option key={herramienta} value={herramienta}>{herramienta}</option>
                ))}
              </select>

            </div>
          </div>
          <div className="row">
            <div className="input-group">
              <label htmlFor="solicita">Solicita:</label>
              <input type="text" id="solicita" className="selectric" autoComplete="off" placeholder='No. de control o nómina' onChange={handleChangeCtrlNomina} />
            </div>
            <div className="input-group">
              <label htmlFor="carrera">Carrera:</label>
              <select id="carrera" className="selectric" onChange={
                (e) => {
                  setSelectedCarrera(e.target.value)
                }
              }>

                {dataCarreras.map(item => (
                  <option key={item.id_carrera} value={item.id_carrera}>{item.nombre_carrera}</option>
                ))}

              </select>
            </div>
          </div>


          <div className="row justify-content-center">
            <div className="col-auto">
              <p></p>
              <p className="text-center"> {nombreEncontrado} </p>
            </div>
          </div>


          <div className="input-group">
            <label htmlFor="observaciones">Observaciones:</label>
            <textarea id="observaciones" rows="5" placeholder=" Opcional..." maxLength="255" onChange={(e) => {
              const newValue = e.target.value;
              setForm((prevForm) => ({
                ...prevForm,
                observaciones: newValue
              }));
            }}></textarea>
          </div>
          <div className="button-group">
            <button type="submit" id="submit-btn" onClick={
              async () => {

                if (form.id_carrera !== null && form.id_carrera !== undefined && form.id_herramienta !== "" && form.id_solicitante !== "") {

                  console.log(form)
                  const ruta = ApiUrl + "prestamos"
                  const response = await enviarDatos(ruta, form)
                  setModalResp(true)
                  setMessage(response)

                }
                else {
                  console.log("verifique los datos")
                  setModalResp(true)
                  setMessage('Ingrese valores válidos')

                }

                /*  */
              }
            }>Enviar</button>

            <button type="button" id="cancel-btn" onClick={() => { 
              setOpenModalPrestamos(false) 
              if (showPrestActivos) {
                setShowPrestActivos(false);
                setTimeout(() => setShowPrestActivos(true), 0);
              }
               }}>Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  )

}

export default ModalAddPrestamo;