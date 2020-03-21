import React, {useContext, useEffect, useState} from 'react';
import Sala from './sala';
import './../../styles/css/salas.css'
import AuthContext from '../../context/authentication/authContext';
import axiosClient from '../../config/axios';
const Salas = () => {

    const authContex = useContext(AuthContext);
    const {userAuth} = authContex;
    const [salas, setSalas] = useState([]);

    useEffect( () => {
        const getSalas = async (req, res) => {
            const searchSalas = await axiosClient.get('/api/salas');
            setSalas(searchSalas.data.salas);
        }
        getSalas();
        userAuth();
    }, [])
    return(
        <div className="contianerRooms">
            <h1 className="titleRooms">Escoge tú sala de juego</h1>
            <div className="contentRooms">
                {salas.map((sala, i) => 
                    {
                        return(
                            <Sala key={sala._id + i} {...sala}/>
                        )
                    }
                )}
            </div>
        </div>

    )
}

export default Salas;