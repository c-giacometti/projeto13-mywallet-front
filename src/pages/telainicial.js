import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

export default function TelaInicial(){
    return (
        <Container>
            {/* <Top />
            <Records />
            <Register /> */}
        </Container>
    );
}

const Container = styled.div `
    min-height: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #8C11BE;
`