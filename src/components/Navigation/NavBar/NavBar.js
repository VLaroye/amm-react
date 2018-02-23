// REACT
import React from 'react';

// COMPONENTS
import NavItem from '../NavItem/NavItem';

// STYLES
import styles from './NavBar.module.css';

const navBar = (props) => {

    const navItems = props.navItems
        .map(item => {
            return <NavItem key={item.page} path={ item.path }>{item.page}</NavItem>
        })

    return (
        <div className={ styles.NavBar } >
            <p>Logo</p>
            <ul>
                {navItems}
            </ul>
        </div>
    );
}

export default navBar;