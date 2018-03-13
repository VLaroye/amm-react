import React, { Fragment } from 'react';
import styled from 'styled-components';

// ROUTING
import { Link } from 'react-router-dom';

const Container = styled.div`
    min-height: 100vh;
    width: 70%;
    background-color: white;
    border-right: 2px solid #aaa;
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
    text-align: center;
    box-sizing: border-box;
    text-transform: uppercase;
    border-bottom: 2px solid #aaa;
    border-right: 5px solid purple;

    a {
        color: inherit;
        text-decoration: none;
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