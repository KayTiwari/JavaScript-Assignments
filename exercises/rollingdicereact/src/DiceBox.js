import React, {Component} from 'react';
import Die from './Die'

class DiceBox extends Component {
    constructor() {
        super();
        this.state = {
            rolls: [],
            count: 0
        }
    }

roller = e => {
    for (var i=0;i<5;i++) {
        let value = Math.floor(Math.random()*6 + 1)
       this.setState((prevState)=>{
           return {
               rolls: [...prevState.rolls, value],
               count: prevState.count + 1
           }
       })
       console.log(this.state.count);
       console.log(i);
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
            <button onClick={this.roller}>Roll</button>
            <h1>{rollz}</h1>
            <Die number={Math.floor(Math.random()*6 + 1)}/>
        </div>
        )
    }
}
export default DiceBox