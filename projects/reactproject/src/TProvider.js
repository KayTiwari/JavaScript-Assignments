import React, {Component} from 'react';
import axios from 'axios';
const {Provider, Consumer} = React.createContext();

class TProvider extends Component {
    constructor(){
        super();

        this.state = {
            list: []
        }
    }

    //For Axios.GET
    getList = () => {
        axios.get('https://rws-cards-api.herokuapp.com/api/v1/cards/search?type=major').then(response =>{
            this.setState({
                list: response.data
            })
        })
    }

    //For Axios.POST
    postList = newRead => {
        axios.post('https://rws-cards-api.herokuapp.com/api/v1/cards/search?type=major', newRead).then(response =>{
            this.setState(prevState => ({
                list: [...prevState.list, response.data]
            }))
        })
    }

    //For Axios.DELETE
    deleteList = id => {
        axios.delete(`https://rws-cards-api.herokuapp.com/api/v1/cards/search?type=major${id}`).then(res =>{
            this.setState(prevState =>({
                list: prevState.list.filter(list => list.id !== id)
            }))
        })
    }

    render() {
        return (
            <Provider value = {{
                getList: this.getList,
                postList: this.postList,
                deleteList: this.deleteList,
                ...this.state
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export default TProvider;

export function withProvider (C) {
    return props => <Consumer>
                        {value => <C {...value}{...props} />}
                    </Consumer>
}