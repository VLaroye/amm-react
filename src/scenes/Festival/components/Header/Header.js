import React from 'react';
import styled from 'styled-components';

// ROUTING
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

const HeaderLink = styled(Link)`
    width: 49%;
    min-height: 4em;
    display: flex;
    justify-content: center;
    align-content: center;
    text-decoration: none;
    color: inherit;
    background-color: ${props => {
        if(props.concert) {
            return '#e67b73'
        } else if (props.mapping) {
            return '#af3f71';
        }
            return 'white';
        }
    }};

    h2 {
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        font-size: 1.3em;
        display: flex;
        align-items: center;
    }
`;

const header = () => (
    <Container>
        <HeaderLink concert to='/festival/concert'>
            <h2>Concert</h2>
        </HeaderLink>
        <HeaderLink mapping to='/festival/mapping'>
            <h2>Mapping</h2>
        </HeaderLink>
    </Container>
);

export default header;