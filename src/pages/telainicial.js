import { useContext } from 'react';
import styled from 'styled-components';
import Top from './page-items/top';
import Records from './page-items/records';
import Register from './page-items/register';
import UserContext from '../user-context';

export default function InitialPage(){

    const { userInfo } = useContext(UserContext);

    const text = `Olá, ${userInfo.response.name}`;

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