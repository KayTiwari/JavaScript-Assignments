import React, {Component} from 'react';

class App extends Component {
    constructor() {
        super();

        console.log(this)

        this.state = {
            counter: 100
        }
    }
    rem = () => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter - 1
            }
        })
    }

    render(){
        return (
            <div>
                <h1>You have {this.state.counter} clicks remaining.</h1>
                <button onClick={this.rem}>Click me!</button>
            </div>
        )
    }
}
export default App
 