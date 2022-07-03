import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

/* import UserContext from './user-context'; */
import MyWalletLogo from '../general-login-signup/logo';
import DefaultInput from '../general-login-signup/default-input';
import DefaultButton from '../general-login-signup/default-button';
import DefaultLink from '../general-login-signup/default-link';

export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disable, setDisable] = useState('');

    /* const { setUserInfoObject } = useContext(UserContext); */
    
    const API = 'http://localhost:5000/'
    const linkText = 'Primeira vez? Cadastre-se!';
    const buttonText = 'Entrar';

    const navigate = useNavigate(); 

    function PostLogin(event){

        event.preventDefault();

        setDisable('disabled');

        const loginObject = {
                            email,
                            password                        
                            }
        
        const promise = axios.post(API, loginObject);

        promise
            .then(response => {
                /* setUserInfoObject(response.data); */
                navigate('/inicio');
            })
            .catch(() => {
                alert('Não foi possível fazer o login');
                setDisable('');
            })
        
    }

    return (
        <Container>
            <MyWalletLogo />
            <form onSubmit={PostLogin}>
                <DefaultInput disable={disable} placeHolder='E-mail' type='email' state={setEmail} value={email} />
                <DefaultInput disable={disable} placeHolder='Senha' type='password' state={setPassword} value={password} />
                <DefaultButton disable={disable} innerText={buttonText} type='submit' />
            </form>
            <DefaultLink linkText={linkText} redirectTo='/cadastro' />
        </Container>
    );

}

const Container = styled.div `
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #8C11BE;
`