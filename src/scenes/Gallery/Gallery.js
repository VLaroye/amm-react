import React, { Component } from 'react';
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