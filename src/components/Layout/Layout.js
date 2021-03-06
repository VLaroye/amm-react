import React, { Fragment } from 'react';
import styled from 'styled-components';
import media from '../../mediaQueriesTemplate';

// COMPONENTS
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

const ContentContainer = styled.div`
    min-height: 75vh;
    margin-top: 2.5em;

    ${media.tablet`
        margin-top: 5em;
    `};
`;

const layout = (props) => (
    <Fragment>
        <Navigation />
        <ContentContainer>
            { props.children }
        </ContentContainer>
        <Footer />
    </Fragment>
);

export default layout;