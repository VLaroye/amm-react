import React, { Component } from 'react';

import NavBar from './NavBar/NavBar';
import SideBar from './SideBar/SideBar';

class Nav extends Component {

    state = {
        routes: [
          {
            page: 'home',
            path: '/'
          },
          {
            page: 'le fest',
            path:'/festival'
          },
          {
            page: 'l\'asso',
            path: '/'
          },
          {
            page: 'galerie',
            path: '/'
          },
          {
            page: 'contact',
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
            <header>
                <nav>
                    <NavBar 
                        navItems={this.state.routes} 
                        toggleSideBar={this.toggleSideBar}    
                    />
                    <SideBar 
                        navItems={this.state.routes}
                        toggleSideBar={this.toggleSideBar}
                        isVisible={this.state.isSideBarVisible}     
                    />
                </nav>
            </header>
        );
    }
}

export default Nav;