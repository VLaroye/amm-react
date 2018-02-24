import React from 'react';

import NavBar from './NavBar/NavBar';
import SideBar from './SideBar/SideBar';

const nav = (props) => {
    return (
        <header>
            <nav>
                <NavBar 
                    navItems={props.navItems} 
                    toggleSideBar={props.toggleSideBar}    
                />
                <SideBar 
                    navItems={props.navItems}
                    toggleSideBar={props.toggleSideBar}
                    isVisible={props.isSideBarVisible}     
                />
            </nav>
        </header>
    );
}

export default nav;