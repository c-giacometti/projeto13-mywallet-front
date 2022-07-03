import styled from "styled-components";
import axios from "axios";

export default function Records(){

    return (
        <Container>
            <span>Não há registros de entrada ou saída</span>
        </Container>
    );
}

const Container = styled.div `
    height: 70%;
    width: 90%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 400;
    color: #868686;

    span {
        width: 70%;
        text-align: center;
        line-height: 25px;
    }
`