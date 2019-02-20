import React from 'react';
import img from '../img/298247_635816973099012_1104127109_n.jpg';
import '../style/Header.css'
import Navigation from './Navigation';


const Header = () => {
    return (
        <>
            <img src={img} alt="hpo" />
            <h1>Harry Potter Quiz</h1>
            <nav className="nav">
                {<Navigation />}
            </nav>
        </>
    );
}

export default Header;
