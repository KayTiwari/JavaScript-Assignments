import React, {Component} from 'react';
import {withProvider} from './JProvider';
import BountyInfo from './BountyInfo';
import PostBounty from './PostBounty';

let mappedJedi;
class App extends Component {
    constructor(){
        super();

        this.state = {

        }
    }
    componentDidMount(){
        this.props.getBounties();
    }
    componentWillUpdate(){
        console.log(this.props.bounties.firstName)
    }


    render() {
        mappedJedi = this.props.bounties && this.props.bounties.map((jedi) =>{return (<BountyInfo firstName={jedi.firstName} lastName={jedi.lastName} isJedi={jedi.isJedi} bounty={jedi.bountyAmount} id={jedi._id} image={jedi.image}/>)})
        
        console.log(this.props.bounties);
            return (
                <div>
                    <PostBounty />
                    {mappedJedi}
                </div>
            )
}
}
export default withProvider(App);