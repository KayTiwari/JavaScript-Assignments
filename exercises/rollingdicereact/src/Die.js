import React, {Component} from 'react'

class Die extends Component {
    constructor(){
        super();

        this.state = {
            display: false,
            count: 0
        }
    }

alpha = (prevState) => {
    if (this.state.count < 3) {
    this.setState(({display}) => ({display: !display,
    count: prevState.count + 1})
    )} else {
        this.setState(({display}) => ({display: !display,
            count: prevState.count - 3 }),
        this.props.number = Math.floor(Math.random()*6 + 1)
        )}
}
render() {
    return (
        <div>
            <button onClick={this.alpha}>Dieee</button>
            <h1>{this.state.display ? this.props.number : null}</h1>
        </div>
    )
}
}
export default Die