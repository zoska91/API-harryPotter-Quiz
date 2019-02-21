import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/Navigation.css'



const list = [

    { name: "start", path: "/", exact: true },
    { name: "information about characters", path: "info" },
    { name: "List of characters", path: "list" },
    { name: "Find in house", path: "findInHouse" },
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
