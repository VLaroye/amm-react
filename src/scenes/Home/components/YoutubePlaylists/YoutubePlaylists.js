import React, { Component } from 'react';
import styled from 'styled-components';

// FONTAWESOME
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/fontawesome-free-solid';

// AXIOS
import axios from 'axios';

const CHANNEL_ID = 'UCyc6lWpR1mbZ5YMcIJ6VCKw';
const API_KEY = 'AIzaSyDTSOmwWBiFQU8DJYFlmb6sTCYktkiIv_g';
const MAX_RESULT = 10;

const Header = styled.div`
    background-color: black;

    h3 {
        color: white;
        margin: 0;
        text-align: center;
        letter-spacing: 0.09em;
        padding: 2.5em 0;
        text-transform: uppercase;
        font-weight: bold;
    }
`;

const ControlButton = styled.button`
    cursor: pointer;
    background-color: inherit;
    border: none;
`;

const Container = styled.div`
    position: relative;
    display: flex;
`;

const CurrentPlaylistContainer = styled.div`
    width: 45%;
    height: 450px;
    margin: auto;
`;

const SideContainer = styled.div`
    min-height: 100%;
    width: 26%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .overlay {
        position: absolute;
        opacity: 0.5;
        width: 100%;
        height: 100%;
        background-color: white;
        display: flex;
        transition-duration: 0.5s;

        &:hover {
            opacity: 0;
        }
    }

    img {
        width: 100%;
        height: 100%;
    }
`;

class YoutubePlaylists extends Component {
    
    state = {
        loading: true,
        playlists: [],
        currentPlaylistIndex: 0
    }

    componentDidMount() {
        this.getPlaylistsInfos();
    }

    getPlaylistsInfos = () => {
        axios.get(`https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${CHANNEL_ID}&maxResults=${MAX_RESULT}&key=${API_KEY}`)
            .then(response => {
                this.setState({loading: false, playlists: response.data.items});
            })
    }

    handleNext = () => {
        this.setState((prevState, props) => {
            let nextIndex = prevState.currentPlaylistIndex === prevState.playlists.length-1 ? 0 : prevState.currentPlaylistIndex +=1; 

            return ({
                currentPlaylistIndex: nextIndex
            });
        });
    }

    handlePrevious = () => {
        this.setState((prevState, props) => {
            let nextIndex = prevState.currentPlaylistIndex === 0 ? prevState.playlists.length-1 : prevState.currentPlaylistIndex -=1; 

            return ({
                currentPlaylistIndex: nextIndex
            });
        });
    }

    prevIndex = (index) => {
        return index === 0 ? this.state.playlists.length-1 : index-=1;
    }

    nextIndex = (index) => {
        return index === this.state.playlists.length-1 ? 0 : index+=1;
    }

    render() {
        let prevIndex = this.prevIndex(this.state.currentPlaylistIndex);
        let nextIndex = this.nextIndex(this.state.currentPlaylistIndex);
        return (
            <div>
                <Header>
                    <h3>Playlists de la semaine</h3>
                </Header>
                { this.state.loading === true ? 
                    <div>Loading...</div> : 
                        <Container>
                            <SideContainer left onClick={this.handlePrevious} >
                                <div className="overlay"></div>
                                <img src={this.state.playlists[prevIndex].snippet.thumbnails.medium.url} alt=""/>
                            </SideContainer>
                            <CurrentPlaylistContainer>
                                <iframe 
                                    id="ytplayer" 
                                    type="text/html" 
                                    width="100%" 
                                    height="100%" 
                                    src={`http://www.youtube.com/embed?listType=playlist&list=${this.state.playlists[this.state.currentPlaylistIndex].id}`} 
                                    title='Playlist AMM'
                                    frameBorder="0"
                                />
                            </CurrentPlaylistContainer>
                            <SideContainer right onClick={this.handleNext} >
                                <div className="overlay"></div>
                                <img src={this.state.playlists[nextIndex].snippet.thumbnails.medium.url} alt=""/>
                            </SideContainer>
                        </Container>
                }
            </div>
        )
    }
}

export default YoutubePlaylists; 