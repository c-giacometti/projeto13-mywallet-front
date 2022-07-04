import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import UserContext from '../../user-context';
import RecordsRender from './recordsrender';

export default function Records(){

    const API = 'http://localhost:5000/records';

    const [recordsData, setRecordsData] = useState('');
    const [totalValue, setTotalValue] = useState(0);

    const { userInfo } = useContext(UserContext);
    const token = userInfo.response.token;

    useEffect(() => {

        const config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        } 

        console.log(token)

        const promise = axios.get(API, config)
            .then(response => {
                setRecordsData(response.data);
            })
            .catch((error) => {
                console.log(error);
                alert('Não foi possível obter os dados, tente novamente mais tarde');
            })

    }, []);
 
    if(recordsData.length === 0){
        return (
            <ContainerNoData>
                <span>Não há registros de entrada ou saída</span>
            </ContainerNoData>
        );
    } else {
        return (
            <Container>
                <Values>
                    {recordsData.map((render, index) => <RecordsRender 
                                                        data={render}
                                                        setTotalValue={setTotalValue}
                                                        totalValue={totalValue} 
                                                        key={index} />)}
                </Values>
                <Bottom totalValue={totalValue}>
                    <span className='total'>SALDO</span>
                    <span className='totalValue'>{totalValue < 0 ? totalValue*(-1) : totalValue}</span>
                </Bottom>
            </Container>
        )
    }
    
}

const Container = styled.div `
    height: 70%;
    width: 90%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
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

const ContainerNoData = styled.div `
    height: 70%;
    width: 90%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

const Bottom = styled.div `
    box-sizing: border-box;
    width: 100%;
    display: flex;
    padding: 20px;
    color: black;

    .total {
        text-align: left;
    }

    .totalValue {
        text-align: right;
        color: ${props => props.totalValue > 0 ? '#03AC00' : '#C70000'};
    }
`

const Values = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
`