import React from 'react';

// STYLES 
import styles from './SectionTitle.css';

const sectionTitle = (props) => {
    return (
        <h3 className={styles.SectionTitle} >{props.children}</h3>
    )
}

export default sectionTitle;