import React from 'react'
import arrayUsers from './../dataLogin/dataLogin'
import Item from './item'
import './../../styles/css/ranking.css'
const Ranking = () => {
    return (
        <div className="ranking">
            <h1 className="ranking__title">Ranking de jugadores</h1>
            <div className="ranking__table table">
                {arrayUsers.map((dataUser, index) => (
                    <Item {...dataUser} index={index}/>
                )) }
            </div>
        </div>
    )
}

export default Ranking;