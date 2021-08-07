import React from 'react';
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = '\t\n' +
        '\n' +
        'pk_test_51JLoz3JfwYTENKqwZM74mxqKxdsBOVwLmyl1Lp2PDo2mFUNS0HhsKdE7s46rSzmvl4sAAxi7aXOcXCnSkd5Wp7vM00xpbOrqh1';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;