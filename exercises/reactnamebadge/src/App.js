import React, { Component } from 'react'
import Badge from './Badge'

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            POB: '',
            phone: '',
            food: '',
            desc: '',
            badgearr: [],
            display: false
        }
        this.style = {
            border: 'solid',
        }
    }
handleChange = (event) => {
    event.preventDefault();
    this.setState({
        [event.target.name]: event.target.value
    })
}
submitChange = (e) => {
    e.preventDefault();
    // this.display();
    if (this.state.display === false) {
        this.setState({
            display: true
        })
    } else {
        this.setState({
            display: false
        })
    }
    this.setState((prevState)=>{
        const {firstName, lastName, email, POB, phone, food, desc} = prevState;
        return {
            firstName: '',
            lastName: '',
            email: '',
            POB: '',
            phone: '',
            food: '',
            desc: '',
            badgearr: [{firstName, lastName, email, POB, phone, food, desc}, ...prevState.badgearr]
        }
    })}
// display = () => {
//     if (this.state.display === false) {
//     this.setState({
//         display: true
//     })
// } else {
//     this.setState({
//         display: false
//     })
// }
// }}

  render() {
    return (
        <div>
      <div style={this.style}>
        <input name='firstName' placeholder='first name' onChange={this.handleChange}></input>
        <input name='lastName' placeholder='last name' onChange={this.handleChange}></input><br></br>
        <input name='email' placeholder='Email' onChange={this.handleChange}></input>
        <input name='POB' placeholder='Place of Birth' onChange={this.handleChange}></input><br></br>
        <input name='phone' type='tel' placeholder='Phone' onChange={this.handleChange}></input>
        <input name='food' placeholder='Favorite food' onChange={this.handleChange}></input><br></br>
        <input name='desc' placeholder='Tell us about yourself' onChange={this.handleChange}></input><br></br>
        <input type='submit' value='Submit' onClick={this.submitChange}></input><br></br>
        </div><br/><br></br><br></br><br></br>
        <div>{this.state.display ? this.state.badgearr.map((id, i) => (
        <div key={i}> 
        <Badge firstName={id.firstName} lastName={id.lastName} email={id.email} POB={id.POB} phone={id.phone} food={id.food} desc={id.desc}/>
        </div>
        ) ): null}</div>
      </div>
    )
  }
}
