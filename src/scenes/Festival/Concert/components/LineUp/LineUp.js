import React, { Component } from 'react';

// IMAGES
import ferqli from '../../../../../assets/LineUp/ferqli.jpg';
import rocta from '../../../../../assets/LineUp/rocta.jpg';

// COMPONENTS
import LineUpElement from './components/LineUpElement/LineUpElement';

// STYLES
import styles from './LineUp.css';

class LineUp extends Component {

    state = {
        artists: [
            {
                id: 1,
                name: 'Ferqli',
                imgSrc: ferqli, 
                style: 'House',
                description: 'Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla',
                origin: 'France'
            },
            {
                id: 2,
                name: 'Rocta',
                imgSrc: rocta, 
                style: 'Electro',
                description: 'Ble ble ble bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla',
                origin: 'France'
            }
        ]
    }

    render() {

        const artists = this.state.artists
            .map(artist => <LineUpElement key={ artist.id } artist={artist} />);

        return (
            <section className={styles.LineUp} >
                { artists }
            </section>
        );
    }
}

export default LineUp;