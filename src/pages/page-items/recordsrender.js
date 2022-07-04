import { useEffect } from 'react';
import styled from 'styled-components';

export default function RecordsRender({ data, setTotalValue, totalValue }){

    const date = data.date;
    const description = data.description;
    const value = parseInt(data.value);
    const type = data.type;

    useEffect(() => {
        if(data.type === 'entrada'){
            setTotalValue(totalValue + value);
        } else {
            setTotalValue(totalValue - value);
        }
    }, [data]);

    return (
        <Container type={type}>
            <span className='date'>{date}</span>
            <span className='description'>{description}</span>
            <span className='value'>{value}</span>
        </Container>
    );

}

const Container = styled.div `
    box-sizing: border-box;
    width: 100%;
    height: 30px;
    display: flex;
    padding: 20px;
    font-size: 16px;

    .date {
        width: 30%;
        color: #C6C6C6;
        text-align: left;
    }

    .description {
        color: black;
        text-align: left;
        margin-left: 5px;
    }

    .value {
        color: ${props => props.type === 'entrada' ? '#03AC00' : '#C70000'};
        text-align: right;
    }
`