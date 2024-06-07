// src/hooks/useFetchWithAuth.js

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useGetWithAuth = (url, setRecords) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url, {
                    headers: {
                        'Authorization': localStorage.getItem('token')
                    }
                });
                setData(response.data);
                //console.log(data)
                if (setRecords) {
                    setRecords(response.data)
                }
            } catch (err) {
                if (err.response && err.response.data && err.response.data.message) {
                    if (err.response.data.message.status === 401) {
                        localStorage.clear()
                        navigate('/login')
                    }
                    /* alert(err.response.data.message.error_text) */;
                    setError(err.response.data.message.error_text)

                } else {
                    // alert("Error al intentar establecer la conexión con el servidor");
                    setError("Error al intentar establecer la conexión con el servidor");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useGetWithAuth;