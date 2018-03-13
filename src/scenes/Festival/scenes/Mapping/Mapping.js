import React from 'react';
import styled from 'styled-components';
import media from '../../../../mediaQueriesTemplate';

// COMPONENTS
import Header from '../../components/Header/Header';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import ImageLoader from '../../../../components/ImageLoader/ImageLoader';
import VideoPlayer from '../../../../components/VideoPlayer/VideoPlayer';

// IMAGES
import mappingHeader from '../../../../assets/Festival/mapping-header.jpg';

const Container = styled.div``;

const MainImage = styled.img`
    display: block;
    margin: auto;
    width: 100%;

    ${media.tablet`
        width: 70%;
    `}
`;

const mapping = () => (
    <Container>
        <Header />
        <SectionTitle>Mapping</SectionTitle>
        <MainImage src={mappingHeader} />

        <SectionTitle>Teaser Vidéo</SectionTitle>
        <VideoPlayer 
            src='https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FVideoMappingFestival%2Fvideos%2F185176878754739%2F' 
            title='Teaser Video Mapping Festival' 
        />
        
        <SectionTitle>Infos</SectionTitle>
    </Container>
)

export default mapping;