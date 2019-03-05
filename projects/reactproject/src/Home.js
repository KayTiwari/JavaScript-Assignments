import React from 'react'
import Header from './Header'
import {Link} from 'react-router-dom'
import './App.css'

const Home = () => {
    return (
        <div className='landing'>
            <Header />

            <Link to='./Main' className='link'>Enter Main Site</Link>
        </div>
    )
}
export default Home;