import React, { Component } from 'react';
import '../style/FindInHouse.css';
import imgG from '../img/g.png';
import imgH from '../img/h.png';
import imgR from '../img/r.png';
import imgS from '../img/s.png';

class FindInHouse extends Component {

    state = {
        list: []
    }


    handleChooseHouse = (house) => {

        const listCharacters = [...this.props.characters]

        let result = listCharacters.filter(char => char.house === house)
        this.setState({
            list: result
        })

    }

    render() {

        const list = this.state.list.map(li => (
            <li key={li._id}>
                {li.name}
            </li>
        ))

        return (

            <div className="housePage">

                <div className="title">
                    <p>List character in house</p>
                    <h2>Choose one!</h2>
                </div>


                <div className="buttons-house" >

                    <div className="button-house button-g" onClick={() => this.handleChooseHouse("Gryffindor")}>
                        <img src={imgG} alt="logo-gryffindor" />
                        <p>Gryffindor</p>
                    </div>

                    <div className="button-house button-h" onClick={() => this.handleChooseHouse('Hufflepuff')}>
                        <img src={imgH} alt="logo-hufflpuff" />
                        <p>Hufflepuff</p></div>

                    <div className="button-house button-r" onClick={() => this.handleChooseHouse('Ravenclaw')}>
                        <img src={imgR} alt="logo-ravenclaw" />
                        <p>Ravenclaw</p>
                    </div>
                    <div className="button-house button-s" onClick={() => this.handleChooseHouse('Slytherin')}>
                        <img src={imgS} alt="logo-slytherin" />
                        <p>Slytherin</p>
                    </div>
                </div>

                <div className="list-characters-on-house">
                    <ul>{list}</ul>
                </div>

            </div>

        );
    }
}

export default FindInHouse;