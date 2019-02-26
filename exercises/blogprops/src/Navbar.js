import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav" href="index.html">
            <div class='container'>
            <a class="navbar-brand">Start Bootstrap</a>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml auto">
                    <li class="nav-item" href="index.html"><a class="nav-link">Home</a></li>
                    <li class="nav-item" href="index.html"><a class="nav-link">About</a></li>
                    <li class="nav-item" href="index.html"><a class="nav-link">Post</a></li>
                    <li class="nav-item" href="index.html"><a class="nav-link">Contact</a></li>
                </ul>
            </div>
            </div>
            </nav>
        </div>
    )
}
export default Navbar