import React from 'react';

// CONTAINERS
import Nav from './Navigation/Nav';

// COMPONENTS
import Footer from './Footer/Footer';

// STYLES
import styles from './Layout.css';

const layout = (props) => {
    return (
        <div>
            <Nav/>
            
            <div className={styles.Content}>
                { props.children }
            </div>
            
            <Footer />
        </div>
    );
}

export default layout;