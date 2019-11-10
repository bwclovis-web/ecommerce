import React, { Component } from 'react';
import './styles.scss';

import FormInput from '../FormInput';
import Button from '../Button';
 
class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = evt => {
        evt.preventDefault();

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
                    <Button type="submit">Sign In</Button>
                </form>
            </div>
        );
    }
}
 
export default SignIn;