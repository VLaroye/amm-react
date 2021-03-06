import React from 'react';
import styled from 'styled-components';
import media from '../../../mediaQueriesTemplate';

// ROUTING 
import { Link } from 'react-router-dom';

// FONTAWESOME
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/fontawesome-free-solid';

// IMAGES
import logo from '../../../assets/Logo/logo.png';

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 2.5em;
    width: 100%;
    background-color: white;
    z-index: 300;
    border-bottom: 2px solid purple;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${media.tablet`
        height: 5em;
    `}    
`;

const Logo = styled.img`
    height: 60%;
    position: absolute;
    left: 10%;
`;

const NavMenu = styled.ul`
    display: none;

    ${media.tablet`
        width: 100%;
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
    `}
`;

const BookLink = styled.a`
        @keyframes couleur { from { background-color: #da4989; } to { background-color: white; }}

        font-size: 0.7em;
        margin: auto;
        border: none;
        padding: 0.8em;
        text-transform: uppercase;
        font-weight: bold;
        background-color: #da4989;
        color: white;
        text-decoration: none;

        animation: 0.8s linear 0s infinite alternate couleur;

        ${media.tablet`
            font-size: 0.7em;
            position: fixed;
            right: 2em;
        `}

        ${media.desktop`
            font-size: 0.9em;
        `}
`;

const NavItem = styled.li`
    padding: 0 10px;
    font-weight: bold;
    font-family: Ubuntu;

    a {
        color: inherit;
        text-decoration: none;
        text-transform: uppercase;
    }
`;

const ToggleSideBarButton = styled.button`
    
    border: none;
    background-color: inherit;
    margin-right: 2em;
    cursor: pointer;
    position: absolute;
    right: 10%;

    &:focus {
        outline: none;
    }

    ${media.tablet`
        display: none;
    `}
`;

const topBar = (props) => {

    const navItems = props.navItems
        .map(item => {
            return (
                <NavItem
                    key={item.page} 
                >
                    <Link to={item.path} >{item.page}</Link>
                </NavItem>
            )
        });

    return (
        <Container>
            <Logo src={ logo } />
            <NavMenu>
                { navItems }       
            </NavMenu>
            <BookLink href="https://www.weezevent.com/widget_billeterie.php?id_evenement=350150&lg_billetterie=1&code=69650&width_auto=1&color_primary=00AEEF">
                Réserve ta place !
            </BookLink>
            <ToggleSideBarButton onClick={props.toggleSideBar} >
                <FontAwesomeIcon icon={faBars} size='2x' />
            </ToggleSideBarButton>
        </Container>
    )
};

export default topBar;