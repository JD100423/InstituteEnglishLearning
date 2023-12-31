import React from "react";
import { styled } from "styled-components";
import BackImage from '../img/learningimg.jpg';
import logo from '../img/BKlogoimg.png';
import AboutUs from "../AboutUs";
import Testimony from "../Testimony";

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 65%;
    z-index: -1;
    background-image: url(${BackImage});
    background-size: cover;
    background-position: center;
    filter: blur(3px);
    @media (max-width: 768px){
        width: 100%;
        height: 75%;
    }
`;
const Container = styled.div`
    display: flex;
    height: 50vh;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 768px){
        flex-direction: column;
        justify-content: center;
        height: 100%;
        margin-bottom: 10px;
    }
    `;
const Content = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 20px;
    `;
const SeccionInicio = styled.div`
    border-radius: 15px;
    padding: 20px;
    background-color: #E1F5FE;
`;
const Secciontitle = styled.h1`
    text-align: center;
    font-family: 'Josefin Sans', sans-serif;

`;
const Logo = styled.div`
    max-width: 40vh;
    background-color: #E0F2F1;
    border-radius: 10px;
`;
const LogoImg = styled.img`
    width: 100%;
`
const ContentInfo = styled.div`
    margin-left: 20px;
`;
const SeccionInfo = styled.p`
font-size: 20px;
font-family: 'Josefin Sans', sans-serif;
color: #555;
`;
const Home = () => {
    return (
        <>
        <Container>
            <Background/>
            <Content>
            <SeccionInicio>
                    <Secciontitle>Welcome to BKC English Institute.</Secciontitle>
            <ContentInfo>
                <SeccionInfo>Hello, welcome to the BKC English Institute.
                    If you want to learn English you are in the best place, we are the best and <br/> most important
                    English Institute in Latin America, we have the best English teachers in the Caribbean and the <br/>
                    best courses. Don't miss the opportunity get a course today.
                </SeccionInfo>
            </ContentInfo>
            </SeccionInicio>
            </Content>
            <Logo>
                <LogoImg src={logo} alt="BCK English Instute Logo"/>
            </Logo>
        </Container>
            <AboutUs/>
            <Testimony/>
        
        </>
    )
}

export default Home;