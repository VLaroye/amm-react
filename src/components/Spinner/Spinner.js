import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: white;
    z-index: 300;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SpinnerCircle = styled.div`
    width: 60px;
    height: 60px;
    position: absolute;
    opacity: 1;
`;

const Circle = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;

    &:before {
        content: '';
        display: block;
        margin: 0 auto;
        width: 15%;
        height: 15%;
        background-color: #333;
        border-radius: 100%;
        -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
                animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;     
        animation-delay: ${props => (-1.2 + ((props.index-1) * 0.1) + 's')};
    }

    transform: rotate(${props => (props.index * 30 - 30) + 'deg'});

    @keyframes sk-circleBounceDelay {
        0%, 80%, 100% {
          -webkit-transform: scale(0);
                  transform: scale(0);
        } 40% {
          -webkit-transform: scale(1);
                  transform: scale(1);
        }
      }
`;

const spinner = () => {

    return (
        <Container>
            <SpinnerCircle>
                <Circle index='1' />
                <Circle index='2' />
                <Circle index='3' />
                <Circle index='4' />
                <Circle index='5' />
                <Circle index='6' />
                <Circle index='7' />
                <Circle index='8' />
                <Circle index='9' />
                <Circle index='10' />
                <Circle index='11' />
                <Circle index='12' />
            </SpinnerCircle>
        </Container>
    )
};

export default spinner;