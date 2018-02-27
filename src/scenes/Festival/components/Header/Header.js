import React, { Fragment } from 'react';

// ROUTING
import { Link } from 'react-router-dom';

// STYLES
import styles from './Header.css';

const header = () => (
    <Fragment>
        <div className={styles.Header} >
            <Link to="/festival/concert" className={[styles.ConcertLink, styles.HeaderLinks].join(' ')}>
                <p className={styles.HeaderLink} >Concert</p>
            </Link>
            <Link to="/festival/mapping" className={[styles.MappingLink, styles.HeaderLinks].join(' ')}>
                <p className={styles.HeaderLink} >Mapping</p>
            </Link>
        </div>
    </Fragment>
);

export default header;