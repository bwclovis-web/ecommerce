import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect';
import {auth} from '../../firebase/firebase.config';
import './styles.scss';
import {ReactComponent as Logo} from '../../Assets/crown.svg';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import CartIcon from '../CartIcon';
import CartDropdown from '../CartDropdown';
 
const Header = ({currentUser, isHidden}) => {
    return (
        <div className="header">
            <Link to="/">
                <Logo className="logo" />
            </Link>

            <div className="options">
                <Link className="option" to="shop">
                    Shop
                </Link>
                <Link className="option" to="contact">
                    Contact
                </Link>
                {
                    currentUser ? 
                    <button className="option" onClick={() => auth.signOut()}>
                        Log Out
                    </button>
                    :
                    <Link className="option" to="login">
                        Log In
                    </Link>
                }
                <CartIcon />
            </div>
            {isHidden ? null : <CartDropdown />}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isHidden: selectCartHidden

});
 
export default connect(mapStateToProps)(Header);