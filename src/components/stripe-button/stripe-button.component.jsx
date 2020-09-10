import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HPq5lJdYEZBmwFiYmwmHx5h0n2MXEzEtb7bdJspVq0WLBig4vS0ADpEo4yBrI2ecEw2pydxopoAEXCSIU1FlOi5006aJXkjlo';
    const onToken = token => {
        console.log(token);
        alert('Payment success');
    }

    return(
        <StripeCheckout
             lable='Pay Now'
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
}

export default StripeCheckoutButton;