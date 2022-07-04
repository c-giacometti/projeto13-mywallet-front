import styled from 'styled-components';
import logo from '../assets/MyWallet.png'

export default function MyWalletLogo(){

    return (
        <Logo>
            <img src={logo} alt='logotipo-trackit' />
        </Logo>
    );

}

const Logo = styled.div `
    img {
        height: 40px;
        width: 150px;
        margin: 0px 0px 25px 0px;
    }
`