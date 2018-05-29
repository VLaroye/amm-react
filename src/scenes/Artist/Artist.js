import React, { Component } from 'react';
import styled from 'styled-components';
import media from '../../mediaQueriesTemplate';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faBandcamp } from '@fortawesome/fontawesome-free-brands';

// COMPONENTS
import SectionTitle from '../../components/SectionTitle/SectionTitle';

// IMAGES
// IMAGES
import ferqli from '../../assets/LineUp/ferqli.jpg'
import tooMany from '../../assets/LineUp/tooMany.jpeg'
import madben from '../../assets/LineUp/madben.jpg'
import le77 from '../../assets/LineUp/77.jpg'
import thk from '../../assets/LineUp/thk.jpg'
import contrefacon from '../../assets/LineUp/contrefacon.jpg'
import bellaire from '../../assets/LineUp/bellaire.JPG'
import liquidators from '../../assets/LineUp/liquidators.jpg'
import parengo from '../../assets/LineUp/parengo.jpg'
import rocta from '../../assets/LineUp/rocta.jpg'
import sass from '../../assets/LineUp/sass.jpg'
import rocMartin from '../../assets/LineUp/rocMartin.jpg'

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

const YoutubeVideo = styled.div`
  width: 100%

  iframe {
    margin: 2em 0 0 0;
    width: 100%;
    height: 17em;
  }

  ${media.tablet`
    iframe {
      height: 25em;
    }
  `}

  ${media.desktop`
    iframe {
      height: 40em;
    }
  `}
`;

class Artist extends Component {
  state = {
    artists: [
      {
          name: 'Madben',
          imgSrc: madben,
          description: '',
          links: {},
          origin: 'France',
          style: 'Techno',
      },
      {
          name: 'Le 77',
          imgSrc: le77,
          description: '',
          links: {},
          origin: 'Belgique',
          style: 'Rap',
      },
      {
          name: 'Too Many T\'s',
          imgSrc: tooMany,
          description: 'bla bla bla',
          links: {
              fbLink: "http://facebook.com",
          },
          origin: 'France',
          style: 'House',
      },
      {
          name: 'Tetra Hydro K',
          imgSrc: thk,
          description: '',
          links: {},
          origin: 'France',
          style: 'Dub',
      },
      {
          name: 'Contrefaçon',
          imgSrc: contrefacon,
          description: '',
          links: {},
          origin: 'France',
          style: '',
      },
      {
          name: 'Bellaire',
          imgSrc: bellaire,
          description: '',
          links: {},
          origin: 'France',
          style: '',
      },
      {
          name: 'The liquidators',
          imgSrc: liquidators,
          description: '',
          links: {},
          origin: '',
          style: '',
      },
      {
          name: 'Octave Parengo',
          imgSrc: parengo,
          description: '',
          links: {},
          origin: '',
          style: '',
      },
      {
          name: 'Rocta',
          imgSrc: rocta,
          description: '',
          links: {},
          origin: 'France',
          style: '',
      },
      {
          name : 'Ferqli',
          imgSrc: ferqli,
          description: 'bla bla bla',
          links: {
              fbLink: "http://facebook.com",
          },
          origin: 'France',
          style: 'House',
      },
      {
          name: 'S.A.A.S.',
          imgSrc: sass,
          description: `Suite à sa formation et à la sortie de son premier EP en 2013, Science Against
          Spheric Silence part sur les routes (principalement du nord de la France) histoire
          de faire de la musique et de rencontrer des gens.
          Un tout petit peu influencé par des groupes comme Explosions in the Sky ou
          encore ASIWYFA, le groupe joue un post-math rock à la fois brutal et vaporeux.
          Adepte du manque de paroles, de la grosse distorsion et de la reverbération
          delayée, il aime mêler les influences sans trop se poser de questions.
          En 2016, SASS sort son tout premier album, Layers, qu&#39;il s&#39;apprête à défendre
          sur scène.`,
          links: {},
          origin: 'France',
          style: '',
      },
      {
          name: 'Roc Martin',
          imgSrc: rocMartin,
          description: '',
          links: {},
          origin: '',
          style: '',
      },
  ],
    artist: {},
    loading: true,
    fbLink: "",
    instaLink: "",
    youtubeLink: "",
    bandCampLink: "",
    error: 'Impossible de trouver cet artiste',
  }

  componentDidMount() {
    for (var i = 0; i < this.state.artists.length; i++) {
      if (this.state.artists[i] !== undefined && this.state.artists[i].name && this.state.artists[i].name === this.props.match.params.artistName) {
        this.setState({
            artist : this.state.artists[i],
            fbLink: this.state.artists[i].links.facebook,
            instaLink: this.state.artists[i].links.instagram,
            youtubeLink: this.state.artists[i].links.youtube,
            bandCampLink: this.state.artists[i].links.bandcamp,
          });
        console.log(this.state);
        break;
      }
    }
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
          <YoutubeVideo>
            <iframe src={this.state.artist.youtubeVideo} title="artistVideo" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </YoutubeVideo>
        </Container>
        
      </div>
    );
  }
}

export default Artist;