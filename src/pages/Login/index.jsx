import React from 'react';
import './styles.scss';

import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';
 
const Login = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    );
}
 
export default Login;