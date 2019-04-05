import React {useEffect, useState} from 'react';



// ComponentDidupdate vs ComponentDidMount
// //https://rickandmortyapi.com/api/character/
// const App = () => {

//     const [characters, setCharacters] = useState([])
//     //useEffect does not return anything, called when the component renders
//     useEffect(() => {
//         //componentDidMount or ComponentDidUpdate
//         axios.get('https://rickandmortyapi.com/api/character').then(res => {
//             setCharacters(res.data.results)
//         })
//     }, [)
//     //array at the end makes useEffect a componentDidMount
//     //anything inside array is watched by useEffect for change and then updates if it does change
//     // console.log(characters)

//     return (
//         <div>
//             { characters.map(char => <div style={{backgroundImage: `url(${char.image})`}}>
//             <h1>{char.name}</h1>)
//         </div>
//         </div>
//     )})
// // export default App




const App = () => {
    const [color, setColor] = useState("conflowerblue")

    useEffect(() => {
        //componentDidMount
        window.addEventListener("keydown", e => {
            if (e.which === 82) {
                setColor("red")
            } else if (e.which === 89) {
                setColor("yellow")
            }
        })
        //componentDidUnmount
        return () => {
            window.removeEventListener("keydown", null)
        }
    })
}
