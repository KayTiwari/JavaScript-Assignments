import React, {Component} from 'react';
import {withProvider} from './JProvider'

const PostBounty = (props) => {
    console.log(this.state)
    return (
        <div>
            <form>
            <input type='text' name='firstName'  placeholder='First Name' onChange={this.eventHandler}/>
            <input type='text' name='lastName'  placeholder='Last Name' onChange={this.eventHandler} />
            <input type='radio' name='Jedi' value='Jedi' />
            <input type='radio' name='Jedi'  value='Sith' />
            <input type='text' name='Bounty' placeholder='Bounty?' />
            <input type='text' name='image' placeholder='Image' />
            <button>Submit</button>
            </form>
        </div>
    )
}


export default withProvider(PostBounty);