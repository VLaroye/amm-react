import React, { Component } from 'react';

// COMPONENTS
import Header from './Header/Header';
import Socials from './Socials/Socials';
import VideoPlayer from '../../components/UI/VideoPlayer/VideoPlayer';

// STYLES
import styles from './HomePage.module.css';

class HomePage extends Component {

    state = {
        youtubeVideoSrc: 'https://www.youtube.com/embed/TDcJJYY5sms'
    }

    render() {
        return (
        <div>
            <Header />
            <Socials />
            
            <h2 className={styles.PlaylistHeader} >Playlist de la semaine</h2>
            <section className={styles.YoutubeVideo} >
                <VideoPlayer src={this.state.youtubeVideoSrc} />
            </section>
        </div>
        );
    }
}

export default HomePage;