import React, {useState, useEffect} from 'react'
import styles from  './../../styles/css/login.css'
import dataLogin from './../dataLogin/dataLogin'
import {withRouter} from 'react-router-dom'


const Login = ({history, refetchUser}) => {   
    const [user, setUser] = useState('')
    const [password, setPassword ] = useState('')
    const [error, setError ] = useState('')

    useEffect( () => {
        window.addEventListener('load', () => {
            localStorage.removeItem('dataUser')
        })
    })

    const changeState = (e) => {
        const {name, value} = e.target
        console.log(name, value)
        switch(name){
            case 'user' : {
                setUser(value)
            }
            case 'password' : {
                setPassword(value)
            }
        }
    }
    const verifyUser = () => {
        let verify = false;
        for(let i = 0; i < dataLogin.length; i++){
            if(dataLogin[i].user === user ) {
                if(dataLogin[i].password === password){
                    verify = true;
                    localStorage.setItem('dataUser', dataLogin[i].user)

                }
            }
        }
        return verify;
    }
    const handlerBtnLogin = () => {
        console.log(verifyUser())
        if(verifyUser()){
            setError('true')
            setTimeout(() => {
                refetchUser()
                history.push('/rooms')
            }, 1500)
        } else {
            setError('false')
        }

    }
    console.log(dataLogin)
    let colorTextEror = error === 'false' ? '#DA4F49' :  '#5AB75B';
    let textError = error === 'false' ? 'Usuario o contraseña incorrecto' :  'Inicio de sesión exitoso!';
    return(
        <div className="containerLogin">
            <div className="colImg">
                <div className="img">

                </div>
            </div>
            <div className="colForm">
                <form className="form"> 
                    <div className="containerDesc">
                        <p className="textBold">Ingresa a tu cuenta</p>
                        <p className="textNormal">Multiplica tus ingresos con solo hacer parte de la comunidad ERP</p>
                    </div>
                    <div className="groupInput">
                        {/* <label>Usuario</label> */}
                        <input onChange={(e) => changeState(e)} name="user" type="text" placeholder="Usuario" requuired/>
                    </div>
                    <div className="groupInput">
                        {/* <label>Usuario</label> */}
                        <input onChange={(e) => changeState(e)} name="password" type="password" placeholder="Contraseña" requuired/>
                    </div>
                    <div className="groupBtnSig">
                        <button onClick={() => handlerBtnLogin()} type="button">Entrar</button>
                        <p style={{color: colorTextEror}} className={`textError ${error !== '' ? 'showTextError': ''}`}>{textError}</p> 
                            
                        <a href="/">Registrarme</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default withRouter(Login);