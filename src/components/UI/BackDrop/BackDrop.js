import React from 'react';

// STYLES
import styles from './BackDrop.module.css';

const backDrop = (props) => {
    return (
        <div 
            onClick={props.backDropClicked}
            className={styles.BackDrop} 
        >
        </div>
    );
}

export default backDrop;