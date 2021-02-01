import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IG0cDE1Deg4TbqoZEY0iYmPCP2diUttuEnWpTFn3MwXL8XiMx2fveZ2VrhL5mCWFpL8HXGgRX8GW6k1vzREbG3L00EccfVeYi';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="Clothing Store Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/Tf9.svg"
            description={`Your Total is ₹${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;