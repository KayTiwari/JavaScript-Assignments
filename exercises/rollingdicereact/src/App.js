import React, {Component} from 'react';
// import DiceBox from './DiceBox'


class App extends Component {
    constructor() {
        super();
        this.state = {
            rolls: [],
            count: 0
        }
    }

roller = e => {
    // while (this.state.count < 6) {
   let value = Math.floor(Math.random()*2 + 1)
   
   this.setState((prevState)=>{
       return {
           rolls: [...prevState.rolls, {value}],
           count: prevState.count + 1
       }
   })
   console.log(value);
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
export default App