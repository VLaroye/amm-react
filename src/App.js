import React, { Component } from 'react';

// ROUTING
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// COMPONENTS
import Layout from './hoc/Layout/Layout';
import HomePage from './containers/HomePage/HomePage';
import Festival from './components/Festival/Festival';

// import styles from './App.module.css';

class App extends Component {
  render = () => {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path ="/festival" component={Festival} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
