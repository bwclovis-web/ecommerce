import React from 'react';
import {Link} from 'react-router-dom';

import './styles.scss';

import {ReactComponent as Logo} from '../../Assets/crown.svg'
 
const Header = () => {
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
                <Link className="option" to="login">
                    Log In
                </Link>
            </div>
        </div>
    );
}
 
export default Header;