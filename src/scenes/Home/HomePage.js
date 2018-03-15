import React, { Component } from 'react';
import styled from 'styled-components';

// IMAGES
import headerImg from '../../assets/HomePage/homePage-header.jpg';
import facebookLogo from '../../assets/Socials/facebook.png';
import instagramLogo from '../../assets/Socials/insta.png';
import userLogo from '../../assets/Socials/user.png';

// COMPONENTS
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
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

const Socials = styled.section`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 50%;
    margin: 1em auto;  
`;

const SocialIcon = styled.a`

    img {
        max-width: 100%;
    }
`;

const EventAndYoutubeContainer = styled.div`
    display: flex;
`;

const NextEventSection = styled.section`
    width: 50%;

    h3 {
        border: 2px solid black;
        border-collapse: collapse;
    }
`;

const YoutubePlaylistSection = styled.section`
    width: 50%;
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
                        <SectionTitle>Prochain Event</SectionTitle>
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