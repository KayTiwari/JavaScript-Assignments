import React, {Component} from 'react';
import {withProvider} from './JProvider'
import './App.css'


class BountyInfo extends Component {
        constructor() {
            super();

            this.state = {
                firstName: '',
                lastName: '',
                isJedi: '',
                bountyAmount: '',
                image: '',
                edit: false

            }
        }

        eventHandler = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
        handleSubmit = (e) => {
            e.preventDefault();
            this.props.editBounties(this.props.id, this.state)
        }
        editor = () => {
            this.setState(({edit}) => ({edit: !edit}))
        }

        render(props) {
            console.log(this.props)
        return(
            <div className={this.props.isJedi === 'Jedi' ? 'bountycardJedi' : 'bountycardSith'} >
                {this.state.edit ? <input type='text' name='firstName' placeholder={this.props.firstName} onChange={this.eventHandler}/> : <h1>{this.props.firstName} </h1>}
                {this.state.edit ? <input type='text' name='lastName' placeholder={this.props.lastName} onChange={this.eventHandler}/> : <h1>{this.props.lastName}</h1>}
        {this.state.edit ? <input type='text' name='bountyAmount' placeholder={this.props.bounty} onChange={this.eventHandler}/> : <h3>{this.props.bounty}</h3> }
        {this.state.edit ? <div><input type='radio' name='isJedi' value='Jedi' onChange={this.eventHandler}/><label>Jedi</label>
     <input type='radio' name='isJedi' value='Sith' onChange={this.eventHandler}/><label>Sith</label></div> : <h3>{this.props.isJedi}</h3>}
        {this.state.edit ? <input type='text' name='image' placeholder={this.props.image} onChange={this.eventHandler} ></input> : <img src={this.props.image}></img>}
        <button onClick={() => this.props.deleteBounties(this.props.id)}>Delete</button>
        {this.state.edit ? <button onClick={this.handleSubmit}>Submit</button> : <button onClick={this.editor}>Edit</button>}
            </div>
        )
    }
}

export default withProvider(BountyInfo);