import React, { Component } from 'react';
import styled from 'styled-components';
import media from '../../mediaQueriesTemplate';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/fontawesome-free-brands';


// IMAGES
import headerImg from '../../assets/HomePage/homePage-header.jpg';
import facebookLogo from '../../assets/Socials/facebook.png';
import instagramLogo from '../../assets/Socials/insta.png';
import userLogo from '../../assets/Socials/user.png';
import nextEvent from '../../assets/HomePage/next-event.jpg';

// COMPONENTS
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import YoutubePlaylists from './components/YoutubePlaylists/YoutubePlaylists';
import { Link } from 'react-router-dom';

const Header = styled.section`
    position: relative;
    max-height: 70vh;
    overflow: hidden;

    img {
        width: 100%;
    }
`;

const HeaderButton = styled.button`
    position: absolute;
    border: none;
    text-transform: uppercase;
    bottom: 15%;
    left: 5%;
    padding: 2%;    

    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#e88c6b+0,e88c6b+28,ad426c+100 */
    background: #e88c6b; /* Old browsers */
    background: -moz-linear-gradient(top, #e88c6b 0%, #e88c6b 28%, #ad426c 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, #e88c6b 0%,#e88c6b 28%,#ad426c 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, #e88c6b 0%,#e88c6b 28%,#ad426c 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e88c6b', endColorstr='#ad426c',GradientType=0 ); /* IE6-9 */

    h4, h5 {
        text-align: left;
        margin: 0;
        color: white;
        font-family: Ubuntu;
    }

    h4 {
        font-size: 1.5em;
    }

    h5 {
        font-size: 1.1em;
    }

    h6 {
        font-size: 1em;
        color: #723149;
        margin: 0.2em 0 0 0;
        text-align: left;
        font-family: Ubuntu;
    }

    ${media.tablet`
        bottom: 20%;
        left: 6%;
        width: 40%;
        min-height: 30%;

        h4{
            font-size: 2em;
        }

        h5 {
            font-size: 1.5em;
        }

        h6 {
            font-size: 1.2em;
        }
    `}
`;

const Socials = styled.section`
    text-align: center;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 50%;
    margin: 1em auto;  
`;

const SocialIcon = styled.div`

    img {
        max-width: 80%;
    }
`;

const EventAndYoutubeContainer = styled.div`
`;

const NextEventSection = styled.section`
    width: 100%;
    
    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#e88c6b+0,e88c6b+28,ad426c+100 */
    background: #e88c6b; /* Old browsers */
    background: -moz-linear-gradient(top, #e88c6b 0%, #e88c6b 28%, #ad426c 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, #e88c6b 0%,#e88c6b 28%,#ad426c 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, #e88c6b 0%,#e88c6b 28%,#ad426c 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e88c6b', endColorstr='#ad426c',GradientType=0 ); /* IE6-9 */


    h3 {
        color: white;
        background-color: black;
    }
`;

const NextEventSectionContainer = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    min-height: 25em;

    ${media.tablet`
        flex-flow: initial;
    `}
`;

const NextEventLeftSection = styled.div`
    order: 2;
    width: 80%;
    margin: 1em 0;
    display: flex;
    flex-flow: column;

    #socials {
        margin-top: 0.5em;
    }

    ${media.tablet`
        order: 1;
        width: 30%;
    `}
`;

const EventDate = styled.p`
    font-weight: bold;
    font-family: Ubuntu;
    font-size: 1.7em;
    margin: 0;
    text-transform: uppercase;
`;

const EventDivider = styled.hr`
    height: 0.1em;
    border-radius: 10px;
    width: 100%;
    background-color: white;
`;

const EventName = styled.h4`
    margin: 0;
    font-size: 1.8em;
    font-family: 'Open Sans';
`;

const NextEventRightSection = styled.div`
    order: 1;
    width: 80%;
    margin: 1em 0 1em 0;

    img {
        border: 1px solid black;
        width: 100%;
        height: 100%;
    }

    ${media.tablet`
        order: 2;
        width: 35%;
    `}
`;

const YoutubePlaylistSection = styled.section`
    width: 100%;
`;

class HomePage extends Component {

    state = {
        youtubeVideoSrc: 'https://www.youtube.com/watch?v=vaVcFzGrwgw',
        youtubeVideoTitle: 'Video Youtube - Playlist de la semaine'
    }

    render() {
        return(
            <div>
                <Header>
                    <img src={headerImg} alt="Jumo sur la scène du AMM Fest numéro 3"/>
                    <Link to="/festival/concert">
                        <HeaderButton>
                            <h4>20 - 21 Juillet 2018</h4>
                            <h5>Steenvoorde</h5>
                            <h6>Mapping / 2 scènes <br/> Coin ciné</h6>
                        </HeaderButton>
                    </Link>
                </Header>
                
                <Socials>
                    <SocialIcon>
                        <a href="https://www.facebook.com/AMM.artmassandmess">
                            <img src={facebookLogo} alt="Logo Facebook"/>
                        </a>
                    </SocialIcon>
                    <SocialIcon>
                        <a href="http://instagram.com/amm_fest">
                            <img src={instagramLogo} alt="Logo Instagram"/>
                        </a>
                    </SocialIcon>
                    <SocialIcon>
                        <a href="https://www.facebook.com/events/2023571984585136/">
                            <img src={userLogo} alt="Logo indiquant la page pour rejoiindre l'association"/>
                        </a>
                    </SocialIcon>
                </Socials>

                <EventAndYoutubeContainer>
                    <NextEventSection>
                        <SectionTitle>événements à venir</SectionTitle>
                        <NextEventSectionContainer>
                            <NextEventLeftSection>
                                <EventDate>15 Juin - DIY (Lille)</EventDate>
                                <EventDivider/>
                                <EventName>AMM Bier + Concert</EventName>
                                <div id="socials">
                                    <a href="https://www.facebook.com/events/423793358048423/">
                                        <FontAwesomeIcon icon={faFacebook} size="3x" color="white"/>
                                    </a>
                                </div>
                            </NextEventLeftSection>
                            <NextEventRightSection>
                                <img src={nextEvent} alt="Bandeau prochain evenement"/>
                            </NextEventRightSection>
                            
                        </NextEventSectionContainer>
                    </NextEventSection>

                    <YoutubePlaylistSection>
                        <YoutubePlaylists/>
                    </YoutubePlaylistSection>
                </EventAndYoutubeContainer>
            </div>
        );
    }
}

export default HomePage;