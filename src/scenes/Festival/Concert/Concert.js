import React, { Component, Fragment } from 'react';

// COMPONENTS
import Header from '../components/Header/Header';

class Concert extends Component {
    render () {
        return (
            <Fragment>
                <Header />
                <div>Concert</div>
            </Fragment>
        );
    }
}

export default Concert;