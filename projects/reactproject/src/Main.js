import React from 'react';
import './Main.css'
import {Link} from 'react-router-dom'


const Main = () => {
    return (
    <div className='mainImage'>
        <div className='mainPage'></div>
        <h1>Tarot</h1>
        <img className='crystalBall' src="https://ae01.alicdn.com/kf/HTB1w4ATXFooBKNjSZFPq6xa2XXa9/3cm-Clear-Natural-Quartz-Crystal-Sphere-Balls-Black-Obsidian-Sphere-Crystal-Ball-Home-Decoration-Craft-4.jpg_640x640.jpg" alt='yes'></img>
        <div className='mainPagebottom'></div>
        <Link to='/Threecard' className='link1'>3 Card Reading</Link>
        <Link to='/Fivecard' className='link2'>5 Card Reading</Link>
    </div>
    )
}

export default Main