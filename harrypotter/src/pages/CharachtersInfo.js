import React, { Component } from 'react';
import '../style/CharachtersInfo.css';


const key = '$2a$10$tE9Q/PpSuP7rQLFkrB2IOOcl.0ptM34qLwotYCBjL/p9DIL.o4pMK';
const url = new URL('https://www.potterapi.com/v1/characters/');
const params = { key: key, }

// niestety tego nie rozumiem, znalazłam w internecie
Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))


class CharachtersInfo extends Component {
    state = {
        characters: [],
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
        console.log(this.state.characters)

        const listCharacters = [...this.state.characters]

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
                    house: ''
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

