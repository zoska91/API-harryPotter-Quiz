import React, { Component } from 'react';
import '../style/Aside.css'


// trzeba zrobic komponent klasowy, ktory liczy ilosc punktow



class Aside extends Component {
    state = {

        points: [
            {
                id: 0,
                name: "All points",
                count: 0,
            },
            {
                id: 1,
                name: "Guess the eye color",
                count: 0,
            },
            {
                id: 2,
                name: "Guess the hair color",
                count: 0,
            },
            {
                id: 3,
                name: "Guess the wood of the wand",
                count: 0,
            },
            {
                id: 4,
                name: "Guess house",
                count: 0,
            }

        ]
    }

    render() {

        const statistic = this.state.points.map(item => (

            <li key={item.key}>
                {item.name}: {item.count}
            </li>
        ))

        return (
            <div className="aside">
                <h3>Statistic:</h3>
                <ul className='nav-aside'>

                    {statistic}
                </ul>

            </div>
        );
    }
}

export default Aside;

