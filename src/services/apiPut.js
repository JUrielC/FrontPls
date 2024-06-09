// api.js
import axios from 'axios';

const actualizarDatos = async (url, data) => {
    try {
        const response = await axios.put(url, data, {
            headers: {
                Authorization: localStorage.getItem('token-lab-sistemas')
            }
        });
        return response.data.message.messageText;

    } catch (error) {
        if (error.response.data.message.error_text) {
            return error.response.data.message.error_text 
        }
        else {
            return ('Error al intentar conectarse al servidor');
        }
        // Manejar errores, por ejemplo lanzar una excepción o devolver un mensaje de error
    }
};

export default actualizarDatos;
