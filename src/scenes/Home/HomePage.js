import React, { Component } from 'react';
import styled from 'styled-components';
import media from '../../mediaQueriesTemplate';

// IMAGES
import headerImg from '../../assets/HomePage/homePage-header.jpg';
import facebookLogo from '../../assets/Socials/facebook.png';
import instagramLogo from '../../assets/Socials/insta.png';
import userLogo from '../../assets/Socials/user.png';

// COMPONENTS
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import YoutubePlaylists from './components/YoutubePlaylists/YoutubePlaylists';

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

const SocialIcon = styled.a`

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

    ${media.tablet`
        order: 1;
        width: 30%;
    `}
`;

const EventDate = styled.p`
    font-weight: bold;
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
`;

const NextEventRightSection = styled.div`
    order: 1;
    width: 80%;
    margin: 1em 0 0 0;
    height: 20em;
    background-color: white;

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
                    <HeaderButton>
                        <h4>20 - 21 Juillet 2018</h4>
                        <h5>Steenvoorde</h5>
                        <h6>Mapping / 2 scènes <br/> Coin ciné</h6>
                    </HeaderButton>
                </Header>
                
                <Socials>
                    <SocialIcon>
                        <img src={facebookLogo} alt="Logo Facebook"/>
                    </SocialIcon>
                    <SocialIcon>
                        <img src={instagramLogo} alt="Logo Instagram"/>
                    </SocialIcon>
                    <SocialIcon>
                        <img src={userLogo} alt="Logo indiquant la page pour rejoiindre l'association"/>
                    </SocialIcon>
                </Socials>

                <EventAndYoutubeContainer>
                    <NextEventSection>
                        <SectionTitle>Events à venir</SectionTitle>
                        <NextEventSectionContainer>
                            <NextEventLeftSection>
                                <EventDate>28 Août</EventDate>
                                <EventDivider/>
                                <EventName>Tournoi de Mölkky</EventName>
                            </NextEventLeftSection>
                            <NextEventRightSection></NextEventRightSection>
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