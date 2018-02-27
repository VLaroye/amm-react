import React, { Component, Fragment } from 'react';

// COMPONENTS
import Header from '../components/Header/Header';
import LineUp from './components/LineUp/LineUp';

// STYLES
import styles from './Concert.css';

class Concert extends Component {
    render () {
        return (
            <Fragment>
            
                <Header />

                <section>
                    <h3 className={styles.SectionTitle} >Line up</h3>
                    <LineUp />
                </section>
            
            </Fragment>
        );
    }
}

export default Concert;