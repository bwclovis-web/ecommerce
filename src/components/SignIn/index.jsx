import React, { Component } from 'react';
import './styles.scss';

import FormInput from '../FormInput';
import Button from '../Button';

import {auth, signInWithGoogle} from '../../firebase/firebase.config';
 
class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async evt => {
        evt.preventDefault();
        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({
                email: '',
                password: ''
            })
        } catch (error) {
            console.log('%c [error]', 'color:blue', error)
        }

        this.setState({
            email:'',
            passowrd:''
        })
    }

    handleChange = evt => {
        const {value, name} = evt.target;
        this.setState({
            [name]: value
        })
    }

    render() { 
        return (
            <div className="sign-in">
                <h2>I Already Have An Account</h2>
                <p>Sign In With Your Email</p>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label="email"
                        required
                    />
                    <FormInput 
                        type="password" 
                        name="password" 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label="password"
                        required
                    />
                    <div className="controls">
                        <Button type="submit">Sign In</Button>
                        <Button type="button" onClick={signInWithGoogle} isGoogleSignin>Sign In With Google</Button>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default SignIn;