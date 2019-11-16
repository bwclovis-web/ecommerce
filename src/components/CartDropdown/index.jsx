import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Button from '../Button';
import CartItem from '../CartItem';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import './styles.scss';
 
const Cart = ({cartItems, history, dispatch}) => {
    return (
        <div className='cart-dropdown'>
            <div className="cart-items">
                {
                    cartItems.length ?
                    cartItems.map(item => <CartItem key={item.id} item={item} />)
                    :
                    <span className="empty-message">EMPTY YO</span>
                }
            </div>
            <Button onClick={() => {
                history.push('/checkout')
                dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</Button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});
 
export default withRouter(connect(mapStateToProps)(Cart));