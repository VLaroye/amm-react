import React from 'react';

// STYLES
import styles from './VideoPlayer.module.css';

const videoPlayer = (props) => {
    return (
        <iframe  className={styles.VideoPlayer} src={props.src} title="Video Youtube page d'accueil" frameBorder="0" allow="encrypted-media" allowFullScreen></iframe>
    );
}

export default videoPlayer;