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

const YoutubePlaylistSection = styled.section`
    background-color: black;
    color: white;
    margin-bottom: 2em;
`;

class HomePage extends Component {

    state = {
        youtubeVideoSrc: 'https://www.youtube.com/embed/IwzUs1IMdyQ',
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

                <YoutubePlaylistSection>
                    <SectionTitle>Playlist de la semaine</SectionTitle>
                    <VideoPlayer
                        src={this.state.youtubeVideoSrc}
                        title={this.state.youtubeVideoTitle}
                    />
                </YoutubePlaylistSection>
            </div>
        );
    }
}

export default HomePage;