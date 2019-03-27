import React, { Component } from "react";

import "../style/App.css";
import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";
import { BrowserRouter as Router } from "react-router-dom";

const key = "$2a$10$tE9Q/PpSuP7rQLFkrB2IOOcl.0ptM34qLwotYCBjL/p9DIL.o4pMK";
const url = new URL("https://www.potterapi.com/v1/characters/");
const params = { key: key };

// niestety tego nie rozumiem, znalazłam w internecie
Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

class App extends Component {
  state = {
    characters: []
  };

  componentDidMount() {
    fetch(url, { key: key })
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          characters: data
        });
      })
      .catch(function(error) {
        // Error handling
        console.log("There's an error with the API.");
      });
  }

  render() {
    const { characters } = this.state;

    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="app">
          <header>{<Header />}</header>

          <main>
            <section>{<Section characters={characters} />}</section>
          </main>

          <footer>{<Footer />}</footer>
        </div>
      </Router>
    );
  }
}

export default App;
