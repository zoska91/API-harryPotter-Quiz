import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/Navigation.css'



const list = [

    { name: "start", path: "/", exact: true },
    { name: "information about characters", path: "info" },
    { name: "Guess the eye color", path: "colorEyes" },
    { name: "Guess the hair color", path: "colorHair" },
    { name: "Guess the wood of the wand", path: "wand" },
    { name: "Guess house", path: "house" },

]


const Navigation = () => {

    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
        </li>
    ))

    return (
        <ul>
            {menu}
        </ul>
    );
}

export default Navigation;
