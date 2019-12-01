import React from 'react';
import Coin from './../../coin'
import './../../../styles/css/sala.css'

const setWidthImage = (typeRoom) => {
    switch (typeRoom) {
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
const Sala = ({title, price, ganancia, img, id, typeRoom}) => {

    console.log(title, price, ganancia, img, id)
    return(
        <div key={id} className="containerSala">
            <div className="containerRadioButton">
                <div className="radioButton">
                    <svg fill="#fff" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"/></svg>
                </div>
            </div>
            <div className="containerTitleImg">
                <p className="title">{title}</p>
                <div className="containerImg">
                    <img style={{width: setWidthImage(typeRoom)}} alt="Logo" src="/arquivos/corona.png"/>
                </div>
            </div>
            <div className="containerInfoRoom">
                <div className="containerHeaderRoom">
                    <p className="price">Valor: <Coin number={price}/></p>
                </div>
                <div className="infoRow">
                    <div className="containerGain">
                        Ganancia: <Coin number={ganancia}/>
                    </div>
                    <div className="containerButton">
                        <div onClick={() => {
                            alert('Desea ingresar a esta sala?')
                        }} className="buttonEntrar">Entrar</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sala;