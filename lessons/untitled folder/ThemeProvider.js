import React, { Component } from 'react';
const {Provider, Consumer} = React.createContext()

class ThemeProvider extends Component {
    constructor(){
        super()

        this.state = {
            title: 'Drink Sprite',
            on: false
        }
    }

    toggle = () => {
        this.setState(({on})=> ({on: !on}))
    }

    render() {
        return (
            <Provider value={{
                ...this.state,
                toggle: this.toggle
            }}>
                {this.props.children}
            </Provider>
        );
    }
}

export default ThemeProvider;

export function withTheme (C) {
    return props => <Consumer>
                        {value => <C {...value}{...props} />}
                    </Consumer>
}