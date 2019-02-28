import React from 'react';
import {Link} from 'react-router-dom';

function Navbar (props) {
   const styles = {
        backgroundColor: 'maroon',
        border: 'solid',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-around'
    }
    const font = {
        textDecoration: 'none',
        color: 'white'
    }
    return (
        <div style={styles} className='nav'>
        <Link style={font} to='/'>Home</Link>
        <Link style={font} to='/about'>About</Link> 
        <Link style={font} to='/services'>Services</Link>
        </div>
    )
}
export default Navbar
