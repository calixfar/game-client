import React, {useContext, useState, useEffect} from 'react';
import AuthContext from '../../context/authentication/authContext';
import {withRouter} from 'react-router-dom';
import '../../styles/css/register.css';

const RegisterUser = (props) => {

    const [usuario, setUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        pais: ''
    });
    const authContext = useContext(AuthContext);

    const { msg, auth, registerUser } = authContext;

    useEffect(() => {
        if(auth) {
            props.history.push('/rooms');
        }
    }, [msg, auth, props.history])

    const onChange = e => setUsuario({
        ...usuario,
        [e.target.name]: e.target.value
    })

    const onSubmit = e => {
        e.preventDefault();
        registerUser({...usuario});
    }
    return(
        <div className="containerRegister">
            <form className="formRegister" onSubmit={onSubmit}>
                <h1 className="formTitle">FORMULARIO DE REGISTRO</h1>
                <div className="groupInput">
                    <label className="labelInput">Nombre</label>
                    <input className="inputText" onChange={onChange} type="text" name="nombre"/>
                </div>
                <div className="groupInput">
                    <label className="labelInput">Pais</label>
                    <select className="inputSelect" onChange={onChange} name="pais">
                        <option>Colombia</option>
                        <option>Argentina</option>
                        <option>Estados Unidos</option>
                        <option>Australia</option>
                    </select>
                </div>
                <div className="groupInput">
                    <label className="labelInput">Email</label>
                    <input className="inputText" onChange={onChange} type="text" name="email"/>
                </div>
                <div className="groupInput">
                    <label className="labelInput">Contraseña</label>
                    <input className="inputText" onChange={onChange} type="password" name="password"/>
                </div>
                <div className="groupInput">
                    <input className="inputCheck"  type="checkbox" name="checkbox"/>
                    <label className="labelInput">Acepto terminos condiciones</label>
                </div>
                <div className="groupInput">
                    <button className="inputSubmit" type="submit">Crear cuenta</button>
                </div>
            </form>
        </div>
    )
}

export default withRouter(RegisterUser);