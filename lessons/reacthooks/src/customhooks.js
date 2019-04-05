//Toggler 

import React from 'react';
// import {useToggle} from './custom-hooks'

// const App = () => {

//     const {toggle, toggler} = useToggle();
//     return (
//         <div>
//             <h1>The toggle is {toggle ? "On" : "Off"}</h1>
//             <button onClick={toggler}>Turn Light</button>
//         </div>
//     )
// }
// export default App




//Separate file
// import {useState} from 'react';

// export const useToggle = () => {
//     const [toggle, setToggle] = useState(false)

//     const toggler = () => setToggle(!toggle);

//     return {toggle, toggler}
// }


const App = () => {
    const initInputs = {firstname: '', lastname: ''}
    const alertName = inputs => alert(`${inputs.firstname} ${inputs.lastname}`)

    const {inputs, handleChange, handleSubmit} = useFormProperties(initInputs, alertName)
    return (
        <form>
                <input type='text' name='firstname' value={inputs.firstname} onChange={handleChange} placeholder='First Name'></input>
                <input type='text' name='firstname' value={inputs.lastname} onChange={handleChange} placeholder='Last Name'></input>
        </form>
    )
}



//Separate file
export const useFormProperties = (initInputs) => {
    const [inputs, setInputs] = useState(initInputs)

    const handleChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        submitCallback(inputs);
        setInputs(initInputs);

    }

    return {inputs, handleChange, handleSubmit}
}