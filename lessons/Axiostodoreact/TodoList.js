import React, { Component } from 'react';
import Todo from './Todo'
import axios from 'axios';

class TodoList extends Component {
    constructor(){
        super()

        this.state = {
            inputs: {
                title: '',
                description: ''
            },
            todos: []
        }
    }

    // GET
    async componentDidMount(){
        const response =  await axios.get('https://api.vschool.io/marcus/todo')
        this.setState({
            todos: response.data
        })
    }

    handleChange = e => {
        let {name, value} = e.target;
        this.setState(prevState => ({
            inputs: {
                ...prevState.inputs,
                [name]: value
            }
        }))
    }

    // POST
    handleSubmit = e => {
        e.preventDefault()
        axios.post('https://api.vschool.io/marcus/todo', this.state.inputs).then(response => {
            this.setState(prevState => ({
                todos: [...prevState.todos, response.data],
                inputs: {
                   title: '' ,
                   description: ''
                }
            }))
        })
    }

    editTodo = (id, updatedTodo) => {
        axios.put(`https://api.vschool.io/marcus/todo/${id}`, updatedTodo).then(res => {
            this.setState(prevState => ({
                todos: prevState.todos.map(todo => todo._id === id ? todo = updatedTodo : todo)
            }))
        })
    }


    // DELETE
    deleteTodo = id => {
        axios.delete(`https://api.vschool.io/marcus/todo/${id}`).then(response => {
            this.setState(prevState => ({
                todos: prevState.todos.filter(todo => todo._id !== id)
            }))
        })
    }

    render() {
        const mappedTodos = this.state.todos.map(todo => <Todo key={todo._id} todo={todo} deleteTodo={this.deleteTodo} editTodo={this.editTodo} />)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                           placeholder='Todo Title' 
                           name='title' 
                           value={this.state.inputs.title} 
                           onChange={this.handleChange} />
                    <input type="text" 
                           placeholder='Todo Description' 
                           name='description' 
                           value={this.state.inputs.description} 
                           onChange={this.handleChange} />
                    <button>Submit</button>
                </form>

                <div>
                    {mappedTodos}
                </div>
            </div>
        );
    }
}

export default TodoList;