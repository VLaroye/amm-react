import React from 'react';

// STYLES
import styles from './Socials.module.css';

// IMAGES
import facebookLogo from '../../../assets/Socials/facebook.png';
import instagramLogo from '../../../assets/Socials/insta.png';
import userLogo from '../../../assets/Socials/user.png';

const socials = (props) => {
    return (
        <section className={styles.Socials} >
            <a href="" className={styles.SocialIcon} >
                <img src={facebookLogo} alt="Logo Facebook"/>
            </a>
            <a href="" className={styles.SocialIcon} >
                <img src={instagramLogo} alt="Logo Instagram"/>
            </a>
            <a href="" className={styles.SocialIcon} >
                <img src={userLogo} alt="Logo indiquant la page pour rejoindre l'association"/>
            </a>
        </section>
    );
}

export default socials;