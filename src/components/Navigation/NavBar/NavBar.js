// REACT
import React from 'react';

// COMPONENTS
import NavItem from '../NavItem/NavItem';

// STYLES
import styles from './NavBar.module.css';

// IMAGE 
import logo from '../../../assets/logo.png';

const navBar = (props) => {

    const navItems = props.navItems
        .map(item => {
            return (
                <NavItem 
                    style={styles.NavItem}
                    key={item.page} 
                    path={ item.path }
                >
                    {item.page}
                </NavItem>
            )
        });

    return (
        <div className={ styles.NavBar } >
            <div className={ styles.NavLogo }>
                <img src={logo} alt="Logo"/>
            </div>
            <ul className={ styles.NavMenu } >
                {navItems}
            </ul>
            <p 
                className={styles.SideBarToggler}
                onClick={props.toggleSideBar}    
            >
                Toggle
            </p>
        </div>
    );
}

export default navBar;