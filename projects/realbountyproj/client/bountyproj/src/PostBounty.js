import React, {Component} from 'react';
import {withProvider} from './JProvider'

const PostBounty = (props) => {
    return (
        <div>
            <form onSubmit={props.postBounties}>
            <input type='text' name='firstName'  placeholder='First Name' onChange={props.eventHandler} />
            <input type='text' name='lastName'  placeholder='Last Name' onChange={props.eventHandler} />
            <input type='radio' name='Jedi' value='Jedi' />Jedi
            <input type='radio' name='Jedi'  value='Sith' />Sith
            <input type='text' name='Bounty' placeholder='Bounty?' />
            <input type='text' name='image' placeholder='Image' />
            <button>Submit</button>
            </form>
        </div>
    )
}


export default withProvider(PostBounty);