import Reactfrom 'react';
// import socketIOClient from "socket.io-client";

import InRoom from '../ContentInRoom';

const WrapperInRoom = () => {
    // const [data, setData] = useState({});
    // useEffect(() => {
    //     console.log('entro effect')
    //     const socket = socketIOClient('https://winfast-backend.herokuapp.com/',  {transports: ['websocket']});
    //     socket.on("message", data => {
    //         console.log('entro socket', data)
    //         setData({ response: data });
    //     });
    // })
    return (
        <div>
            <InRoom/>
        </div>
    );
}

export default WrapperInRoom;