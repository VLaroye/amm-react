import React, { Fragment } from 'react';

// ROUTING
import { Link } from 'react-router-dom';

// STYLES
import styles from './Header.css';

const header = () => (
    <Fragment>
        <div className={styles.Header} >
            <Link to="/festival/concert" className={[styles.ConcertLink, styles.HeaderLinks].join(' ')}>
                <h2 className={styles.HeaderLink} >Concert</h2>
            </Link>
            <Link to="/festival/mapping" className={[styles.MappingLink, styles.HeaderLinks].join(' ')}>
                <h2 className={styles.HeaderLink} >Mapping</h2>
            </Link>
        </div>
    </Fragment>
);

export default header;