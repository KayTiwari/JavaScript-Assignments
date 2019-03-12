import React from 'react';
import './Main.css'
import {Link} from 'react-router-dom'
import Contact from './Contact';

const Main = () => {
    return (
    <div className='mainImage'>
        <img className='landingHeader' src='https://www.freewebheaders.com/wordpress/wp-content/gallery/floral-abstract/colorful-floral-abstract-website-header.jpg'></img>
        <h1>Delve Into The Whims Of Fate</h1>
        <div className='stream'></div>
        {/* <img className='stream' src='https://i.pinimg.com/originals/62/56/ef/6256efa3425f2dc8aaa060fd37a605d1.gif'></img> */}
        <div className='linkcontainer'>
        <Link to='/Threecard' className='link1'>3 Card Reading</Link>
        <Contact />
        <Link to='/Fivecard' className='link2'>5 Card Reading</Link>
        </div>
    </div>
    )
}

export default Main