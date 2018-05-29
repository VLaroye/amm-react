import React, { Component } from 'react';
import styled from 'styled-components';
import media from '../../../../../../../mediaQueriesTemplate';

import { Link } from 'react-router-dom';

const Container = styled.div`
    position: relative;
    width: 50%;
    min-height: 10em;

    ${media.desktop`
        width: 33.33333%;
    `}

    a {
        color: inherit;
    }
`;

const ArtistImg = styled.img`
    width: 100%;
    height: 100%;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: black;
    opacity: 0.5;
    height: 100%;
    width: 100%;
    transition: opacity 0.5s;

    &:hover {
        cursor: pointer;
        opacity: 0.2;
    }
`;

const Infos = styled.div`
    padding: 0.3em;
    text-align: center;
    position: absolute;
    min-width: 40%;
    bottom: 7%;
    left: 10%;
    background-color: white;
`;

const ArtistName = styled.h4`
    margin: 0;
    padding: 0;
    font-weight: bold;
    font-family: Ubuntu;
    text-transform: uppercase;
`;

const ArtistStyle = styled.p`
    margin: 0;
    font-family: 'Open Sans';
`;

class LineUpElement extends Component {
    render () {
        return (
            <Container>
                <Link to={`/artiste/${this.props.artist.name}`} >
                    <ArtistImg src={this.props.artist.imgSrc} />
                    <Overlay />
                    <Infos>
                        <ArtistName>{ this.props.artist.name }</ArtistName>
                        <ArtistStyle>{ this.props.artist.style }</ArtistStyle>
                    </Infos>
                </Link>
            </Container>
        );
    }
}

export default LineUpElement;