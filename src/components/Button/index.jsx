import React from 'react';
import classNames from 'classnames';

import './styles.scss';
 
const Button = ({children,isInverted, isGoogleSignin, ...props}) => {
    const buttonClasses = classNames({
        'custom-button': true,
        'google-signin': isGoogleSignin,
        'inverted': isInverted

    })
    return (
        <button className={buttonClasses} {...props}>
            {children}
        </button>
    );
}
 
export default Button;