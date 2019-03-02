import React from 'react';
import axios from 'axios';

class App extends React.Component{
    constructor(){
        super();

        this.state= {
            people: []
        }
        
    }
    async componentDidMount() {
        try{
            const peeps = await this.getPeople();
            this.setState({people: peeps})
        } catch(err) {
            console.log(err);
        }
    }
    async getPeople() {
        const response = axios.get('https://s3.amazonaws.com/v-school/data/hitlist.json');
        return response.data.results
    }
    render(){
        const mappedArrays = this.state.people.map((person, i)=>{
            return (
                <div key={i}>
                    {person.name}
                </div>
            )
        })
        return (
        <div>
            {mappedArrays}
        </div>
        )
    }

}
export default App

