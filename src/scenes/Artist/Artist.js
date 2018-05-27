import React, { Component } from 'react';
import styled from 'styled-components';
import media from '../../mediaQueriesTemplate';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/fontawesome-free-brands';

// FIREBASE 
import firebase from 'firebase';

// COMPONENTS
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ArtistImg = styled.img`
  width: 50%;
  float: left;
  max-height: 15em;

  ${media.desktop`
    width: 40%;
    max-height: 100%;
  `}
`;

const ArtistDetails = styled.div`
  width: 50%
  display: flex;
  align-content: start;
  flex-wrap: wrap;
  
  p {
    margin: 0;
    padding: 0.5em;
  }

  #origine {
    width: 50%;
    h4 {
      margin: 0;
      padding: 0.5em 0 0.5em 0.5em;
      font-family: Ubuntu;
      font-weight: bold;
      text-transform: uppercase;
      width: 100%;
      background-color: #b14772;
    }
  }

  #genre {
    width: 50%;
    h4 {
      margin: 0;
      padding: 0.5em 0 0.5em 0.5em;
      font-family: Ubuntu;
      font-weight: bold;
      text-transform: uppercase;
      color: white;
      background-color: black;
    }
  }

  #links {
    width: 100%;

    h4 {
      margin: 0;
      padding: 0.5em 0 0.5em 0.5em;
      font-family: Ubuntu;
      font-weight: bold;
      text-transform: uppercase;
      width: 100%;
      background-color: #b14772;
    }
  }

  #description {
    width: 100%;
    text-align: center;
    h4 {
      margin: 0;
      padding: 0.5em 0 0.5em 0.5em;
      font-family: Ubuntu;
      font-weight: bold;
      text-transform: uppercase;
      color: white;
      background-color: black;
    }
  }
`;

class Artist extends Component {
  state = {
    artist: [],
    loading: true,
    error: 'Impossible de trouver cet artiste',
  }

  componentDidMount() {
    var database = firebase.database();
    let artists = { ...this.state.artists };
    var artistsRef = database.ref('/artists');

    artistsRef.once('value')
      .then(data => {
        artists = data.val();
        for(var i = 0; i < artists.length; i++) {
          if (artists[i] != undefined && artists[i].name && artists[i].name === this.props.match.params.artistName) {
            console.log(artists[i]);
            this.setState({artist : artists[i]});
            break;
          }
        }
      });
  };

  render() {
    return (
      <div>
        <SectionTitle>{ this.state.artist.name }</SectionTitle>
        <Container>
          <ArtistImg src={this.state.artist.imgSrc}/>
          <ArtistDetails>
            <div id="origine">
              <h4>Origine</h4>
              <p>{ this.state.artist.origin || "N.C" }</p>
            </div>
            <div id="genre">
              <h4>Genre</h4>
              <p>{ this.state.artist.style || "N.C" }</p>
            </div>
            <div id="links">
              <h4>Liens</h4>
              <div id="linksContainer">
                <div>{ this.state.artist.name }</div>
              </div>
            </div>
            <div id="description">
              <h4>Description</h4>
              <p>{ this.state.artist.description || "N.C" }</p>
            </div>
          </ArtistDetails>
        </Container>
      </div>
    );
  }
}

export default Artist;