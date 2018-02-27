import React from 'react';

// STYLES 
import styles from './Footer.css';

// IMAGES
import logo from '../../../assets/Logo/logo.png';

const footer = (props) => {
    return (
        <footer className={styles.Footer} >
            <img src={logo} alt="AMM Logo" className={styles.FooterLogo} />
            <div className={styles.FooterLinks} >
                <a href="">Home</a>
                <a href="">Contact</a>
                <a href="">Terms of use</a>
            </div>
        </footer>
    );
}

export default footer