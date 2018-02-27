import React, { Component } from 'react';

// ROUTING
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// COMPONENTS
import Layout from './components/Layout/Layout';

// SCENES
import HomePage from './scenes/Home/HomePage';
import Festival from './scenes/Festival/Festival';
import Concert from './scenes/Festival/Concert/Concert';
import Mapping from './scenes/Festival/Mapping/Mapping';
import Contact from './scenes/Contact/Contact';

// import styles from './App.module.css';

class App extends Component {
  render = () => {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/festival" component={Festival} />
            <Route path="/festival/concert" component={Concert} />
            <Route path="/festival/mapping" component={Mapping} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
