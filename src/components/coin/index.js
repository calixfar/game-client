import React from 'react';
import  './../../styles/css/coin.css'
const Coin = ({number}) => {
    return(
        <div className="containerCoin">
            <p className="textCoin"> 
                {number}
            </p>
        </div>
    )
}

export default Coin;