import React from 'react';

// STYLES
import styles from './HomePage.module.css';

// IMAGES
import headerImage from '../../assets/HomePage/homePage-header.jpg';
import facebookLogo from '../../assets/Socials/facebook.png';
import instagramLogo from '../../assets/Socials/insta.png';
import userLogo from '../../assets/Socials/user.png';

const homePage = (props) => {
    return (
        <div>
            <section className={styles.Header} >
                <img src={headerImage} alt="Jumo sur la scène du AMM Fest, 2ème édition"/>
            </section>

            <section className={styles.Socials} >
                <a href="">
                    <img src={facebookLogo} alt="Logo Facebook"/>
                </a>
                <a href="">
                    <img src={instagramLogo} alt="Logo Instagram"/>
                </a>
                <a href="">
                    <img src={userLogo} alt="Logo indiquant la page pour rejoindre l'association"/>
                </a>
            </section>

            <section className={styles.YoutubeVideo} >
                Youtube video
            </section>
        </div>
    );
}

export default homePage;