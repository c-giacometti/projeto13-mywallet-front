import styled from "styled-components";
import Top from "./main-page-items/top";
import Form from "./registerform";

export default function EntryRegister(){

    const text = 'Nova Entrada'

    return (
        <Container>
            <Top text={text} appear={false} />
            <Form type={'entrada'} />
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