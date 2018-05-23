import React from 'react';
import styled from 'styled-components';
import media from '../../../../mediaQueriesTemplate';

// COMPONENTS
import Header from '../../components/Header/Header';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import VideoPlayer from '../../../../components/VideoPlayer/VideoPlayer';

// IMAGES
import mappingHeader from '../../../../assets/Festival/mapping-header.jpg';
import map from '../../../../assets/Festival/map.jpg';

const Container = styled.div``;

const MainImage = styled.img`
    display: block;
    margin: auto;
    width: 100%;

    ${media.desktop`
        width: 70%;
    `}
`;

const InfosContainer = styled.section`  
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const RightContainer = styled.div `
    display: none;

    ${media.tablet`
        display: block;
        width: 50%;
        text-align: right;
    `}
`;

const Infos = styled.div`
    display: flex;
    flex-flow: column;
    width: 100%;
    
    ${media.tablet`
        width: 50%;
    `}

    p {
        margin: 0;
    }

    h4 {
        margin: 0;
        margin-bottom: 1em;
        font-size: 1.7em;
        font-weight: bold;
        color: #af3f71;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    }

    .prices {
        margin: 1.2em 0 0 0;
    }

    .infoGroup {
        margin: 1.2em 0;
    }

    .infoBtn {
        color: white;
        background-color: black;
        font-family: Ubuntu;
        border: none;
        font-size: 1em;
        text-transform: uppercase;
        font-weight: bold;
        margin-top: 1.3em;
        padding: 1em;
    }

    #site, #entries, #onSite {
        width: 80%;
        margin: 1.5em auto;
        text-transform: uppercase;
        font-family: 'Open Sans';

        h4 {
            font-family: Ubuntu;
        }

        ${media.desktop`
            width: 70%;
        `}
    }
`;

const Map = styled.img`
    width: 100%;

     ${media.tablet`
        width: 100%;  
    `}

    ${media.desktop`
        width: 60%;
    `}
`;

const mapping = () => (
    <Container>
        <Header />
        <SectionTitle>Mapping</SectionTitle>
        <MainImage src={mappingHeader} />
        <SectionTitle>Teaser</SectionTitle>
            <VideoPlayer 
                src='https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FVideoMappingFestival%2Fvideos%2F185176878754739%2F' 
                title='Teaser Video Mapping Festival' 
            />
        
        <SectionTitle>Infos</SectionTitle>
        <InfosContainer>
            <Infos>
                <div id='site'>
                    <h4>le site</h4>
                    <div className="infoGroup">
                        <p>28, place saint-pierre</p>
                        <p>59114, STEENVOORDE</p>
                    </div>
                    <div className="infoGroup">
                        <p>Accès : A25, Sortie 13 STEENVOORDE</p>
                    </div>
                    <button className="infoBtn">Google Map</button>
                </div>
                <div id="entries">
                    <h4>horaires</h4>
                    <p>début de la projection : 22h00</p>
                    <p>fin de la projection : 00h00</p>
                    <div className="prices">
                        <p>gratuit !</p>
                    </div>
                </div>
                <div id="onSite">
                    <h4>sur place</h4>
                    <p>coin cinéma</p>
                    <p>camping gratuit</p>
                    <p>bar</p>
                    <p>restauration</p>
                </div>
            </Infos>
            <RightContainer>
                <Map src={map} />
            </RightContainer>
        </InfosContainer>
    </Container>
)

export default mapping;