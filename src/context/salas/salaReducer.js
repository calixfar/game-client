import {
    INGRESAR_USUARIO
} from '../../types/salas';

export default (state, action) => {
    switch (action.type) {
        case INGRESAR_USUARIO:
            return {
                ...state
            }
            break;
        default:
            return state;
            break;
    }
}