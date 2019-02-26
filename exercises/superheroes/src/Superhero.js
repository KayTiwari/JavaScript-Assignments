import React from 'react';


const Superhero = (props) => {
    function alerter(e) {
        const al = props.alert;
        e.preventDefault();
        alert(al);
    }
    return (
        <div>
            <h1 onClick={alerter}>{props.name}</h1>
            <img onClick={alerter} src={props.image}></img>
        </div>
    )
}
export default Superhero
