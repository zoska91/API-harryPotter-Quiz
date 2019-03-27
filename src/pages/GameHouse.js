import React, { Component } from 'react';
import '../style/FindInHouse.css';
import '../style/GameHouse.css'
import imgG from '../img/g.png';
import imgH from '../img/h.png';
import imgR from '../img/r.png';
import imgS from '../img/s.png';

class GameHouse extends Component {
    state = {
        character: '',
        house: '',
        button: `let's start!`,
        result: '',

    }


    handleGetCharacter = () => {

        let listCharacters = [...this.props.characters]

        listCharacters = listCharacters.filter(char => char.house === 'Hufflepuff' || char.house === 'Gryffindor' || char.house === 'Slytherin' || char.house === 'Ravenclaw')

        const index = Math.floor(Math.random() * listCharacters.length);
        this.setState({
            character: listCharacters[index].name,
            house: listCharacters[index].house,
            button: 'try again!',
            result: ''
        })
    }



    handleChooseAnswer = (house) => {

        if (this.state.character === '') {
            this.setState({
                result: `First press: "let's start"!`
            })
        } else if (this.state.house === house) {
            this.setState({
                result: 'Good answer! Congratulation!'
            })
        } else {
            this.setState({
                result: `Wrog answer, but don't worry!`
            })
        }
    }



    render() {
        const { character, button, result } = this.state
        return (
            <div className="gameHousePage">


                <p>In which house is: </p>
                <p>{character}</p>

                <div className="buttons-house" >

                    <div className="button-house button-g" onClick={() => this.handleChooseAnswer("Gryffindor")}>
                        <img src={imgG} alt="logo-gryffindor" />
                        <p>Gryffindor</p>
                    </div>

                    <div className="button-house button-h" onClick={() => this.handleChooseAnswer('Hufflepuff')}>
                        <img src={imgH} alt="logo-hufflpuff" />
                        <p>Hufflepuff</p></div>

                    <div className="button-house button-r" onClick={() => this.handleChooseAnswer('Ravenclaw')}>
                        <img src={imgR} alt="logo-ravenclaw" />
                        <p>Ravenclaw</p>
                    </div>
                    <div className="button-house button-s" onClick={() => this.handleChooseAnswer('Slytherin')}>
                        <img src={imgS} alt="logo-slytherin" />
                        <p>Slytherin</p>
                    </div>
                </div>

                <div className="results">
                    <button onClick={this.handleGetCharacter}>
                        {button}
                    </button>
                </div>


                {result ? <div className="result">{result}</div> : null}


            </div>
        );
    }
}

export default GameHouse;