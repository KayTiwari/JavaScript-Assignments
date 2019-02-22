import React from 'react';
import Cards from './Cards';

let vacationSpots = [
    {
      place: "Meridian, Idaho",
      price: 40,
      timeToGo: "Spring",
      color: 'yellow'
    },{
      place: "Cancun",
      price: 900,
      timeToGo: "Winter",
      color: 'aqua'
    },{
      place: "China",
      price: 1200,
      timeToGo: "Fall",
      color: 'maroon'

    },{
      place: "Russia",
      price: 1100,
      timeToGo: "Summer",
      color: 'white'
      
    },{
      place: "Lebanon",
      price: 400,
      timeToGo: "Spring",
      color: 'brown'
    }
  ]

const App = () => {
    const card = vacationSpots.map((location) => {
        return (
        <div>
        <Cards place={location.place} price={location.price} time={location.timeToGo} color={location.color}/>
        </div>
        )
    })
        return  <div>{card}</div>
}

export default App