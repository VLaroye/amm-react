import React, { Component } from 'react';
import styled from 'styled-components';
import media from '../../mediaQueriesTemplate';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faBandcamp } from '@fortawesome/fontawesome-free-brands';

// FIREBASE 
import firebase from 'firebase';

// COMPONENTS
import SectionTitle from '../../components/SectionTitle/SectionTitle';

const Container = styled.div`
  margin-bottom: 2em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: start;  
  
`;

const ArtistImg = styled.img`
  width: 100%;
  float: left;

  ${media.desktop`
    width: 40%;
    max-height: 100%;
  `}
`;

const ArtistDetails = styled.div`
  width: 100%
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
      box-sizing: border-box;
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
      box-sizing: border-box;
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
      max-width: 100%;
      background-color: #b14772;
    }

    #linksContainer {
      display: flex;
      justify-content: space-around;
      padding: 1em 0;

      a {
        color: inherit;
      }
    }
  }

  #description {
    width: 100%;
    
    p {
      width: 95%;
      margin: 1em auto;
    }

    h4 {
      max-width: 100%;
      margin: 0;
      padding: 0.5em 0 0.5em 0.5em;
      font-family: Ubuntu;
      font-weight: bold;
      text-transform: uppercase;
      color: white;
      background-color: black;
    }
  }

  ${media.desktop`
    width: 40%;
    max-height: 100%;
  `}

`;

class Artist extends Component {
  state = {
    artist: [],
    loading: true,
    fbLink: "",
    instaLink: "",
    youtubeLink: "",
    bandCampLink: "",
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
            this.setState({
              artist : artists[i],
              fbLink: artists[i].links.facebook,
              instaLink: artists[i].links.instagram,
              youtubeLink: artists[i].links.youtube,
              bandCampLink: artists[i].links.bandcamp,
            });
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
                {this.state.fbLink ?
                  <div id="facebook"><a href={this.state.fbLink || ""}><FontAwesomeIcon icon={faFacebook} size='3x' /></a></div> :
                  null
                }
                {this.state.bandcampLink ?
                  <div id="bandcamp"><a href={this.state.bandcampLink || ""}><FontAwesomeIcon icon={faBandcamp} size='3x' /></a></div> :
                  null
                }
                {this.state.instaLink ?
                  <div id="instagram"><a href={this.state.instaLink || ""}><FontAwesomeIcon icon={faInstagram} size='3x'/></a></div> :
                  null
                }
                {this.state.youtubeLink ?
                  <div id="youtube"><a href={this.state.youtubeLink || ""}><FontAwesomeIcon icon={faYoutube} size='3x'/></a></div> :
                  null
                }
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