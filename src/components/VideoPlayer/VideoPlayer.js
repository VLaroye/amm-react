import React from 'react';
import styled from 'styled-components';

// MEDIA QUERIES
import media from '../../mediaQueriesTemplate';

const Container = styled.div`
    width: 100%;
    height: 27em;
    margin: auto;

    ${media.desktop`
        max-width: 60%;
        min-height: 40em;
    `}
`;

const VideoPlayer = styled.iframe`
    width: 100%;
    min-height: 100%;
`;

const videoPlayer = (props) => (
    <Container>
        <VideoPlayer 
            src={props.src} 
            title={props.title}
            frameBorder='0'
            allow="encrypted-media" 
            allowFullScreen
        />
    </Container>
);

export default videoPlayer;