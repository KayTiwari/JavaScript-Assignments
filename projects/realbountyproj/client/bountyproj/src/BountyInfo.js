import React, {Component} from 'react';
import {withProvider} from './JProvider'

class BountyInfo extends Component{
    constructor(){
        super();

        this.state = {

        }
    }
    render(props){
        // this.props.bounties ? console.log(this.props.bounties) : console.log('hi')
        console.log(props)
        return(
            <div>
                <h1>{props.firstName} {props.lastName}</h1>
                <h3>{props.bounty}</h3>
                <h3>{props.isJedi}</h3>
            </div>
        )
    }
}

export default withProvider(BountyInfo);