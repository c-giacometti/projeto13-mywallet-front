import styled from 'styled-components';
import { ThreeDots } from 'react-loader-spinner';

export default function DefaultButton({ disable, innerText, type }){

    if(disable !== ''){

        return (
            <Button>
                <ThreeDots 
                    height="15px"
                    width="50px"
                    color="#FFFFFF"
                />
            </Button>
        );

    } else {

        return (
            <Button type={type}>
                {innerText}
            </Button>
        );

    }

}

const Button = styled.button `
    box-sizing: border-box;
    width: 325px;
    height: 50px;
    background-color: #A328D6;
    color: white;
    font-size: 22px;
    font-weight: 700;
    border-radius: 5px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`