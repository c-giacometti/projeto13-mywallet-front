import { useState, useContext } from 'react';
import styled from 'styled-components';
import Top from './main-page-items/top';
import Records from './main-page-items/records';
import Register from './main-page-items/register';

export default function InitialPage(){

    const text = 'Olá, Camilla';

    return (
        <Container>
            <Top text={text} appear={true} />
            <Records />
            <Register /> 
        </Container>
    );
}

const Container = styled.div `
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #8C11BE;
`