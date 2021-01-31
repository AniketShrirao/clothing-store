import React from 'react';
import { connect } from 'react-redux';

import {createStructuredSelector} from 'reselect';
import {selectCartItems } from '../../redux/cart/cart.selectors';
import {toggleCartHidden } from '../../redux/cart/cart.action';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.components';

import {withRouter} from 'react-router-dom';
import './cart-dropdown.style.scss';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items' id='style-2'>
            {
                cartItems.length ? (
                    cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>
                    ))
                ) : (
                    <div className='empty-message'>
                        <span className='empty' >Your cart is empty !</span>
                        <span>Please add items to Proceed</span>
                    </div>
                )
            }
        </div>
            <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}>
            GO TO CHECKOUT
            </CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown)) ;