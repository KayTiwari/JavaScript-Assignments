import React from 'react';
import Superhero from './Superhero';

const Superheroes = [
    {
        name: 'Superman',
        imgUrl: 'https://vignette.wikia.nocookie.net/headhuntersholosuite/images/3/30/Superman.gif/revision/latest?cb=20120827164428',
        alert: 'Man of steel!'
    },
    {
        name: 'Batman',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Batman_%28DC_Rebirth_version%29.png/220px-Batman_%28DC_Rebirth_version%29.png',
        alert: 'The dark knight!'
    },
    {
        name: 'Deadpool',
        imgUrl: 'https://m.media-amazon.com/images/S/aplus-media/vc/0ffc3cff-5aba-4444-9ee9-7f696f889701._SL300__.png',
        alert: 'Chimichangas!'
    }
]



const App = () => {
    const func = Superheroes.map((supers) => {
        return (
        <Superhero name={supers.name} image={supers.imgUrl} alert={supers.alert}/>
        )
    })
    return (
       <div>
           {func}
        </div>
    )
}

export default App