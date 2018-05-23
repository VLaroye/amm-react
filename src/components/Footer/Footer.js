import React from 'react';
import styled from 'styled-components';
import media from '../../mediaQueriesTemplate';

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
    width: 15%;
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
            <a href="">
                <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="">
                <FontAwesomeIcon icon={faUserPlus} />
            </a>
        </Socials>
        <Links>
            <a href="">Home</a>
            <a href="">Contact</a>
            <a href="">Terms of use</a>
        </Links>
        <Logo src={logo} />
    </Container>    
);

export default footer;