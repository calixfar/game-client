import React, {useState, useEffect} from 'react';
import socketIOClient from "socket.io-client";

import InRoom from '../ContentInRoom';

const WrapperInRoom = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        console.log('entro effect')
        const socket = socketIOClient('http://localhost:4000',  {transports: ['websocket']});
        socket.on("message", data => {
            console.log('entro socket', data)
            setData({ response: data });
        });
    })
    return (
        <div>
            <InRoom/>
        </div>
    );
}

export default WrapperInRoom;