import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Top( {text, appear} ){

    const navigate = useNavigate(); 

    if(appear){
        return (
            <Container>
                <span>{text}</span>
                <ion-icon name="log-out-outline" onClick={() => navigate('/')}></ion-icon>
            </Container>
        );
    } else {
        return (
            <Container>
                <span>{text}</span>
            </Container>
        );
    }

}

const Container = styled.div `
    box-sizing: border-box;
    height: 10%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px;
    font-size: 26px;
    font-weight: 700;
    color: white;

    ion-icon {
        font-size: 40px;
        cursor: pointer;
    }
`