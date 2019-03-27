import React from 'react';
import img from '../img/Harry-Potter-i-Insygnia-Smierci-Czesc-2.jpg';
import '../style/Header.css'
import Navigation from './Navigation';


const Header = () => {
    return (
        <>
            <img src={img} alt="hpo" />
            <h1>Harry Potter </h1>
            <nav className="nav">
                {<Navigation />}
            </nav>
        </>
    );
}

export default Header;
