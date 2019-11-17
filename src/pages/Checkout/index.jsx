import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors'
import './styles.scss';

import CheckoutItem from '../../components/CheckoutItem';
import StripeButton from '../../components/StripeButton';
 
const CheckoutPage = ({cartItems, total}) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(item =>
                    <CheckoutItem key={item.id} cartItem={item} />
                )
            }
            <div className="total">
                <span>TOTAL: ${total}</span>
            </div>
            <div className="test-warning">
                Test data: 4242 4242 4242 4242 | EXP: 01/20 | CVW: 123
            </div>
            <StripeButton price={total} />
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})
 
export default connect(mapStateToProps)(CheckoutPage);