import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from '../../user-context';
import DefaultButton from '../general-login-signup/default-button';
import DefaultInput from '../general-login-signup/default-input';

export default function Form( {type} ){

    const [value, setValue] = useState(0);
    const [description, setDescription] = useState('');
    const [disable, setDisable] = useState('');

    const { userInfo } = useContext(UserContext);

    const buttonText = `Salvar ${type}`;
    const API = 'http://localhost:5000/register';
    const navigate = useNavigate();
    const userId = userInfo.response.userId;
    const token = userInfo.response.token;

    function postInfo(event){

        event.preventDefault();

        setDisable('disabled');

        const config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        } 

        const recordInfo = {
            userId,
            description,
            value,
            type
        }

        const promise = axios.post(API, recordInfo, config)
            .then(() => {
                navigate('/inicio');
            })
            .catch(() => {
                alert('Não foi possível cadastrar os dados, tente novamente');
                setDisable('');
            })
    }

    return (
        <form onSubmit={postInfo}>
            <DefaultInput disable={disable} placeHolder='Valor' type='number' state={setValue} value={value} />
            <DefaultInput disable={disable} placeHolder='Descrição' type='text' state={setDescription} value={description} />
            <DefaultButton disable={disable} innerText={buttonText} type='submit' />
        </form>
    );

}