import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

export default function Register(){

    const entryText='Nova Entrada';
    const entryIcon='add-circle-outline'
    const exitText='Nova Saída'
    const exitIcon='remove-circle-outline'

    return (
        <Container>
            <RegisterButton icon={entryIcon} text={entryText} type={'entrada'} />
            <RegisterButton icon={exitIcon} text={exitText} type={'saida'}/>
        </Container>
    );
}

function RegisterButton( {icon, text, type} ){

    const navigate = useNavigate(); 

    return (
        <div onClick={() => navigate(`/${type}`)}>
            <ion-icon name={icon}></ion-icon>
            <span>{text}</span>
        </div>
    );

}

const Container = styled.div `
    height: 20%;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        box-sizing: border-box;
        height: 80%;
        width: 47%;
        background-color: #A328D6;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 18px;
        font-weight: 700;
        line-height: 20px;
        color: white;
        border-radius: 5px;
        padding: 10px;
    }

    span {
        width: 50%;
    }

    ion-icon {
        font-size: 30px;
    }

`