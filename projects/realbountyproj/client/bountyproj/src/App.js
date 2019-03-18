import React, {Component} from 'react';
import {withProvider} from './JProvider';
import BountyInfo from './BountyInfo';
import PostBounty from './PostBounty';


class App extends Component {
    constructor(){
        super();

        this.state = {

        }
    }


    render(props) {
        console.log(props);
            return (
                <div>
                    Hi
                    <BountyInfo />
                    <PostBounty />
                </div>
            )
}
}
export default withProvider(App);