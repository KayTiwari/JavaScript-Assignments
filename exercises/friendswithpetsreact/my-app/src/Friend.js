import React from 'react';
import Pet from './Pet';

const Friend = (props) => {
    const pets = props.pets.map((pet) => {
        return (
            <div>
                <Pet name={pet.name} breed={pet.breed}/>
            </div>
        )
    }) 
    return (
        <div>
        <h1>My name is {props.name}</h1>
        {pets}
        </div>
    )
}
export default Friend;