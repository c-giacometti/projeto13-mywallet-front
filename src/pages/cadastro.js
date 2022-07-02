import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import MyWalletLogo from '../general-login-signup/logo';
import DefaultInput from '../general-login-signup/default-input';
import DefaultButton from '../general-login-signup/default-button';
import DefaultLink from '../general-login-signup/default-link';

export default function CadastroUsuario(){

    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [disable, setDisable] = useState('');

    const API = 'http://localhost:5000/';
    const linkText = 'Já tem uma conta? Faça login!';
    const buttonText = 'Cadastrar';

    const navigate = useNavigate();

    function PostAccount(event){

        event.preventDefault();

        setDisable('disabled');

        if(password === passwordConfirm){
            const accountObject = {
                name,
                email,
                password                        
                }

            const promise = axios.post(API, accountObject);

            promise
            .then(() => {
                navigate('/');
            })
            .catch(() => {
                alert('Não foi possível finalizar o cadastro');
                setDisable('');
            })
        } else {
            alert('Confirme a senha corretamente');
            setDisable('');
        }

    }

    return (
        <Container>
            <MyWalletLogo />
            <form onSubmit={PostAccount}>
                <DefaultInput disable={disable} placeHolder='Nome' type='text' state={setname} value={name} />
                <DefaultInput disable={disable} placeHolder='E-mail' type='email' state={setEmail} value={email} />
                <DefaultInput disable={disable} placeHolder='Senha' type='password' state={setPassword} value={password} />
                <DefaultInput disable={disable} placeHolder='Confirme a senha' type='password' state={setPasswordConfirm} value={passwordConfirm} />
                <DefaultButton disable={disable} innerText={buttonText} type='submit' />
            </form>
            <DefaultLink linkText={linkText} redirectTo='/' />
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