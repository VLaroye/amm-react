import React from 'react';

// STYLES
import styles from './Header.module.css';

// IMAGES
import headerImage from '../../../assets/HomePage/homePage-header.jpg';

const header = (props) => {
    return (
        <section className={styles.Header} >
            <img src={headerImage} alt="Jumo sur la scène du AMM Fest, 2ème édition"/>
        </section>
    );
}

export default header;