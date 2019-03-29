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
    componentDidUpdate(){
        this.getBounties();
    }


    render(props) {
            {this.state.bounties ? mappedJedi = this.state.bounties.map((jedi) =>{return (<BountyInfo firstName={jedi.firstName} lastName={jedi.lastName} isJedi={jedi.isJedi} bounty={jedi.bountyAmount}/>)}) : console.log('loading')}
        console.log(props);
            return (
                <div>
                    <PostBounty />
                    {mappedJedi}
                </div>
            )
}
}
export default withProvider(App);