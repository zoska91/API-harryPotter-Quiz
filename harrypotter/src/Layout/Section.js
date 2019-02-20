import React from 'react';
import { BrowserRouter as Route } from 'react-router-dom';
import CharachtersInfo from '../pages/CharachtersInfo';
import GameColorEyes from '../pages/GameColorEyes';
import GameColorHair from '../pages/GameColorHair';
import GameHouse from '../pages/GameHouse';
import GameWand from '../pages/GameWand';
import Home from '../pages/Home';
import Error from '../pages/Error';



const Section = () => {
    return (
        <>
            <Route path="/" exact component={Home} />
            <Route path="/charachtersInfo" exact component={CharachtersInfo} />
            <Route path="/gameColorEyes" exact component={GameColorEyes} />
            <Route path="/gameColorHair" exact component={GameColorHair} />
            <Route path="/gameHouse" exact component={GameHouse} />
            <Route path="/gameWand" exact component={GameWand} />

            <Route exact component={Error} />
        </>
    );
}

export default Section;