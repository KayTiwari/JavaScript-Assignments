import React, {Component} from 'react';
import {withProvider} from './AppContext';

class Register extends Component {
    constructor() {
        super();

        this.state={
            username: '',
            password: ''
        }
    }
    clearInputs = () => {
        this.setState({
            username: "",
            password: ""
        })
    }
    handleChange = () => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleRegister = () => {
        e.preventDefault();
        this.props.signup(this.state)
        .then(() => this.props.history.push('/'));
        alert('Account successfully created!')
        alert(JSON.stringify(this.state));
        this.clearInputs();
    }

    render() {
        return(
            <div>

            </div>
        )
    }
}
export default withProvider(Register);