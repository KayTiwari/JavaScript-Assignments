import React, {Component} from 'react';
import {withProvider} from './JProvider'

class PostBounty extends Component{
    constructor() {
        super()

        this.state = {
            firstName: '',
            lastName: '',
            isJedi: '',
            bountyAmount: '',
            image: ''
        }
    }
    eventHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.postBounties(this.state)
    }

    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
            <input type='text' name='firstName'  placeholder='First Name' onChange={this.eventHandler} />
            <input type='text' name='lastName'  placeholder='Last Name' onChange={this.eventHandler} />
            <input type='radio' name='isJedi' value='Jedi' onChange={this.eventHandler}/>Jedi
            <input type='radio' name='isJedi'  value='Sith' onChange={this.eventHandler} />Sith
            <input type='text' name='bountyAmount' placeholder='Bounty?' onChange={this.eventHandler}/>
            <input type='text' name='image' placeholder='Image' onChange={this.eventHandler}/>
            <button>Submit</button>
            </form>
        </div>
    )
}
}


export default withProvider(PostBounty);