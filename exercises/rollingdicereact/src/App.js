import React, {Component} from 'react';
import DiceBox from './DiceBox'


class App extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div>hi
                <DiceBox />
            </div>
        )
    }
}
export default App