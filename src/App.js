import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';

// import styles from './App.module.css';

class App extends Component {

  state = {
    routes: [
      {
        page: 'home',
        path: '/'
      },
      {
        page: 'le fest',
        path:'/'
      }
    ]
  }

  render() {
    return (
      <Layout navItems={this.state.routes} >
      </Layout>
    );
  }
}

export default App;
