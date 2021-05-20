import React from 'react';
import { connect } from 'react-redux';

import {createStructuredSelector} from 'reselect';
import {selectCartItems } from '../../redux/cart/cart.selectors';
import {toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import CartItem from '../cart-item/cart-item.component';

import {withRouter} from 'react-router-dom';

import {
    CartDropdownContainer,
    CartDropdownButton,
    EmptyMessageContainer,
    EmptyContainer,
    CartItemsContainer
  } from './cart-dropdown.style';

const CartDropdown = ({currentUser, cartItems, history, dispatch}) => (

<CartDropdownContainer>
    <CartItemsContainer>
        {cartItems.length ? (
        cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
        ))
        ) : (
        <EmptyMessageContainer>
            <EmptyContainer>Your cart is empty</EmptyContainer>
            <span>Please add items to Proceed</span>
        </EmptyMessageContainer>
        )}
    </CartItemsContainer>
    { currentUser ? (<CartDropdownButton
        onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
        }}>
        GO TO CHECKOUT
    </CartDropdownButton>
    ) : (
    <CartDropdownButton 
        onClick= {() => {
            history.push('/signin');
            dispatch(toggleCartHidden());
        }}> 
        SIGN IN
    </CartDropdownButton>
    )}
</CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown)) ;