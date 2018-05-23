import React, { Fragment } from 'react';
import styled from 'styled-components';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/fontawesome-free-solid'

// ROUTING
import { Link } from 'react-router-dom';

const Container = styled.div`
    min-height: 100vh;
    width: 70%;
    background-color: white;
    z-index: 400;
    position: fixed;
    box-sizing: border-box;
    top: 0;
    left: -70%;
    transition: transform 0.5s ease-in-out;

    transform: ${props => props.isVisible ? 'translateX(100%)' : 'translateX(0);'}
`;

const BackDrop = styled.div`
    width: 100%;
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 350;
    background-color: black;
    opacity: 0.5;
`;

const SideBarItems = styled.ul`
    display: flex;
    flex-flow: column;
    justify-content: center;
    margin: 0;
    padding: 0;
    width: 100%;
    list-style: none;
`;

const SideBarItem = styled.li`
    font-family: Ubuntu;
    font-weight: bold;
    min-height: 5em;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;
    text-transform: uppercase;
    border-bottom: 1px solid purple;

    a {
        color: inherit;
        text-decoration: none;
    }

    &:hover {
        cursor: pointer;
        transition: 0.5s;
        background-color: #b14772;
        color: white;
        
        svg {
            transform: rotate(180deg);
            transition: transform 0.5s;
            color: white;
        }
    }
`;

const sideBar = (props) => {
    const navItems = props.navItems
        .map(item => {
            return (
                <SideBarItem 
                    key={item.page} 
                    path={item.path}
                    toggleSideBar={props.toggleSideBar}
                >
                    <Link to={item.path} >{item.page}</Link>
                    <FontAwesomeIcon icon={faChevronRight} size="2x" />
                </SideBarItem>
            )
        });

    return (
        <Fragment>
            <Container isVisible={props.isVisible}>
                <SideBarItems onClick={props.toggleSideBar} >
                    {navItems}
                </SideBarItems>
            </Container>
            { props.isVisible ? <BackDrop onClick={props.toggleSideBar} /> : null }
        </Fragment>
    )
}

export default sideBar;