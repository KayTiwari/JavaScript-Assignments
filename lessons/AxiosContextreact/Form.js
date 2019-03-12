import React, { Component } from 'react';
import {withTodos} from './TodoProvider'

class Form extends Component {
    constructor(props){
        super(props)
        //props used in constructor and super because its being called on in the state
        this.state = {
            title: '',
            description: '',
            button: props.button || 'Click Here'
            //taking button type='add' as a prop
        }
    }

    componentDidMount(){
        if(this.props.type === 'edit'){
            let {title, description} = this.props.todo
            this.setState({title, description})
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.type === 'add' ? this.props.postTodo(this.state) : this.props.editTodo(this.props.todo._id, this.state)
        //if the submit type is 'add' send the state over to the post function in todoprovider, otherwise send over an id and state to the put function.
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={this.props.type === 'add' ? 'todo-submit' : 'edit-todo'}>
                    <input type="text"
                           placeholder='Todo Title' 
                           name='title' 
                           value={this.state.title} 
                           onChange={this.handleChange} />
                    <input type="text" 
                           placeholder='Todo Description' 
                           name='description' 
                           value={this.state.description} 
                           onChange={this.handleChange} />
                    <button>{this.state.button}</button>
                </form>
        );
    }
}

export default withTodos(Form);