import React, { Component } from 'react';
import axios from 'axios';
const {Provider, Consumer} = React.createContext()

class JProvider extends Component {
    constructor(){
        super()

        this.state ={
            bounties: [],
            firstName: '',
            lastName: '',
            Jedi: '',
            bountyAmount: '',
            image: ''
        }
    }

        // GET
        getBounties = () => {
            axios.get('/bounty').then(response => {
            this.setState({
                    bounties: response.data
                })
            })
            console.log(this.state.bounties);
        }
    
        // POST
        postBounties = newBounty => {
            axios.post('/bounty', newBounty).then(response => {
                this.setState(prevState => ({
                    bounties: [...prevState.bounties, response.data]
                }))
            })
        }
    
        // PUT
        editBounties = (id, updatedItem) => {
            axios.put(`/bounty/:${id}`, updatedItem).then(res => {
                this.setState(prevState => ({
                    bounties: prevState.bounties.map(bounty => bounty._id === id ? bounty = updatedItem : bounty)
                }))
            })
        }
    
    
        // DELETE
        deleteBounties = id => {
            axios.delete(`/bounty/:${id}`).then(response => {
                this.setState(prevState => ({
                    bounties: prevState.bounties.filter(bounty => bounty._id !== id)
                }))
            })
        }

    eventHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        return (
            <Provider value={{
                getBounties: this.getBounties,
                postBounties: this.postBounties,
                editBounties: this.editBounties,
                deleteBounties: this.deleteBounties,
                postxBounty: this.postxBounty,
                ...this.state
            }}>
                {this.props.children}
            </Provider>
        );
    }
}

export default JProvider;

export function withProvider (C) {
    return props => <Consumer>
                        {value => <C {...value}{...props} />}
                    </Consumer>
}