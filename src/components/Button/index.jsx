import React from 'react';

import './styles.scss';
 
const Button = ({children, isGoogleSignin, ...props}) => {
    return (
        <button className={`${isGoogleSignin ? 'google-signin' : ''} custom-button`} {...props}>
            {children}
        </button>
    );
}
 
export default Button;