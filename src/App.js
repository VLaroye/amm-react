import React, { Component } from 'react';

// ROUTING
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// COMPONENTS
import Layout from './components/Layout/Layout';
import HomePage from './scenes/Home/HomePage';

// import styles from './App.module.css';

class App extends Component {
  render = () => {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
