import React, {useState, useContext, useEffect} from 'react'
import './../../styles/css/login.css'
import {withRouter} from 'react-router-dom'
import AuthContext from '../../context/authentication/authContext';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const Login = ({history}) => {   

    const authContext = useContext(AuthContext);
    
    const {msg, auth, loginUser} = authContext;

    useEffect(() => {
        if(auth) {
            history.push('/rooms');
        }
        if(msg !== null) {
            setError(true);
            setTimeout(() => {
                setError(false)
            }, 3000);
        }
    }, [msg, auth, history]);

    const [state, setState] = useState({
        email: '',
        password: ''
    });
    const {email, password} = state;
    const [error, setError] = useState(false);
    const changeState = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const handlerBtnLogin = (e) => {
        e.preventDefault();
        if(email.trim() === '' || password.trim() === '') {
            setError(true);
            setTimeout(() => {
                setError(false)
            }, 3000);
        }
        loginUser({email, password});

    }

    
    let colorTextEror = error === true ? '#DA4F49' :  '#5AB75B';
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <div className="containerLogin">
            <div className="colImg">
                <Slider className="slider" {...settings}>
                    <div className="contianerImgSlider">
                        <img className="imgSlider" src="/arquivos/trading1.jpg"/>
                    </div>
                    <div className="contianerImgSlider">
                        <img className="imgSlider" src="/arquivos/trading2.jpg"/>
                    </div>
                </Slider>
            </div>
            <div className="colForm">
                <form className="form"> 
                    <div className="containerDesc">
                        <p className="textBold">Ingresa a tu cuenta</p>
                        <p className="textNormal">Multiplica tus ingresos con solo hacer parte de la comunidad ERP</p>
                    </div>
                    <div className="groupInput">
                        {/* <label>Usuario</label> */}
                        <input onChange={changeState} name="email" type="text" placeholder="Email" required/>
                    </div>
                    <div className="groupInput">
                        {/* <label>Usuario</label> */}
                        <input onChange={changeState} name="password" type="password" placeholder="Contraseña" required/>
                    </div>
                    <div className="groupBtnSig">
                        <button onClick={handlerBtnLogin} type="button">Entrar</button>
                        <p style={{color: colorTextEror}} className={`textError ${error === true ? 'showTextError': ''}`}>{msg}</p> 
                        <Link to="/register">Registrarme</Link>
                        
                    </div>
                </form>
            </div>
        </div>
    )
}

export default withRouter(Login);