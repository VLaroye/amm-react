import React, { Component } from 'react';
import styled from 'styled-components';

// COMPONENTS
import Spinner from '../Spinner/Spinner';

const Container = styled.div`
    height: 100%;
    
    img {
        width: 100%;
        height: 100%;
    }
`;

class ImageLoader extends Component {

    state= {
        status: 'loaded'
    }

    handleImageLoaded = () => {
        this.setState({status: 'loaded'});
    }

    render() {
        return (
            <Container>
                { this.state.status === 'loading' ? <Spinner /> : null }

                <img onLoad={this.handleImageLoaded} src={this.props.src} alt={this.props.alt} />
            </Container>
        );
    }
}

export default ImageLoader;