import React, { Component } from 'react';

// COMPONENTS
import Layout from './hoc/Layout/Layout';
import HomePage from './components/HomePage/HomePage';

// import styles from './App.module.css';

class App extends Component {

  render = () => {
    return (
      <Layout>
        <HomePage />
      </Layout>
    );
  }
}

export default App;
