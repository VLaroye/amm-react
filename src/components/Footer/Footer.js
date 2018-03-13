import React from 'react';
import styled from 'styled-components';

// IMAGES 
import logo from '../../assets/Logo/logo.png';

const Container = styled.footer`
    min-height: 20vh;
    background-color: black;
    color: white;
`;

const Logo = styled.img`
    max-width: 30%;
    display: block;
    margin: auto;
`;

const Links = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    padding-bottom: 1em;

    a {
        text-decoration: none;
        color: inherit;
        padding: 0 0.5em;
        
        &:nth-child(1), &:nth-child(2) {
            border-right: 1px solid white;
        }
    }

`;

const footer = () => (
    <Container>
        <Logo src={logo} />
        <Links>
            <a href="">Home</a>
            <a href="">Contact</a>
            <a href="">Terms of use</a>
        </Links>
    </Container>    
);

export default footer;