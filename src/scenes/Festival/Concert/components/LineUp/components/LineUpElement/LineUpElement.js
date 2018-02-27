import React from 'react';

// STYLES
import styles from './LineUpElement.css';


const lineUpElement = (props) => (
    <div className={styles.LineUpElement} >
        <img src={props.artist.imgSrc} alt="" className={styles.LineUpElementImg} />
        <div className={styles.LineUpElementOverlay} ></div>
        <div className={styles.LineUpElementInfos} >
            <p> {props.artist.name} </p>
        </div>
    </div>
);

export default lineUpElement;