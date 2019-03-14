import React from 'react';

const JediDetail = (props) => {
    return (
        <div>
            <h1>{props.firstName} {props.lastName}</h1>
            <h2>{props.id}</h2>
            <h2>{props.type}</h2>
        </div>
    )
}
export default JediDetail