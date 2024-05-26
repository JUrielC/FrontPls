import React from 'react'
import './LoginForm.css'
import { useState } from 'react';
import {ApiUrl} from '../../services/apirest'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
//import InicioForm from '../InicioForm/InicioForm';

const LoginForm = ()=>{

    
    const navigate = useNavigate();
    const [form, setForm] = useState({
        nombre_login: '',
        password: ''
    });
    
  const [errorMessage, setErrorMessage] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false);

    const onSubmitHandler = (e)=>{
        e.preventDefault();
        setButtonDisabled(true)
        let url = ApiUrl + "login"
        axios.post(url, form)
        .then(response =>{
            localStorage.setItem('token', response.data.tokenSession)
            /* localStorage.setItem('userData', JSON.stringify(response)) */
            navigate("/inicio")
            window.location.reload()
            //console.log(response)
            //alert('BIen!!!!!!!!!!!!!!!!!!')
        })
        .catch(error=>{
            try{
                
            setErrorMessage(error.response.data.message.error_text)
            }
            catch(e){
                alert("Error al intentar establecer la conexión con el API")
            }
        })
        .finally(()=>{

        setButtonDisabled(false)
        })

    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
     

    return (
        <div className='loginForm-pseudo-body'>
            <div className='loginForm-container'>
            <form action="" className='loginForm-formulario' onSubmit={onSubmitHandler}>
                <h1>Login</h1>
                <div className='input-box'>
                    <input className='loginForm-input' type="text" name='nombre_login' value={form.nombre_login} onChange={handleChange} placeholder='Nombre de usuario' required />
                </div>
                <div className='input-box'>
                    <input className='loginForm-input' type="password" name='password' value={form.password} onChange={handleChange} placeholder='Contraseña' required/>
                </div>
                <button className='loginForm-button-login' type= 'submit' disabled = {buttonDisabled}>Login</button>
                {
                errorMessage && 
                <div role = 'alert'style={{ color: 'red', fontFamily: 'Times New Roman', fontSize: '16px'}}>
                    <p>
                        {errorMessage}
                    </p>
                    
                </div>
                }
            </form>

        </div>
        </div>
        
    )
}

export default LoginForm;