import React, { Component } from 'react';
import styled from 'styled-components';

// COMPONENTS
import Spinner from '../../../../../../components/Spinner/Spinner';
import LineUpElement from './LineUpElement/LineUpElement';

// IMAGES
import ferqli from '../../../../../../assets/LineUp/ferqli.jpg'
import tooMany from '../../../../../../assets/LineUp/tooMany.jpeg'
import madben from '../../../../../../assets/LineUp/madben.jpg'
import le77 from '../../../../../../assets/LineUp/77.jpg'
import thk from '../../../../../../assets/LineUp/thk.jpg'
import contrefacon from '../../../../../../assets/LineUp/contrefacon.jpg'
import bellaire from '../../../../../../assets/LineUp/bellaire.JPG'
import liquidators from '../../../../../../assets/LineUp/liquidators.jpg'
import parengo from '../../../../../../assets/LineUp/parengo.jpg'
import rocta from '../../../../../../assets/LineUp/rocta.jpg'
import sass from '../../../../../../assets/LineUp/sass.jpg'
import rocMartin from '../../../../../../assets/LineUp/rocMartin.jpg'

const Container = styled.section`
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
`;

class LineUp extends Component {
    // Ordre artistes : Madben, 77, Too many, THK, CTRFN, Bellaire, Liquidatros, octave parengo, rocta, ferqli, sass, roc martin
    state = {
        artists: [
            {
                name: 'Madben',
                imgSrc: madben,
                description: '',
                links: {},
                origin: 'France',
                style: 'Techno',
            },
            {
                name: 'Le 77',
                imgSrc: le77,
                description: '',
                links: {},
                origin: 'Belgique',
                style: 'Rap',
            },
            {
                name: 'Too Many T\'s',
                imgSrc: tooMany,
                description: 'bla bla bla',
                links: {
                    fbLink: "http://facebook.com",
                },
                origin: 'France',
                style: 'House',
            },
            {
                name: 'Tetra Hydro K',
                imgSrc: thk,
                description: '',
                links: {},
                origin: 'France',
                style: 'Dub',
            },
            {
                name: 'Contrefaçon',
                imgSrc: contrefacon,
                description: '',
                links: {},
                origin: 'France',
                style: '',
            },
            {
                name: 'Bellaire',
                imgSrc: bellaire,
                description: '',
                links: {},
                origin: 'France',
                style: '',
            },
            {
                name: 'The liquidators',
                imgSrc: liquidators,
                description: '',
                links: {},
                origin: '',
                style: '',
            },
            {
                name: 'Octave Parengo',
                imgSrc: parengo,
                description: '',
                links: {},
                origin: '',
                style: '',
            },
            {
                name: 'Rocta',
                imgSrc: rocta,
                description: '',
                links: {},
                origin: 'France',
                style: '',
            },
            {
                name : 'Ferqli',
                imgSrc: ferqli,
                description: 'bla bla bla',
                links: {
                    fbLink: "http://facebook.com",
                },
                origin: 'France',
                style: 'House',
            },
            {
                name: 'S.A.A.S.',
                imgSrc: sass,
                description: `Suite à sa formation et à la sortie de son premier EP en 2013, Science Against
                Spheric Silence part sur les routes (principalement du nord de la France) histoire
                de faire de la musique et de rencontrer des gens.
                Un tout petit peu influencé par des groupes comme Explosions in the Sky ou
                encore ASIWYFA, le groupe joue un post-math rock à la fois brutal et vaporeux.
                Adepte du manque de paroles, de la grosse distorsion et de la reverbération
                delayée, il aime mêler les influences sans trop se poser de questions.
                En 2016, SASS sort son tout premier album, Layers, qu&#39;il s&#39;apprête à défendre
                sur scène.`,
                links: {},
                origin: 'France',
                style: '',
            },
            {
                name: 'Roc Martin',
                imgSrc: rocMartin,
                description: '',
                links: {},
                origin: '',
                style: '',
            },
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