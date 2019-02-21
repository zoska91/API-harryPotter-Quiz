import React, { Component } from 'react';
import '../style/List.css'

class List extends Component {
    state = {
        list: this.props.characters,
        value: ''
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
        const value = this.state.value
        console.log(value)


        let result = listCharacters.filter(char => char.name.includes(value))
        console.log(result)

        this.setState({
            list: result
        })
        console.log(this.state.list)
    }

    render() {

        const list = this.state.list.map(li => (
            <li kay={li._id}>
                {li.name.toUpperCase()},  {li.house ? `${li.house},` : null} {li.role}, {li.school}
            </li>
        ))


        return (
            <div className='listPage' >

                <div className="title">
                    <p>List of Characters</p>
                    <h2>Start write!</h2>
                </div>


                <form className='search' onChange={this.handleSearch}>
                    <label htmlFor="value">

                    </label>
                    <input type="text" id="value" value={this.state.value} onChange={this.handleChange} />

                </form>

                <div className='answer'>
                    <ul>
                        {list}
                    </ul>
                </div>

            </div>
        );



    }
}

export default List;