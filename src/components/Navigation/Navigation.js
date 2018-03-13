import React, { Component } from 'react';

// COMPONENTS
import TopBar from './TopBar/TopBar';
import SideBar from './SideBar/SideBar';

class Navigation extends Component {

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
              path: '/asso'
            },
            {
              page: 'galerie',
              path: '/galerie'
            },
            {
              page: 'contact',
              path: '/contact'
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
                    <TopBar 
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

export default Navigation;