import React from 'react';

// COMPONENTS
import Header from './Header/Header';
import Socials from './Socials/Socials';

// STYLES
import styles from './HomePage.module.css';

const homePage = (props) => {
    return (
        <div>
            <Header />
            <Socials />

            <section className={styles.YoutubeVideo} >
                Youtube video
            </section>
        </div>
    );
}

export default homePage;