import React from 'react';
import styled from 'styled-components';
import media from '../../../../mediaQueriesTemplate';

// COMPONENTS
import Header from '../../components/Header/Header';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import LineUp from './components/LineUp/LineUp';

// IMAGES 
import map from '../../../../assets/Festival/map.jpg';

const Container = styled.div`
    #infoSectionTitle {
        background-color: #af3f71;
    }
`;

const InfosContainer = styled.section`  
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2em;
`;

const RightContainer = styled.div `
    display: none;

    ${media.tablet`
        display: block;
        width: 50%;
        text-align: right;
    `}
`;

const Infos = styled.div`
    display: flex;
    flex-flow: column;
    width: 100%;
    
    ${media.tablet`
        width: 50%;
    `}

    p {
        margin: 0;
    }

    h4 {
        margin: 0;
        margin-bottom: 1em;
        font-size: 1.7em;
        font-weight: bold;
        color: #af3f71;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    }

    .prices {
        margin: 1.2em 0;
    }

    .infoGroup {
        margin: 1.2em 0;
    }

    .infoBtn {
        color: white;
        background-color: black;
        font-family: Ubuntu;
        border: none;
        font-size: 1em;
        text-transform: uppercase;
        font-weight: bold;
        margin-top: 1.3em;
        padding: 1em;

        a {
            color: inherit;
            text-decoration: none;
        }
    }

    #site, #entries, #onSite {
        width: 80%;
        margin: 1.5em auto;
        text-transform: uppercase;
        font-family: 'Open Sans';

        h4 {
            font-family: Ubuntu;
        }

        ${media.desktop`
            width: 50%;
        `}
    }
`;

const Map = styled.img`
    ${media.tablet`
        width: 100%;  
    `}

    ${media.desktop`
        width: 100%;
    `}
`;

const concert = () => (
    <Container>
        <Header />
        <section>
            <SectionTitle>Line up</SectionTitle> 
            <LineUp />
        </section>

        <SectionTitle id="infoSectionTitle">Infos</SectionTitle>
        <InfosContainer>
            <Infos>
                <div id='site'>
                    <h4>le site</h4>
                    <div className="infoGroup">
                        <p>Terrain des Archers</p>
                        <p>59114, STEENVOORDE</p>
                    </div>
                    <div className="infoGroup">
                        <p>Accès : A25, Sortie 13 STEENVOORDE</p>
                    </div>
                    <a href="https://goo.gl/maps/eyskbEugPxv">
                        <button className="infoBtn">Google Map</button>
                    </a>
                </div>
                <div id="entries">
                    <h4>entrée</h4>
                    <p>ouverture des portes : 15h</p>
                    <p>garden party : 15h-19h30</p>
                    <p>concert : 19h30-3h00</p>
                    <div className="prices">
                        <p>Prévente web : 12€ (+1 euros de frais de réservation)</p>
                        <p>Sur place : 15€</p>
                    </div>
                    <p>*gratuit pour les moins de 12ans</p>
                    <button className="infoBtn">
                        <a href="https://www.weezevent.com/widget_billeterie.php?id_evenement=350150&lg_billetterie=1&code=69650&width_auto=1&color_primary=00AEEF">
                            Réserve ta place !
                        </a>
                    </button>
                </div>
                <div id="onSite">
                    <h4>sur place</h4>
                    <p>coin cinéma</p>
                    <p>camping gratuit</p>
                    <p>bar</p>
                    <p>restauration</p>
                </div>
            </Infos>
            <RightContainer>
                <Map src={map} />
            </RightContainer>
        </InfosContainer>
    </Container>
);

export default concert;