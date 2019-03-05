import React from 'react';
import Navbar from './Navbar'

const Header = () => {
    return (
        <div className='headercontainer'>
            <div className="mainheader">
            <Navbar />
            <div className='blackClover'></div>
            <h1 className='headerText'>Clean Blog</h1>
            <h3 className='headerText2'>A Blog Theme by Start Bootstrap</h3>
            </div>
        </div>
    )
}
export default Header;