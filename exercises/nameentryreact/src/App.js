import React, {Component} from 'react';

class App extends Component{
    constructor(){
        super();
        this.state = {
            firstName: '',
            lastName: '',
            submit: false,
            names: []
        }
    }
handleChange = (event) => {
    event.preventDefault();
    this.setState({
       [event.target.name]: event.target.value,
    })
}
eventhandle = e => {
    e.preventDefault();
    this.setState((prevState)=>{
        const {firstName, lastName} = prevState;
        return {
            firstName: '',
            lastName: '',
            names: [{firstName, lastName}, ...prevState.names]
        }
    })
}

    render() {
        const mappedNames = this.state.names.map((name, i) =>{
            return (
            <li key={i}>{name.firstName} {name.lastName}</li>)
        })
        return (
            <div>
                <input name='firstName' placeholder='First name' onChange={this.handleChange}></input>
                <input name='lastName' placeholder='Last name' onChange={this.handleChange}></input>
                <br></br>
                <input type='submit' value='submit' onClick={this.eventhandle}></input>
                <br></br>
                <h1>{this.state.submit === true ? this.state.firstName + ' ' + this.state.lastName : null}</h1>
                <ul>{mappedNames}</ul>
            </div>
        )
    }
}
export default App