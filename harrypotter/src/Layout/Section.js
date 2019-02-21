import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CharachtersInfo from '../pages/CharachtersInfo';
import FindInHouse from '../pages/FindInHouse';
import GameHouse from '../pages/GameHouse';
import List from '../pages/List';
import Home from '../pages/Home';
import Error from '../pages/Error';




const Section = (props) => {


    const characters = props.characters
    return (

        <>

            <Switch>

                <Route path="/" exact component={Home} />
                <Route path="/info" exact component={() => <CharachtersInfo characters={characters} />} />
                <Route path="/findInHouse" exact component={() => <FindInHouse characters={characters} />} />
                <Route path="/house" exact component={() => <GameHouse characters={characters} />} />
                <Route path="/list" exact component={() => <List characters={characters} />} />

                <Route exact component={Error} />
            </Switch>
        </>
    );
}

export default Section;