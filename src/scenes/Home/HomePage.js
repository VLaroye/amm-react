import React, { Component } from 'react';

// COMPONENTS
import Header from './components/Header/Header';
import Socials from './components/Socials/Socials';
import VideoPlayer from '../../components/UI/VideoPlayer/VideoPlayer';

// STYLES
import styles from './HomePage.css';

class HomePage extends Component {

    state = {
        youtubeVideoSrc: 'https://www.youtube.com/embed/TDcJJYY5sms',
        youtubeVideoTitle: 'Video Youtube - Playlist de la semaine'
    }

    render() {
        return (
        <div>
            <Header />
            <Socials />
            
            <h2 className={styles.PlaylistHeader} >Playlist de la semaine</h2>
            <section className={styles.YoutubeVideo} >
                <VideoPlayer src={this.state.youtubeVideoSrc} title={this.state.youtubeVideoTitle} />
            </section>
        </div>
        );
    }
}

export default HomePage;