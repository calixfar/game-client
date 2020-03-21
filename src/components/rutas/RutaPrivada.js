import React, { useContext, useEffect } from 'react';
import {Route, Redirect} from 'react-router-dom';
import AuthContext from '../../context/authentication/authContext';

const RutaPrivada = ({component: Component, ...props}) => {
    console.log(Component, props);
    const authContext = useContext(AuthContext);

    const { auth, userAuth, loading } = authContext;

    useEffect(() => {
        userAuth();
    }, [])
    return(
        <Route
            {...props}
            render={props => !auth && !loading ? (
                <Redirect to="/"/>
            ) : (
                <Component {...props}/>
            ) }
        />
    );
}

export default RutaPrivada;
