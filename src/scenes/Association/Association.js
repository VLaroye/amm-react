import React from 'react';
import styled from 'styled-components';
import media from '../../mediaQueriesTemplate';

// COMPONENTS
import SectionTitle from '../../components/SectionTitle/SectionTitle';

// IMAGES
import logo from '../../assets/Logo/logo_pres.png';
import molkky from '../../assets/Asso/Molkky.JPG';
import cineSoupe from '../../assets/Asso/cinesoupe.png';
import expoConcert from '../../assets/Asso/expoConcert.png';
import equipe from '../../assets/Asso/equipe.jpg';

const PresentationSection = styled.section`    
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;

    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#e88c6b+0,e88c6b+28,ad426c+100 */
    background: #e88c6b; /* Old browsers */
    background: -moz-linear-gradient(left, #e88c6b 0%, #e88c6b 28%, #ad426c 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(left, #e88c6b 0%,#e88c6b 28%,#ad426c 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to top-right, #e88c6b 15%,#e88c6b 30%,#ad426c 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e88c6b', endColorstr='#ad426c',GradientType=0 ); /* IE6-9 */

    .logo {
        text-align: center;
        width: 70%;
        padding: 5% 0;

        img {
            max-width: 100%;
        }
    }

    .presentation {

        h3 {
            font-family: Ubuntu;
            width: 90%;
            margin: 0;
            font-size: 2em;
        }

        p {
            text-align: justify;
        }

        font-family: 'Open Sans';
        max-width: 80%;
        margin: auto;
        padding: 0.5em 0;
    }

    ${media.tablet`
        flex-flow: initial;
        justify-content: space-between;

        .logo {
            width: 40%;
            margin: auto;
        }

        .presentation {
            width: 40%;
        }
    `}

    ${media.desktop`
        .logo {
            width: 25%;
            margin: auto;
        }

        .presentation {
            width: 30%;
        }
    `}
`;

const EventsSection = styled.section`
        margin-bottom: 2em;
`;

const EventsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const EventDiv = styled.div`
    width: 50%;
    position: relative;

    .title {
        position: absolute;
        bottom: 10%;
        left: 5%;
        background-color: white;

        h4 {
            padding: 0.5em;
            font-family: Ubuntu;
            display: inline-block;
            margin: 0;
        }
    }

    img {
        width: 100%;
        height: 100%;
    }

    ${media.tablet`
        width: 33.333%;
    `}

    ${media.desktop`
        width: 25%;
    `}
`;

const TeamSection = styled.section`
    text-align: center;
    h3 {
        background-color: black;
        color: white;
    }

    img {
        width: 100%;
    }

    ${media.desktop`
        img {
            width: 70%;
        }
    `}
`;

const association = () => (
    <div>
        <PresentationSection>
            <div className="logo">
                <img src={logo}/>
            </div>
            <div className="presentation">
                <h3>Art, Mass & Mess</h3>
                <p> Forte de ses trois années d’expériences, l’association AMM propose une nouvelle approche de la culture en proposant des événements hybrides et originaux.</p>

                <p>Concerts, expositions, spectacles, activités sportives, AMM touche tous les publics par le biais de manifestations variées organisés dans notre belle Flandre. </p>
            </div>
        </PresentationSection>
        <EventsSection>
            <SectionTitle>Nos events</SectionTitle>
            <EventsContainer>
                <EventDiv>
                    <img src={molkky}/>
                    <div className="title">    
                        <h4>Tournoi de Mölkky</h4>
                    </div>
                </EventDiv>
                <EventDiv>
                    <img src={expoConcert}/>
                    <div className="title">
                        <h4>Expo Concert</h4>
                    </div>
                </EventDiv>
                <EventDiv>
                    <img src={cineSoupe}/>
                    <div className="title">
                        <h4>Ciné Soupe</h4>
                    </div>
                </EventDiv>
            </EventsContainer>
        </EventsSection>
        <TeamSection>
            <SectionTitle>L'équipe</SectionTitle>
            <img src={equipe}/>
        </TeamSection>
    </div>
);

export default association;