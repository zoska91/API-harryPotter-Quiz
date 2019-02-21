import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CharachtersInfo from '../pages/CharachtersInfo';
import FindInHouse from '../pages/FindInHouse';
import GameHouse from '../pages/GameHouse';
import List from '../pages/List';
import Home from '../pages/Home';
import Error from '../pages/Error';


const Section = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/info" exact component={CharachtersInfo} />
                <Route path="/findInHouse" exact component={FindInHouse} />
                <Route path="/house" exact component={GameHouse} />
                <Route path="/list" exact component={List} />

                <Route exact component={Error} />
            </Switch>
        </>
    );
}

export default Section;