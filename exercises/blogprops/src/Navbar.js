import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav" href="index.html">
            <div className='container'>
            <a className="navbar-brand">Start Bootstrap</a>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav">
                    <li className="nav-item" href="/"><a className="nav-link">Home</a></li>
                    <li className="nav-item" href="/"><a className="nav-link">About</a></li>
                    <li className="nav-item" href="/"><a className="nav-link">Post</a></li>
                    <li className="nav-item" href="/"><a className="nav-link">Contact</a></li>
                </ul>
            </div>
            </div>
            </nav>
        </div>
    )
}
export default Navbar