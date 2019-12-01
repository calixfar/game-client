import React from 'react';
import Coin from './../coin'
import './../../styles/css/header.css'
import {withRouter} from 'react-router-dom'
import dataLogin from './../dataLogin/dataLogin'
const Header = ({user, history, logout}) => {
    console.log(user, 'usuario')
    let userName = user;
    if(history.location.pathname === '/rooms') userName = localStorage.getItem('dataUser')
    if(userName === '') {
        return(
            <header className="containerHeader">
                <ul className="menuHeader">
                    <li className="containerLogo">Logo</li>
                </ul>
            </header>
        )
    }
    else {
        let infoUser = dataLogin.find(element => element.user === userName)
        const {user, name, coin} = infoUser;
        console.log('infoUser', infoUser)
        return(
            <header className="containerHeader">
                <ul className="menuHeader">
                    <li className="containerLogo">Logo</li>
                    <li className="containerNameUser">
                        <img alt="AVATAR" src="/arquivos/robotPrincipiante.png"/> 
                        {name}
                    </li>
                    <li className="headerContainerCoin">Coin: <Coin number={coin}/></li>
                    <li className="btnLogOut" onClick={() => {
                        let confirmAlert = window.confirm('¿Desea cerrar la sesión?');
                        logout()
                        if(confirmAlert) history.push('/')
                    }}>
                        <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 9.408l2.963 2.592-2.963 2.592v-1.592h-8v-2h8v-1.592zm-2-4.408v4h-8v6h8v4l8-7-8-7zm6-3c-1.787 0-3.46.474-4.911 1.295l.228.2 1.396 1.221c1.004-.456 2.114-.716 3.287-.716 4.411 0 8 3.589 8 8s-3.589 8-8 8c-1.173 0-2.283-.26-3.288-.715l-1.396 1.221-.228.2c1.452.82 3.125 1.294 4.912 1.294 5.522 0 10-4.477 10-10s-4.478-10-10-10z"/></svg>
                    </li>
                </ul>
            </header>
        )
        
    }
}

export default withRouter(Header);