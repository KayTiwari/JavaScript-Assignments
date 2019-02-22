// function () {
    // this refers to the function
// }
// arrow functions dont have a contextual 'this'


import React, { Component } from 'react';
import './App.css'

class App extends Component {
    constructor() {
        super();
        this.state = {
            box1: 'white',
            box2: 'black',
            
            
        }
    }
    BW = () => {
        if (this.state === box1) {
            this.setState(box1 => box2);
        }
    }
    render() {
        return (
            <div className='main'>
                <div className='one' style={{backgroundColor: this.state.box1}}></div>
                <div className='two' style={{backgroundColor: this.state.box1}}></div>
                <div className='three' style={{backgroundColor: this.state.box1}}></div>
                <div className='four' style={{backgroundColor: this.state.box1}}></div>
                <button onClick={this.BW}>B/W</button>
            </div>
        )
    }
}

export default App