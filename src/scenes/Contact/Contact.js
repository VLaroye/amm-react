import React from 'react';
import styled from 'styled-components';
import media from '../../mediaQueriesTemplate';

// IMAGES 
import headerBackground from '../../assets/Contact/header.jpg';

const Container = styled.div``;

const Header = styled.section`
    height: 7em;
    background-image: url(${headerBackground});
    background-size: cover;
    background-position: center;

    display: flex;
    justify-content: center;
    align-items: center;

    ${media.tablet`
        height: 13em;
    `};

    ${media.desktop`
        height: 20em;
    `};
`;

const HeaderButton = styled.button`
    font-family: Ubuntu;
    border: none;
    margin: 0 1em;
    background-color: #af3f71;
    min-height: 4em;
    font-weight: bold;
    text-transform: uppercase;
    padding: 0 0.7em;
`;

const ContactForm = styled.form``;

const contact = () => (
    <Container>
        <Header>
            <HeaderButton>rejoins-nous</HeaderButton>
            <HeaderButton>contacte-nous</HeaderButton>
        </Header>
        <ContactForm>
        </ContactForm>
    </Container>
);

export default contact;