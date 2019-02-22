import React, {Component} from 'react';
import './App.css'

class App extends Component {
    constructor() {
        super();
        console.log(this);

        this.state = {

            styles: {
                backgroundColor: 'white'
            }
        

        }
    }
    BW = () => {
        if (this.state.styles.backgroundColor === 'white') {
        return this.setState(prevState => ({
            styles: {
                ...prevState.styles,
                backgroundColor:'black'
            }
        }));
        } else {
            return this.setState(prevState => ({
                styles: {
                    ...prevState.styles,
                    backgroundColor:'white'
                }
            }))
        }
    }

    render(){
        return (
            <div className='main'>
            <div className='one' style={this.state.styles} >1</div>
            <div className='two' style={this.state.styles}>2</div>
            <div className='three' style={this.state.styles}>3</div>
            <div className='four'style={this.state.styles}>4</div>
            <button onClick={this.BW}>B/W</button>
            </div>
            
        )
    }
}
export default App


        // if (this.state.styles.backgroundColor === 'white') {
        //     return(this.state.styles.backgroundColor === 'black');
        // } else {
        //     return this.state.styles.backgroundColor === 'white';
        // }