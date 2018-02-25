import React from 'react';

// CONTAINERS
import Nav from '../../containers/Nav/Nav';

// COMPONENTS
import Footer from '../../components/Footer/Footer';

// STYLES
import styles from './Layout.module.css';

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