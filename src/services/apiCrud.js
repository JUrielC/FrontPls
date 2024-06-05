import React from "react";
import axios from "axios";

function getWithAuth(url, setData, setRecords){
    axios.get(url, {
        headers:{
            'Authorization': localStorage.getItem('token')
        }
    })
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
}

module.exports = {
    getWithAuth
}