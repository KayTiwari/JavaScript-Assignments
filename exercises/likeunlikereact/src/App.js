import React, {Component} from 'react';

class App extends Component {
    constructor(){
        super();
        this.state = {
            like: true,
            imgUrl:'https://beginnersbook.com/wp-content/uploads/2013/09/fblike1.jpg'
        }
    }
liker = () => {
    if (this.state.like === true) {
        this.setState({
            like: false,
            imgUrl: 'https://i.pinimg.com/originals/6f/7e/4c/6f7e4c22ae10c2c3ba5e6e116ca5f726.jpg'
        })

    } else {
        this.setState({
            like: true,
            imgUrl: 'https://beginnersbook.com/wp-content/uploads/2013/09/fblike1.jpg'
        })
    }
}
    render() {
        return (
            <div>
            <img onClick={this.liker} src={this.state.imgUrl}></img>
            </div>
        )
    }
}
export default App