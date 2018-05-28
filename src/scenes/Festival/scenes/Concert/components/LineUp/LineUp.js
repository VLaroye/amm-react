import React, { Component } from 'react';
import styled from 'styled-components';

// FIREBASE 
import firebase from 'firebase';

// COMPONENTS
import Spinner from '../../../../../../components/Spinner/Spinner';
import LineUpElement from './LineUpElement/LineUpElement';

// IMAGES
import ferqli from '../../../../../../assets/LineUp/ferqli.jpg'

const Container = styled.section`
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
`;

class LineUp extends Component {

    state = {
        artists: [
            {
                name : 'Ferqli',
                imgSrc: ferqli,
                description: 'bla bla bla',
                links: {
                    fbLink: "http://facebook.com",
                },
                origin: 'France',
                style: 'House',
            }
        ],
        loading: false
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