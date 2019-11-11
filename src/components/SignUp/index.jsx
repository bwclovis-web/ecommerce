import React, { Component } from 'react';
import FormInput from '../FormInput';
import Button from '../Button';
import {auth, createUserProfile} from '../../firebase/firebase.config';

import './styles.scss';
 
class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            displayName:'',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async evt => {
        const {displayName, email, password, confirmPassword} = this.state
        evt.preventDefault();

        if(password !== confirmPassword) {
            alert('Passwords do not match')
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfile(user, {displayName})

            this.setState({
                displayName:'',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch(err) {
            console.log('%c [err]', 'color:blue',err)
        }
    }

    hadleChange = evt => {
        const {name, value} = evt.target;
        this.setState({[name]: value});
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state
        return (
            <div className="sign-up">
                <h2 className="title">I Do Not Have An Account</h2>
                <p>Sign Up With Email And Passworsd</p>

                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.hadleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput 
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.hadleChange}
                        label='Email'
                        required
                    />
                    <FormInput 
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.hadleChange}
                        label='Password'
                        required
                    />
                    <FormInput 
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.hadleChange}
                        label='Confirm Password'
                        required
                    />
                    <Button type='submit'>Sign Up</Button>
                </form>
            </div>
        );
    }
}
 
export default SignUp;