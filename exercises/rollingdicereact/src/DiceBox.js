import React, {Component} from 'react';

class DiceBox extends Component {
    constructor() {
        super();
        this.state = {
            rolls: [],
            count: 0
        }
    }

roller = e => {
    while(this.state.count < 6) {
   let value = Math.floor(Math.random()*5 + 1)
   this.setState((prevState)=>{
       return {
           rolls: [...prevState.rolls, {value}]
       }
   })
   console.log(value);
    } 
}
    render() {
        const rollz = this.state.rolls.map((roll, i) =>{
            return(
                <div key={i}>{roll}</div>
            )
        })
        return (
        <div>
            <button onClick={this.roller}></button>
            <h1>{rollz}</h1>
        </div>
        )
    }
}
export default DiceBox