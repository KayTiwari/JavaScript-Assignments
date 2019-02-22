import React, { Component } from 'react';
import Jungle from "./Jungle";

const App = () => {
  return (
    <div>
       <Jungle diet="Meat" animal="Lions" color='yellow' border='solid'/>
       <Jungle diet="Grass" animal="Elephants" color='gray'border='solid'/>
       <Jungle diet="Bugs" animal="Frogs" color='green'border='solid'/>
       <Jungle diet="Algae" animal="Fish" color='silver'border='solid'/>
       <Jungle diet="Ants" animal="Anteaters" color='black'border='solid' font='white'/>
       <Jungle diet="Blood" animal="Mosquitos" color='red'border='solid'/>
       <Jungle diet="Carcass" animal="Vultures" color='purple'border='solid'/>
       <Jungle diet="Leaves" animal="Caterpillers" color='green'border='solid'/>
       <Jungle diet="Carrots" animal="Rabbits" color='orange'border='solid'/>
       <Jungle diet="Bamboo" animal="Pandas" color='blue'border='solid'/>
    </div>
  )
}
export default App;
