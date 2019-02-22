import React from 'react';
import Pet from './Pet';

const Friend = (props) => {
    const pet = props.pet.map((pets)=>{
        return (<div>
            <Pet name={pets.name} breed={pets.breed}/>
        </div>
        )
    } )
    return (
        <div>
            <h1>{props.name}</h1>
            <h3>{pet}</h3>
        </div>
    )
}
export default Friend;