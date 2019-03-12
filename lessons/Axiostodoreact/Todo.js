import React, { Component } from 'react';

class Todo extends Component {
    constructor(props){
        super(props)

        this.state = {
            edit: true,
            title: props.todo.title,
            description: props.todo.description
        }
    }

    toggle = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }))
    }

    handleChange = e => {
        let {name, value} = e.target;
        this.setState({[name]: value})
    }

    handleSubmit = (e, id) => {
        e.preventDefault()
        let {title, description} = this.state;
        const updatedTodo = {title, description}
        this.props.editTodo(id, updatedTodo)
    }
    render() {
        let {todo, deleteTodo} = this.props;
        return (
            <div>
                {this.state.edit ?
                    <>
                        <h1>{todo.title}</h1>
                        <p>{todo.description}</p>
                        <button onClick={() => deleteTodo(todo._id)}>Delete</button>
                        <button onClick={this.toggle}>Edit</button>
                    </>
                :
                    <form onSubmit={(e) => this.handleSubmit(e, todo._id)}>
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
                        <button>Save</button>
                    </form>
                }
            </div>
        );
    }
}

export default Todo;