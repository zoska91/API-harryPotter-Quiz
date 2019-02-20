import React, { Component } from 'react';

import '../style/App.css';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';
import Aside from './Aside'
import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">

          <header>
            {<Header />}
          </header>

          <main>
            <section>
              {<Section />}
            </section>,

            <aside>
              {<Aside />}
            </aside>
          </main>

          <footer>
            {<Footer />}
          </footer>

        </div>

      </Router>

    );
  }
}

export default App;
