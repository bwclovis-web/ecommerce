import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
 
const StripeButton = ({price}) => {
    const priceToCents = price * 100;
    const publicKey = 'pk_test_lmqiYqTM1DlPuqmcSxnyXmiN00z5NOODSp';

    const onToken = token => {
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
            label='pay now'
            name= 'Crwn Clth'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceToCents}
            panelLabel='pay now'
            token={onToken}
            stripeKey={publicKey}
        />
    );
}
 
export default StripeButton;