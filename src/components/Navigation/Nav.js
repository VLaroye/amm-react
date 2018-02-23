import React from 'react';

import NavBar from './NavBar/NavBar';
// import SideBar from './SideBar/SideBar';

const nav = (props) => {
    return (
        <header>
            <nav>
                <NavBar navItems={props.navItems} />
            </nav>
        </header>
    );
}

export default nav;