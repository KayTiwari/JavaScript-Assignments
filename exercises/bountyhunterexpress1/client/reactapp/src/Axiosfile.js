import React, {Component} from 'react';
import axios from 'axios'
import JediDetail from './JediDetail'

class Axiosfile extends Component {
    constructor() {
        super();

        this.state = {
            list: []
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
        const mappedJedi = this.state.list.map(jedi => <JediDetail firstName={jedi.firstName} lastName={jedi.lastName} id={jedi.id} type={jedi.type} />)
        return (
            <div>
            {mappedJedi}
            </div>
        )
    }
}
export default Axiosfile;
