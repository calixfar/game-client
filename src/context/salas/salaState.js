import React, { useReducer } from 'react';
import SalaContext from './salaContext';
import SalaReducer from './salaReducer';
import axiosClient from '../../config/axios';
import {
    INGRESAR_USUARIO
} from '../../types/salas';

const SalaState = ({ children }) => {
    const initialState = {
        nombre: ''
    }
}