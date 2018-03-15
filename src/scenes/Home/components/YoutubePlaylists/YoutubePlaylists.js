import React, { Component } from 'react';
import styled from 'styled-components';

// FONTAWESOME
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/fontawesome-free-solid';

// AXIOS
import axios from 'axios';

// COMPONENTS
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';

const CHANNEL_ID = 'UCyc6lWpR1mbZ5YMcIJ6VCKw';
const API_KEY = 'AIzaSyDTSOmwWBiFQU8DJYFlmb6sTCYktkiIv_g';
const MAX_RESULT = 3;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    border: 2px solid black;
    border-left: none;

    h3 {
        margin: 0;
        text-align: center;
        letter-spacing: 0.09em;
        padding: 2.5em 0;
        text-transform: uppercase;
        font-weight: bold;
    }
`;

const ControlButton = styled.button`
    background-color: inherit;
    border: none;
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
                console.log(this.state.playlists);
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

    render() {
        return (
            <div>
                <Header>
                    <ControlButton onClick={this.handlePrevious} >
                        <FontAwesomeIcon icon={faChevronLeft} size='2x'/>
                    </ControlButton>
                    <h3>Playlists de la semaine</h3>
                    <ControlButton onClick={this.handleNext} >
                        <FontAwesomeIcon icon={faChevronRight} size='2x' />
                    </ControlButton>
                </Header>
                { this.state.loading === true ? <div>Loading...</div> : <iframe id="ytplayer" type="text/html" width="100%" height="360" src={ `http://www.youtube.com/embed?listType=playlist&list=${this.state.playlists[this.state.currentPlaylistIndex].id}` }frameborder="0"/>}
            </div>
        )
    }
}

export default YoutubePlaylists;