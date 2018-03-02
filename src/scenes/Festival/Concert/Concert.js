import React, { Component, Fragment } from 'react';

// COMPONENTS
import Header from '../components/Header/Header';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import LineUp from './components/LineUp/LineUp';

// STYLES
import styles from './Concert.css';

class Concert extends Component {
    render () {
        return (
            <Fragment>
            
                <Header />

                <section>
                    <SectionTitle>Line up</SectionTitle>
                    <LineUp />
                </section>
            
            </Fragment>
        );
    }
}

export default Concert;