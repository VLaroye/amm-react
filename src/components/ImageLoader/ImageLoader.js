import React, { Component } from 'react';

// COMPONENTS
import Spinner from '../UI/Spinner/Spinner';

class ImageLoader extends Component {

    state = {
        status: 'loading'
    }

    handleImageLoaded = () => {
        this.setState({status: 'loaded'});
    }

    render() {
        
        return (
            <div className={this.props.className} >
                { this.state.status === 'loading' ? <Spinner /> : null }

                <img  onLoad={this.handleImageLoaded} className={this.props.imgCssClass} src={this.props.src} alt=""/>
            </div>
            
        );
    }
}

export default ImageLoader;