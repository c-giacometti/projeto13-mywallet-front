import styled from "styled-components";
import Top from "./page-items/top";
import Form from "./page-items/registerform";

export default function ExitRegister(){

    const text = 'Nova Saída'

    return (
        <Container>
            <Top text={text} appear={false} />
            <Form type={'saída'} />
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