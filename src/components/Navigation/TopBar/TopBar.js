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
    height: 3em;
    width: 100%;
    background-color: white;
    z-index: 300;
    border-bottom: 2px solid purple;
    display: flex;
    justify-content: space-between;
`;

const Logo = styled.img`
    height: 100%;
`;

const NavMenu = styled.ul`
    display: none;

    ${media.tablet`
        width: 100%;
        list-style: none;
        display: flex;
        justify-content: center;
    `}
`;

const NavItem = styled.li`
    padding: 0 10px;
    font-weight: bold;

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
            <ToggleSideBarButton onClick={props.toggleSideBar} >
                <FontAwesomeIcon icon={faBars} size='2x' />
            </ToggleSideBarButton>
        </Container>
    )
};

export default topBar;