import React, {useContext} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import '../../../styles/css/payment.css';
import axiosClient from '../../../config/axios';
import AuthContext from '../../../context/authentication/authContext';

const Payment = (props) => {
    const {nowPrice, oldPrice, titleBody, titleHeader, discount} = props;
    const authContext = useContext(AuthContext);
    const { usuario } = authContext;
    const makePayment = async token => {
        console.log('entro payment')
        const body = {
            token,
            product: props
        };
        try {
            const response = await axiosClient.post('/api/pagos', body);
            console.log(response);
        } catch (error) {
            console.log(error.message);
        }

    }
    return (
        <div className="containerPayment">
            <div className="header">
            <p className="title">{ titleHeader }</p>
            </div>
            <div className="body">
                <p className="oldPrice">{ oldPrice }$</p>
                <p className="nowPrice">{ nowPrice }$</p>
                <p className="title">{ titleBody } <span className="discount"> { discount }</span></p>
                <StripeCheckout
                    stripeKey={process.env.REACT_APP_STRIPE_KEY}
                    token={makePayment}
                    name="Buy Now"
                    amount={nowPrice * 100}
                >
                    <button className="btnBuy">Buy Now</button>
                </StripeCheckout>
            </div>
        </div>
    )
}

export default Payment;