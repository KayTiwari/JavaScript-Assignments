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
            box2: 'white',
            box3: 'white',
            box4: 'white',
            border: 0
            
            
            
        }
    }
    BW = () => {
        if (this.state.box1 === 'white') {
            let newColor = 'black';
            this.setState({box1: newColor})
            this.setState({box2: newColor})
            this.setState({box3: newColor})
            this.setState({box4: newColor})
            }
         else {
            let newColor = 'white';
            this.setState({box1: newColor})
            this.setState({box2: newColor})
            this.setState({box3: newColor})
            this.setState({box4: newColor})
        }
    }
    purpz = () => {
        let newColor = 'purple';
        this.setState({box1: newColor})
        this.setState({box2: newColor})
    }
    BL = () => {
        let newColor = 'blue';
        this.setState({box3: newColor})
    }
    UE = () => {
        let newColor = 'blue';
        this.setState({box4: newColor})
    }
    rad = () => {
        let newBorder = 50;
        this.setState({border: newBorder})
    }
    i = () => {
        let newBorder = 70;
        this.setState({border: newBorder})
    }
    u = () => {
        let newBorder = 20;
        this.setState({border: newBorder})
    }
    s = () => {
        let newBorder = 1000;
        this.setState({border: newBorder})
    }
    render() {
        return (
            <div className='main'>
                <div className='one' style={{backgroundColor: this.state.box1, borderRadius: this.state.border}}></div>
                <div className='two' style={{backgroundColor: this.state.box2, borderRadius: this.state.border}}></div>
                <div className='three' style={{backgroundColor: this.state.box3, borderRadius: this.state.border}}></div>
                <div className='four' style={{backgroundColor: this.state.box4, borderRadius: this.state.border}}></div>
                <button onClick={this.BW}>B/W</button>
                <button onClick={this.purpz}>Purpz</button>
                <button onClick={this.BL}>BL</button>
                <button onClick={this.UE}>UE</button>
                <button onClick={this.rad}>rad</button>
                <button onClick={this.i}>i</button>
                <button onClick={this.u}>u</button>
                <button onClick={this.s}>s</button>
            </div>
        )
    }
}

export default App


// bool ? code : code;