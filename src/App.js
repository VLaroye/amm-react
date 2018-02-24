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
      },
      {
        page: 'l\'asso',
        path: '/'
      }
    ],
    isSideBarVisible: false
  }

  toggleSideBar = () => {
    this.setState({isSideBarVisible: !this.state.isSideBarVisible});
  }

  render() {
    return (
      <Layout 
        navItems={this.state.routes} 
        toggleSideBar={this.toggleSideBar}
        isSideBarVisible={this.state.isSideBarVisible}
      >
      </Layout>
    );
  }
}

export default App;
