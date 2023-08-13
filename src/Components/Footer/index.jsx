import React from "react";
import { styled } from "styled-components";
import BKClogo from '../img/BKlogo.png';

const FooterC = styled.footer`
    display: flex;
    background-color: #01579B;
    padding: 2rem 0,0,0;
    flex-direction: column;
    align-items: center;
`;
const FooterImg = styled.img`
    width: 150px;
    max-width: 600px;
`;
const Content = styled.div`
    align-items: center;
    color: #fff;
`;

const TitleFooter = styled.h3`
    font-family: 'Josefin Sans', sans-serif;
    margin: 0;
    padding-top: 0;
    text-align: center;
`;

const FooterInfo = styled.p`
    text-align: center;
    margin-top: 1px;
    font-weight: 400;
    font-family: 'Josefin Sans', sans-serif;
`

const Footer = () => {
    return(
        <>
        <FooterC>
            <FooterImg src={BKClogo} alt="BKC Learning Logo"/>
            <Content>
                <TitleFooter>&copy;BKC English Institute</TitleFooter>
                <FooterInfo>Av. Abraham Lincoln 21, Santo Domingo</FooterInfo>
            </Content>
        </FooterC>
        </>
    )
}

export default Footer;