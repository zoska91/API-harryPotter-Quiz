import React, { Component } from 'react';
import '../style/CharachtersInfo.css';


class CharachtersInfo extends Component {
    state = {
        value: '',
        role: '',
        house: '',
        name: '',
        message: ''
    }

    handleChange = (e) => {

        const value = e.target.value;
        this.setState({
            value
        })

    }

    handleSearch = e => {

        e.preventDefault();
        let listCharacters = [...this.props.characters]
        const value = this.state.value.toUpperCase();

        listCharacters = listCharacters.map(li => ({

            name: li.name.toUpperCase(),
            house: li.house,
            school: li.school,
            role: li.role,
            id: li._id

        }))

        listCharacters.forEach(char => {
            if (char.name === value) {

                this.setState({
                    name: char.name,
                    role: char.role,
                    house: char.house,
                    // value: ''
                })

            } else {
                console.log(char.name)
                console.log(value)
                this.setState({
                    message: 'no results... try again!'
                })
            }

        })
    }

    render() {

        const { message, name, house, role } = this.state;

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
                    {name ? null : <p>{message}</p>}
                </div>

            </div>
        );
    }
}

export default CharachtersInfo;

