import React from 'react'
import Coin from './../../coin'

const contentPlace = (index) => {
    if(index === 0){
        return <img src="/arquivos/placeOne.png"/>
    }
    return index + 1;
}
const Item = ({id, name, coin, country, index}) => {
    return (
        <div key={ id } className="table__item item">
            <div className="item__index item__col">{ contentPlace(index) }</div>
            <div className="item__image item__col"> <img/> </div>
            <div className="item__name item__col"> {name} </div>
            <div className="item__country item__col"> <img src={`/arquivos/flags/${country.toLowerCase()}.jpg`} /> {country} </div>
            <div className="item__coin item__col"> <Coin number={ coin }/> </div>
        </div>
    )
}

export default Item;