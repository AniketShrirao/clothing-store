import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { WarningContainer } from '../../pages/checkout/checkout.style';

const StripeCheckoutButton = ({price,clearItem,cartItems}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IG0cDE1Deg4TbqoZEY0iYmPCP2diUttuEnWpTFn3MwXL8XiMx2fveZ2VrhL5mCWFpL8HXGgRX8GW6k1vzREbG3L00EccfVeYi';

    const onToken = token => {
        // eslint-disable-next-line array-callback-return
        cartItems.map(cartItem => {clearItem(cartItem)});
        return (
       <WarningContainer>
        *Thank You For Shopping*
      </WarningContainer>
        );
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