import axios from 'axios';

const eliminarDatos = async (url) => {
    try {
        // Obtener el token de autorización de localStorage
        const token = localStorage.getItem('token');

        // Realizar la solicitud con los headers adecuados
        const response = await axios.delete(url, {
            headers: {
                Authorization: token
            }
        });

        // Devolver el mensaje de éxito proporcionado por el servidor
        return {
            message: response.data.message.messageText,
            ok: true
        }

    } catch (error) {
        // Manejar errores
        if (error.response && error.response.data && error.response.data.message && error.response.data.message.error_text) {
            // Si el servidor devuelve un mensaje de error, devolverlo
            return  {
                message: error.response.data.message.error_text,
                ok: false
            }
        } else {
            // Si no hay un mensaje de error específico del servidor, devolver un mensaje genérico
            return  {
                message:  'Error al intentar conectarse al servidor',
                ok: false
            }
        }
    }
};

export default eliminarDatos;
