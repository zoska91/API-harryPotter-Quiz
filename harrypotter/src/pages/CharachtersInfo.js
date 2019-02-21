import React, { Component } from 'react';
import '../style/CharachtersInfo.css';


class CharachtersInfo extends Component {
    state = {
        value: '',
        role: '',
        house: '',
        name: ''
    }

    handleChange = (e) => {

        const value = e.target.value;
        this.setState({
            value
        })

    }

    handleSearch = e => {

        e.preventDefault();
        const listCharacters = [...this.props.characters]
        console.log(listCharacters)

        listCharacters.forEach(char => {
            if (char.name.toLowerCase() === this.state.value.toLowerCase()) {

                this.setState({
                    name: char.name,
                    role: char.role,
                    house: char.house,
                    value: ''
                })

            } else {
                this.setState({
                    name: 'not found',
                    role: 'try again!',
                    house: '',
                    value: ''
                })
            }

        })
    }

    render() {

        const { name, house, role } = this.state;

        return (
            <div className='infoPage'>

                <div className="title">
                    <p>Informations about characters</p>
                    <h2>Find your favorites!</h2>
                </div>


                <form className='search' onSubmit={this.handleSearch}>
                    <label htmlFor="value">
                        Give name:
                    </label>
                    <input type="text" id="value" value={this.state.value} onChange={this.handleChange} />

                    <button>search</button>

                </form>

                <div className='answer'>
                    <h4>{name}</h4>
                    <p>{role}</p>
                    <p>{house}</p>
                </div>

            </div>
        );
    }
}

export default CharachtersInfo;

