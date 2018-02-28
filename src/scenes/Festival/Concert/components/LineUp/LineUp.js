import React, { Component } from 'react';

// COMPONENTS
import LineUpElement from './components/LineUpElement/LineUpElement';

// FIREBASE
import firebase from 'firebase';

// STYLES
import styles from './LineUp.css';

class LineUp extends Component {

    state = {
        artists: [],
        loading: true,
        errors: null
    }

    componentDidMount() {
        var database = firebase.database();
        let artists = {...this.state.artists};        
        var artistsRef = database.ref('/artists');

        artistsRef.once('value')
            .then(data => {
                artists = data.val();
                this.setState({
                    artists,
                    loading: false
                })
        })};

    render() {

        if (this.state.loading) {
            return <div>LOADING</div>
        }

        const artists = this.state.artists
            .map((artist, index) => <LineUpElement key={ index } artist={artist} />);

        return (
            <section className={styles.LineUp} >
                { artists }
            </section>
        );
    }
}

export default LineUp;