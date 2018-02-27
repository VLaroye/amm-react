import React from 'react';

// STYLES
import styles from './VideoPlayer.css';

const videoPlayer = (props) => {
    return (
        <div className={styles.VideoPlayerContainer} >
            <iframe  className={styles.VideoPlayer} src={props.src} title={props.title} frameBorder="0" allow="encrypted-media" allowFullScreen></iframe>
        </div>
    );
}

export default videoPlayer;