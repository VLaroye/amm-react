import React from 'react';
import styled from 'styled-components';

// COMPONENTS
import Header from '../../components/Header/Header';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import LineUp from './components/LineUp/LineUp';

const concert = () => (
    <div>
        <Header />
        <section>
            <SectionTitle>Line up</SectionTitle> 
            <LineUp />
        </section>

        <section>
            <SectionTitle>Infos</SectionTitle>
        </section>
    </div>
);

export default concert;