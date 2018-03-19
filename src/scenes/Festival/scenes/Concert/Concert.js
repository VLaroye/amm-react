import React from 'react';
import styled from 'styled-components';

// COMPONENTS
import Header from '../../components/Header/Header';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import LineUp from './components/LineUp/LineUp';

// IMAGES 
import map from '../../../../assets/Festival/map.jpg';
import pictos from '../../../../assets/Festival/picto.png';

const InfosContainer = styled.section`  
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const RightContainer = styled.div `
    max-width: 40%;
`;

const Infos = styled.div`
    max-width: 60%;
    padding-left: 10%;
    
    p {
        margin: 0;
    }

    h4 {
        margin: 0;
        margin-bottom: 1em;
        font-size: 1.7em;
        text-transform: uppercase;
    }

    .infoGroup {
        margin: 1em 0;
    }

    #site {
        border: 1px blue solid; 
    }
`;

const Map = styled.img`
    width: 100%;
`;

const Pictos = styled.img`
    max-width: 100%;
`;

const concert = () => (
    <div>
        <Header />
        <section>
            <SectionTitle>Line up</SectionTitle> 
            <LineUp />
        </section>

        <SectionTitle>Infos</SectionTitle>
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
                    <button>Google Map</button>
                </div>
                <div>
                    <h4>entrée</h4>
                    <p>ouverture des portes : 15h</p>
                    <p>garden party : 15h-19h30</p>
                    <p>concert : 19h30-3h00</p>
                    <p>pass journée : 12euros*</p>
                    <p>pass soirée : 9euros*</p>
                    <p>*gratuit pour les moins de 12ans</p>
                    <button>réserve ta place !</button>
                </div>
                <div>
                    <h4>sur place</h4>
                    <p>coin cinéma</p>
                    <p>camping gratuit</p>
                    <p>bar</p>
                    <p>restauration</p>
                </div>
            </Infos>
            <RightContainer>
                <Map src={map} />
                <Pictos src={pictos} />
            </RightContainer>
        </InfosContainer>
    </div>
);

export default concert;