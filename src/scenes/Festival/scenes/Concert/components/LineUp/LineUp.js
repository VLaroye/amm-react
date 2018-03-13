import React, { Component } from 'react';
import styled from 'styled-components';

// FIREBASE 
import firebase from 'firebase';

// COMPONENTS
import Spinner from '../../../../../../components/Spinner/Spinner';
import LineUpElement from './LineUpElement/LineUpElement';

const Container = styled.section`
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
`;

class LineUp extends Component {

    state = {
        artists: [],
        loading: true
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
        });
    }

    render() {

        if (this.state.loading) {
            return <Spinner />
        }

        const artists = this.state.artists
            .map((artist, index) => <LineUpElement key={ index } artist={artist} />);

        return (
            <Container>
                { artists }
            </Container>
        );
    }
}

export default LineUp;