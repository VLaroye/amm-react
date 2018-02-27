import React from 'react';

// COMPONENTS
import NavItem from '../NavItem/NavItem';
import BackDrop from '../../../UI/BackDrop/BackDrop';

// STYLES 
import styles from './SideBar.module.css';

const sideBar = (props) => {

    let classes = [styles.SideBar, styles.Close];

    if (props.isVisible) {
        classes = [styles.SideBar, styles.Open];
    }

    const navItems = props.navItems
        .map(item => {
            return (
                <NavItem 
                    style={styles.SideBarItem}
                    key={item.page} 
                    path={item.path}
                    toggleSideBar={props.toggleSideBar}
                >
                    {item.page}
                </NavItem>
            )
        });

    return (
        <div>
            <div className={classes.join(' ')} >
                <ul className={styles.SideBarItems} >
                    {navItems}
                </ul>
            </div> 
            {props.isVisible ? <BackDrop backDropClicked={props.toggleSideBar} /> : null}
        </div>
    );
}

export default sideBar;