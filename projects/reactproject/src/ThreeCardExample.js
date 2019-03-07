import React from 'react'

const ThreeCardExample = (props) => {

    if (props){
        const MappedTarot = props.newlist.map(list => <ThreeCardMap key={list._id} name={list.name} meaningup={list.meaning_up} meaningdown={list.meaning_rev}/>)
    }
    

    return (
        <div>
            <h1>Three Card Reading</h1>
            <div>{MappedTarot}</div>
        </div>
        )

}

export default withProvider(ThreeCardExample)