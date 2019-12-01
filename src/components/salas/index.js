import React from 'react';
import Sala from './sala';
import './../../styles/css/salas.css'
const dataSalas = [
    {
        title: "Alfa",
        id: "001",
        price: "10",
        ganancia: "5",
        img: "./../",
        typeRoom: 'beginner'
    },
    {
        title: "Beta",
        price: "50",
        id: "002",
        ganancia: "25",
        img: "./../",
        typeRoom: 'intermediate'
    },
    {
        title: "Gamma",
        id: "003",
        price: "100",
        ganancia: "50",
        img: "./../",
        typeRoom: 'expert'
    }
]
const Salas = () => {
    return(
        <div className="contianerRooms">
            <h1 className="titleRooms">Escoge tú sala de juego</h1>
            <div className="contentRooms">
                {dataSalas.map((sala,i) => 
                    {
                        return(
                            <Sala {...sala}/>
                        )
                    }
                )}
            </div>
        </div>

    )
}

export default Salas;