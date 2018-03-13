import React, { Fragment } from 'react';
import styled from 'styled-components';

// COMPONENTS
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

const ContentContainer = styled.div`
    min-height: 75vh;
    margin-top: 3em;
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