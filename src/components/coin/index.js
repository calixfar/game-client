import React from 'react';
import  './../../styles/css/coin.css'
const Coin = ({number}) => {
    return(
        <div className="containerCoin">
            <div className="textCoin"> 
                {number}
            </div>
        </div>
    )
}

export default Coin;