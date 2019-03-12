import React from 'react'
import Header from './Header'
import {Link} from 'react-router-dom'
import './App.css'
import logo from './logo.svg'

const Home = () => {
    return (
        <div className='landing'>
            <Header />
            <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          </header>
          </div>
          <i class="fab fa-github fa-2x fa-spin"></i>
          <i class="fab fa-twitter fa-2x fa-spin"></i>
          <i class="fab fa-facebook fa-2x fa-spin"></i>
            <Link to='./Main' className='link'>Enter Main Site</Link>
        </div>
    )
}
export default Home;