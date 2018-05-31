import React, { Component } from 'react';
import styled from 'styled-components';
import media from '../../mediaQueriesTemplate';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/fontawesome-free-solid';
import { faFacebook, faInstagram, faYoutube, faBandcamp, faSoundcloud } from '@fortawesome/fontawesome-free-brands';

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
    text-align: justify;
    
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
          description: `Dans un climat de hautes pressions pour le grand dancefloor mondial, la
          nouvelle génération de producteurs techno qui alimente cette vitalité porte un
          devoir en elle : remercier les pionniers en déconstruisant leur oeuvre. À ce
          petit jeu, Madben est l’un des meilleurs. Gardien éclairé de l’esprit rave, cadre
          de la maison de goût Astropolis, on l’a déjà vu jouer aux quatre coins de
          l’Europe ainsi que dans de grands festivals comme Marsatac, Piknic
          Elektronik, Panoramas ou les Trans Musicales, sans compter ses
          nombreuses incursions dans les meilleurs labels du vieux continent et ses
          nombreux remixes. Restait à produire et réussir un premier album d’une
          musique retorse à se faire dompter sur long-format. Fréquence(s) est-il un
          album techno ? C’est avant tout un album de musique qui ne s’interdit rien.
          Une splendide voie de salut pour cette musique qui mérite de rester jeune le
          plus longtemps possible, et dont Madben est l’un des plus pertinents
          architectes.
          `,
          links: {
              fbLink: 'https://www.facebook.com/madbenofficial/',
              instagramLink: 'https://www.instagram.com/madben_official/',
              soundcloudLink: 'https://soundcloud.com/madben',
          },
          origin: 'France',
          style: 'Techno',
          youtubeVideo: 'https://www.youtube.com/embed/DhC2rlWj4oI',
      },
      {
          name: 'Le 77',
          imgSrc: le77,
          description: `Ce groupe de jeunes ultimes bawlers nous provient de Belgique, plus exactement de sa capitale Bruxelles city. Ce groupe est composé de 4 membres/cohabitants super musclés. Le 1er étant le manager de la team, je vous présente Rayan, aka John Prince. Le 2ème n’est autre que Morgan, il se charge du Djing mais sa principale fonction est de composer de véritables instrumentales de fisput pour ce groupe. Le 3ème membre est le MC beatmaker dr Peet aka Dirty Peet, messager porteur d’amour. Et enfin le 4ème membre de cette ultim team est un ancien membre du groupe bruxellois « L’or du Commun », je vous présente Félé Flingue, aka le double F, véritable coq de combat scénique. Voici 4 « purtypes » aussi soudés qu’une paire de bawlz. Ils disposent d’une énorme capacité de skilz, prêts à tout pour braver les plus gros défis qu’ils croiseront sur leur route sacrée. 
          Leur auto-dérision et leur sensibilité musicale est un mariage ambitieux visant à partager une énergie positive et un message d’amour dans ce monde au cul plat.`,
          links: {
            fbLink: 'https://www.facebook.com/zevensept/',
            youtubeLink: 'https://www.youtube.com/channel/UCF8BprOd2jmgAWJN7kf-10Q',
          },
          origin: 'Belgique',
          style: 'Rap',
          youtubeVideo: 'https://www.youtube.com/embed/1APQck1-ACg',
      },
      {
          name: 'Too Many T\'s',
          imgSrc: tooMany,
          description: `Le  duo  londonien  Too  Many  T's  offre  un  HipHop  très  frais,  boosté  au  Rock,  Funk  et  Electro, 
          qui  rend  hommage  à  leurs  pères  spirituels,  les  Beastie  Boys.
          Leur  1er  album  "South  City"  est  produit  par  un  Flux  Pavillon  qui  semble  avoir  abandonné  le 
          dubstep  sans  en  perdre  la  rondeur  des  basses,  et  par  OdjProx,  beatmaker anglais  au  groove très  funky
          Si  la  référence  aux  Beastie  Boys  est  assumée,  le  groupe  ne  souffre  pas  pour  autant  d'un  manque  de  personnalité,  bien  au  contraire.  Flows  aiguisés,  rimes  affûtées  et  humour  implacable,  la  formule  fait  mouche.South  City  est  sans  aucun  doute  l'album  HipHop  le  plus  frais  à  avoir  traversé  la  manche  depuis  très  longtemps.
          `,
          links: {
              website: 'https://www.toomanyts.com/',
              fbLink: "http://www.facebook.com/toomanyts",
              youtubeLink: "https://www.youtube.com/channel/UCA3yMT22rr0-Y6OMMDeoO0g",
              soundcloudLink: 'https://soundcloud.com/too-many-ts',
          },
          origin: 'Angleterre',
          style: 'Hip-Hop',
          youtubeVideo: 'https://www.youtube.com/embed/ejQTc6Q_yDE',
      },
      {
          name: 'Tetra Hydro K',
          imgSrc: thk,
          description: `Tetra Hydro K est le nom d’un laboratoire secret dirigé par le Docteur Kanay et le Docteur Krilong. 
          Leurs recherches se concentrent sur la combinaison d’éléments organiques (instruments musicaux en live) dans un univers électronique. Quand les spécialistes se sont penchés sur ces mélanges, il se sont arraché les cheveux pour les définir : Est-ce électronique ? Acoustique ? Dub ? Drum’n’Bass ? Pourquoi on ne peut pas s’arrêter de danser ? Les résultats de ces réactions chimiques, comme vous pouvez l’entendre avec l’EP « basse équitable » sont étonnants et stupéfiants ! Le duo est bien entendu sorti de son labo pour pratiquer leurs expérimentations en live où le public les a acclamés.
           Alors n’attendez pas plus longtemps pour prélever quelques unes de ces substances audio pour vos oreilles !`,
          links: {
              website: 'www.tetrahydrok.fr',
              soundcloudLink: 'www.soundcloud.com/tetra-hydro-k',
              fbLink: 'www.facebook.com/Tetrahydrok23',
          },
          origin: 'France',
          style: 'Dub',
          youtubeVideo: 'https://www.youtube.com/embed/ulyeE9uRqKU',
      },
      {
          name: 'Contrefaçon',
          imgSrc: contrefacon,
          description: `4 parisiens qui se sont rencontrés sur les bancs du collège, 
          Contrefaçon est un groupe de musique-video qui s’exprime via des clips originaux, objet de la rencontre entre le son et l’image. 
          Définit comme un concept qui se veut à contre-courant, au moyen d’un authentique spectacle musical où chaque morceau sera retravaillé et rejoué en live, 
          Contrefaçon a pour ambition d’amener sur scène l’univers développé au sein de ses vidéos.`,
          links: {
              youtubeLink: 'https://www.youtube.com/channel/UCOTOzf7drmBfRZvp35a8Xqg',
              fbLink: 'https://www.facebook.com/ctrfcn',
              instagramLink: 'https://www.instagram.com/ctrfcn/',
          },
          origin: 'France',
          style: 'Techno',
        youtubeVideo: 'https://www.youtube.com/embed/kma2XKVAc5Y',
      },
      {
          name: 'Bellaire',
          imgSrc: bellaire,
          description: `Issu d’une formation musicale classique (saxophone, clarinette), le jeune producteur et dj de 19 ans Bellaire s’essaie d’abord aux productions
          hip-hop	avant de se mettre à la house il y a quelques mois seulement. S’en suit une	révélation.	Dès	son	premier	morceau	“Every Day”, le 
          futur incontournable promoteur de House	sur	YouTube, Houseum, flair le talent et quelques semaines plus tard les compteurs explosent pour le producteur	
          lillois	avec son titre “Paris City Jazz” qui cumule	aujourd’hui	plus de	1 millions de vues sur la chaine précédemment citée. 
          Avec ce track Bellaire affirme sa touche jazzy et hip-hop, armé	de son saxo, de ses samples de voix et de son piano groovy à souhait. 
          Cela lui vaudra son premier gig sous ce nouvel alias au côté de DJ Seinfeld pour une soirée Dure Vie mémorable sur le Woodfloor de l’emblématique 
          Concrete à Paris. Après quelques dates, 2 participations aux Various Artist des labels De La Groove et Grand Cru ainsi qu’une bonne dizaine de 
          morceaux, le fils musical de Saint Germain vient de sortir son premier EP sur son label fondé à l’occasion “AOC Records” (Appellation d’Origine Contrôlée Records).`,
          links: {
              fbLink: 'https://www.facebook.com/Bellaire-Music-1895457254034007/',
              soundcloudLink: 'https://soundcloud.com/bellairemusic',
              instagramLink: 'https://www.instagram.com/bellairemusic/?hl=fr',
          },
          origin: 'France',
          style: 'House',
          youtubeVideo: 'https://www.youtube.com/embed/hyVVoLy4LSc',
      },
      {
          name: 'The liquidators',
          imgSrc: liquidators,
          description: `Formé en 2015 sous le nom « The Soul rebels » pour répondre alors à la proposition d’Yvan Serrano (dj Healer Selecta ) d’ accompagner Freddie Notes, 
          légende du « rocksteady » pour une date unique au Vintage Weekender de Roubaix la même année,  le groupe a alors continué depuis sous le nom :   The Liquidators. 
          Il est composé aujourd’hui de 7 musiciens /chanteurs aguerris, puisque venant presque tous de formations incontournables de la scène Lilloise des années 
          2000  que sont  Dubians, J-funk ou encore Marcel et son orchestre.  Depuis 2 ans ils écument les clubs et festivals avec leurs grooves imparables, leurs 
          cuivres sur vitaminés (qu’il n’est pas rare de retrouver dans le public !), et la performance d’Hamid, le chanteur, qui emmène le tout. Ils ont sorti en 
          2017 un 1er 45 tour (« Hard to handle » / « These boots are made for walkin’ ») ainsi qu’un CD 5titres.  Tous amoureux de Ska, Rocksteady, Soul/funk, 
          Reggae depuis longtemps ils rendent ici hommage à leur manière aux pionniers de la musique Jamaïcaine que sont Ken Booth, the Skatalites, Dennis Brown, 
          Rico Rodrigez,
           Lord Tanamo etc…à travers un set ou se croisent, reprises, adaptations originales et instrumentaux, 
           dans l’esprit Ska, Rocksteady, Early Reggae des années 60/70 !`,
          links: {
              fbLink: 'http://www.facebook.com/theliquidatorsband',
              soundcloudLink: 'http://soundcloud.com/theliquidatorsband',
          },
          origin: 'France',
          style: 'Ska',
          youtubeVideo: 'https://www.youtube.com/embed/BS4lc-hnCiE',
      },
      {
          name: 'Octave Parengo',
          imgSrc: parengo,
          description: `Arrivé à Lille à l'aube de l'année 2015 avec un bon paquet de références, et d'années de mix derrière lui, Octave Parango a vite été adopté par le Moog Analogic Bar et le Baron dont il est aujourd'hui un résident. 
          Il n'a ensuite pas perdu de temps pour écumer les différents lieux festifs Lillois armé de ses sélections assassines et de sa bonne humeur contagieuse.
          On l'a notamment croisé aux commandes du Moog Analogic Bar, du Magazine Club, du Baron, de l'une des scènes de l'Electric Circus Flying Party mais aussi au Batofar à Paris, sur la scène du Jardin Electronique ou encore sur les ondes de Galaxie.
          Il a eu l'occasion de se produire aux côtés d'Alan Fitzpatrick, Timid Boy, Marco Faraone, Bambounou, David Asko, Matthus Raman ou encore avec les copains de la Moog Family.
          `,
          links: {
              soundcloudLink: 'https://soundcloud.com/enlacerecords/sets/octave-parango',
          },
          origin: 'France',
          style: 'Electro',
          youtubeVideo: 'https://www.youtube.com/embed/5GD23xfITIU',
      },
      {
          name: 'Rocta',
          imgSrc: rocta,
          description: '',
          links: {
            soundcloudLink: 'https://soundcloud.com/antoine-rcrt',
            fbLink: 'https://www.facebook.com/Rocta-1524349687856590/',
          },
          origin: 'France',
          style: 'House',
      },
      {
          name : 'Ferqli',
          imgSrc: ferqli,
          description: '',
          links: {
              fbLink: "https://www.facebook.com/F3rqli/",
              soundcloudLink: "https://soundcloud.com/ferqli",
          },
          origin: 'France',
          style: 'House',
      },
      {
          name: 'S.A.A.S.',
          imgSrc: sass,
          description: `Science Against Spheric Silence (faites comme nous, dites SASS) est un groupe de post/math-rock originaire de Boulogne-sur-Mer, dans le nord de la France. 
          Il est composé de Joey et Akio aux guitares, de Paul à la basse et de Clem à la batterie.
          Le groupe démarre en 2013 en sortant son premier EP et en s'attaquant à la scène. Il enregistre en 2016 son premier album : Layers. 
          SASS a eu l'opportunité d'ouvrir pour plusieurs groupes, tels que Lost in the Riots, Totorro, Fall of Messiah, Steve Strong ou plus récemment, Alpha Male Tea Party.
          Science Against Spheric Silence déballe un post-rock énergique, teinté de metal, d'ambience réverbérée et de signatures rythmiques particulières.
          Ses membres écrivent en ce moment ce qui sera un jour (non défini) leur second album.
          `,
          links: {
              fbLink: 'https://www.facebook.com/ScienceAgainstSphericSilence/',
              bandcampLink: 'https://scienceagainstsphericsilence.bandcamp.com/',
              youtubeLink: "https://www.youtube.com/channel/UCZEtk-9xRwLoI5YKy56zGQg",
          },
          origin: 'France',
          style: 'Post/Math-Rock',
          youtubeVideo: "https://www.youtube.com/embed/uKNw9in34j8",
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
    window.scrollTo(0, 0);
    for (var i = 0; i < this.state.artists.length; i++) {
      if (this.state.artists[i] !== undefined && this.state.artists[i].name && this.state.artists[i].name === this.props.match.params.artistName) {
        this.setState({
            artist : this.state.artists[i],
            fbLink: this.state.artists[i].links.fbLink,
            instaLink: this.state.artists[i].links.instagramLink,
            youtubeLink: this.state.artists[i].links.youtubeLink,
            bandcampLink: this.state.artists[i].links.bandcampLink,
            soundcloudLink: this.state.artists[i].links.soundcloudLink,
            website: this.state.artists[i].links.website,
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
                {this.state.soundcloudLink ?
                  <div id="soundcloud"><a href={this.state.soundcloudLink || ""}><FontAwesomeIcon icon={faSoundcloud} size='3x'/></a></div> :
                  null
                }
                {this.state.website ?
                  <div id="website"><a href={this.state.website || ""}><FontAwesomeIcon icon={faEllipsisH} size='3x'/></a></div> :
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