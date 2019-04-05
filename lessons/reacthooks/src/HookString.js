import React, {useState} from 'react';


const App = () => {
    const [] = useState(['Ricky', 'Morty'])

    return (
        <div>
            {names.map(name => <h1 key={name}>{name}</h1>)}
            <button onClick={() => setNames([...names, "Birdperson"])}>Add BirdPerson</button>
        </div>
    )
}
//FOR STRING



//FOR OBJECT
const App = () => {
    const initInputs = { firstname: '', lastname: ''}
    const [inputs, setInputs] = useState(initInputs)
    const [namesArr, setNamesArr] = useState([])
    //handleChange, handlesubmit, inputs

    const handleChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        const newName = {
            firstname: inputs.firstname,
            lastname: inputs.lastname
        }
        setNamesArr([...namesArr, newName])
        setInputs(initInputs);
    }
    return (
        <div>
            <form>
                <input type='text' name='firstname' value={inputs.firstname} onChange={handleChange} placeholder='First Name'></input>
                <input type='text' name='firstname' value={inputs.lastname} onChange={handleChange} placeholder='Last Name'></input>
            </form>
            <div>
                {namesArr.map(person => <h1>{person.firstname} {person.lastname}</h1>)}
            </div>
        </div>
    )
}