import React from 'react';
import Payment from './payment';
import '../../styles/css/payments.css'
const Payments = () => {

    const dataPayments = [
        {
            id: "001",
            titleHeader: "Enter a different World ",
            titleBody: "Enjoy a discount of",
            oldPrice: 11,
            nowPrice: 10,
            discount: "10%"
        },
        {
            id: "002",
            titleHeader: "Buy Opera today And win",
            titleBody: "Enjoy a discount of",
            oldPrice: 24,            
            nowPrice: 20,
            discount: "17%"
        },
        {
            id: "003",
            titleHeader: "The best that money can buy",
            titleBody: "Enjoy a discount of",
            oldPrice: 63,
            nowPrice: 50,
            discount: "20%"
        },
        {
            id: "004",
            titleHeader: "For those who like the trade rough",
            titleBody: "Enjoy a discount of",
            oldPrice: 135,
            nowPrice: 100,
            discount: "26%"
        },
    ]

    return (
        <div className="containerPayments">
            <h1 className="generalTitle">Top up everything you can</h1>
            <div className="contentPayments">
                { dataPayments.map((payment) => (
                    <Payment { ...payment } />
                ))}
            </div>
        </div>
    )
}

export default Payments;