import React from 'react';

// CONTAINERS
import Nav from '../../containers/Nav/Nav';

// STYLES
import styles from './Layout.module.css';

const layout = (props) => {
    return (
        <div>
            <Nav/>
            
            <div className={styles.Content}>
                { props.children }
            </div>
            <footer>
                <h3>Footer</h3>
            </footer>
        </div>
    );
}

export default layout;