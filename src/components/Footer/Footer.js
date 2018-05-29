import React from 'react';
import styled from 'styled-components';
import media from '../../mediaQueriesTemplate';

import { Link } from 'react-router-dom';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/fontawesome-free-solid';
import { faFacebook, faInstagram } from  '@fortawesome/fontawesome-free-brands';
// IMAGES 
import logo from '../../assets/Logo/logo.png';

const Container = styled.footer`
    padding: 1em 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: black;
    color: white;
`;

const Socials = styled.div`
    width: 25%;
    display: flex;
    justify-content: space-around;

    a {
        color: white;
        font-size: 2em;
    }
`;

const Logo = styled.img`
    height: 3em;
    width: 10%;
    display: none;

    ${media.desktop`
        width: 7%;
        display: block;
    `};
`;

const Links = styled.div`
    width: 25%;
    display: flex;
    justify-content: space-around;
    text-align: center;
    font-family: Ubuntu;

    a {
        text-decoration: none;
        color: inherit;
        padding: 0 0.3em;
    }

`;

const footer = () => (
    <Container>
        <Socials>
            <a href="https://www.facebook.com/AMM.artmassandmess">
                <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="http://instagram.com/amm_fest">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.facebook.com/events/2023571984585136/">
                <FontAwesomeIcon icon={faUserPlus} />
            </a>
        </Socials>
        <Links>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
        </Links>
        <Logo src={logo} />
    </Container>    
);

export default footer;