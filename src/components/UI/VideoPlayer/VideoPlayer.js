import React, { Component } from 'react';

import Spinner from '../Spinner/Spinner';

// STYLES
import styles from './VideoPlayer.css';

class VideoPlayer extends Component {

    state = {
        status: this.props.src ? 'loading' : 'failed'
    }

    componentDidMount() {
        this.setState({status: 'loaded'});
    }

    render() {

        if (this.state.status == 'loading') {
            return <Spinner />
        }

        return (
            <div className={styles.VideoPlayerContainer} >
                <iframe  className={styles.VideoPlayer} src={this.props.src} title={this.props.title} frameBorder="0" allow="encrypted-media" allowFullScreen></iframe>
            </div>
        );
    }
}

export default VideoPlayer;