import React, {Component} from 'react';
import axios from 'axios'
import JediDetail from './JediDetail'
const express = require('express');
const app = express();

class Axiosfile extends Component {
    constructor() {
        super();

        this.state = {
            list: [],
            firstName: "",
            lastName: "",
            isAlive: true,
            type: '',
            id: 666,
            img: ''
        }
    }
    componentDidMount() {
        axios.get('/data').then(response => {
            console.log(response.data.database);
            this.setState({
                list: response.data.database
                
            })
        })
    }

    render() {
        const mappedJedi = this.state.list.map(jedi => <JediDetail firstName={jedi.firstName} lastName={jedi.lastName} id={jedi.id} type={jedi.type} img={jedi.img} alive={jedi.isAlive} />)
        return (
            <div>
                <input onChange type='text' placeholder='Target Name'/>
                <input type='text' placeholder='Bounty'/>
                <input type='text' placeholder='Type'/>
                <input type='text' placeholder='image'/>
                <button onClick={this.addNew}>Submit</button>
            {mappedJedi}
            </div>
        )
    }
}
export default Axiosfile;
