import React, { Component } from 'react';
import { resolve } from 'url';

class Gallery extends Component {
    componentDidMount() {
        this.loadAlbums();
    }

    render() {
        return (
            <div>Gallery</div>
        );
    }
}

export default Gallery;