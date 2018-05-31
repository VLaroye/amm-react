import React, { Component } from 'react';
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
        height: 13em;
    `};
`;

const ContactInfos = styled.section`
    width: 80%;
    margin: 3em auto 0 auto;
    border: 1px solid lightgray;
    text-align: center;
    margin-bottom: 3em;
    font-family: 'Open Sans';

    h4 {
        font-family: Ubuntu;
        background-color: #af3f71;
        margin: 0;
        padding: 1em 0;
    }

    h4:nth-of-type(2) {
        background-color: #e67b73;
        color: white;
    }

    div {
        margin: 1em 0;
    }

    a {
        color: inherit;
        margin: 1em 0;
    }
`;

class Contact extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render() {
        return (
            <Container>
                <Header>
                </Header>
                <ContactInfos>
                    <h4>Mail</h4>
                    <p>art.mass.mess.contact@gmail.com</p>
                    <h4>Facebook</h4>
                    <div>
                        <a href="https://www.facebook.com/AMM.artmassandmess">Page Facebook AMM</a>
                    </div>
                </ContactInfos>
            </Container>
        )
    }
};

export default Contact;