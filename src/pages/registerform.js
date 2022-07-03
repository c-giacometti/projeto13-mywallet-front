import { useState } from 'react';
import DefaultButton from '../general-login-signup/default-button';
import DefaultInput from '../general-login-signup/default-input';

export default function Form( {type} ){

    const [value, setValue] = useState(0);
    const [description, setDescription] = useState('');
    const [disable, setDisable] = useState('');
    const buttonText = `Salvar ${type}`;

    function postInfo(event){

        event.preventDefault();

        setDisable('disabled');
        
        console.log("olá");
    }

    return (
        <form onSubmit={postInfo}>
            <DefaultInput disable={disable} placeHolder='Valor' type='number' state={setValue} value={value} />
            <DefaultInput disable={disable} placeHolder='Descrição' type='text' state={setDescription} value={description} />
            <DefaultButton disable={disable} innerText={buttonText} type='submit' />
        </form>
    );

}