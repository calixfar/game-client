import React, { useContext } from 'react';
import Coin from './../../coin'
import './../../../styles/css/sala.css';
import authContext from '../../../context/authentication/authContext';
import clientAxios from '../../../config/axios';

const setWidthImage = (type) => {
    switch (type) {
        case 'beginner': {
            return '60%';
        }
        case 'intermediate': {
            return '70%';
        }
        case 'expert': {
            return '80%';
        }
    }

}

const Sala = ({nombre,valor, ganancia, type, _id}) => {

    const context = useContext(authContext);
    const {userAuth} = context;
    const enterInRoom = async (idRoom) => {
        const response = await clientAxios.put('/api/salas/agregar-usuario', {id: idRoom});
        console.log(response);
        if(!response.data.status) {
            const { message } = response.data.error;
            window.alert(message);
        } else {
            window.alert('Registro exitoso');
            userAuth();
    
        }
    
    }
    return(
        <div  className="containerSala">
            <div className="containerRadioButton">
                <div className="radioButton">
                    <svg fill="#fff" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"/></svg>
                </div>
            </div>
            <div className="containerTitleImg">
                <p className="title">{nombre}</p>
                <div className="containerImg">
                    <img style={{width: setWidthImage(type)}} alt="Logo" src="/arquivos/corona.png"/>
                </div>
            </div>
            <div className="containerInfoRoom">
                <div className="containerHeaderRoom">
                    <div className="price">Valor: <Coin number={valor}/></div>
                </div>
                <div className="infoRow">
                    <div className="containerGain">
                        Ganancia: <Coin number={ganancia}/>
                    </div>
                    <div className="containerButton">
                        <div onClick={() => enterInRoom(_id)} className="buttonEntrar">Entrar</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sala;