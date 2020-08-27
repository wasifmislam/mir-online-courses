import React from 'react';
import logo from '../../images/mir-online.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt=""/>
            <nav>
                <a href="/Business">Business</a>
                <a href="/Marketing">Marketing</a>
                <a href="/Development">Development</a>
                <a href="/Photography">Photography</a>
                <a href="/Design">Design</a>
            </nav>
        </div>
    );
};

export default Header;
