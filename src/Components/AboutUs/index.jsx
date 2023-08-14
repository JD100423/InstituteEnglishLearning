import React from "react";
import { styled } from "styled-components";
import NationalLogo from '../img/Nationallogo.png';
import Cabridgelogo from '../img/cambridgelogo.jpg';
import BKClogo from '../img/BKlogoimg.png';

const Container = styled.div`
    display: flex;
    background-color: #01579B;
    justify-content: center;
    margin: 0;
    padding-bottom: 20px;
    `;

const Content = styled.div`
    align-items: center;
    display: flex;
    @media (max-width: 768px){
        flex-direction: column;
    }
`;
const Title = styled.h1`
    font-family: 'Josefin Sans', sans-serif;
    text-align: center;
    font-weight: 700;
    background-color: #01579B;
    padding: 20px;
    color: #fff;
    margin: 0;
`;
const Info = styled.div`
    border-radius: 15px;
    padding: 20px;
    margin-left: 20px;
    margin-bottom: 20px;
    max-width: 500px;
    flex-wrap: wrap;
    border: 1px solid #EEEEEE;
    display: flex;
    box-shadow: 0 3px 10px  rgb(21, 30, 37);
    justify-content: center;
    @media (max-width: 768px){
        margin-right: 10px;
    }
`;

const Infop = styled.p`
    font-size: 22px;
    font-family: 'Josefin Sans', sans-serif;
    color: #fff;
`;
const Infoimg = styled.img`
    max-width: 200px;
    align-items: center;
    border-radius: 15px;
`;
const AboutUs = () => {
    return(
        <>
        <Title>About us</Title>
        <Container>
            <Content>
                <Info>
                    <Infoimg src={BKClogo} alt="BKC Logo"/>
                    <Infop>We are a 100% certified institute with more than 30 years being a leader as an
                        English institute in Latin America, thus achieving global positioning when it comes to
                        English language teaching.
                    </Infop>
                </Info>
                <Info>
                <Infoimg src={NationalLogo} alt="National Geographic Logo"/>
                    <Infop>We have multiple certifications that we have acquired over the years. As the recognition of National Geographic Learning,
                        recognized us as the best institution to learn English in the region.
                    </Infop>
                </Info>
                    
                <Info>
                    <Infoimg src={Cabridgelogo} alt="Cambridge Logo"/>
                    <Infop> In november last year, Cambridge School English, recognized us as the institution with the best English teachers
                    </Infop>
                </Info>
            </Content>
            
        </Container>
        </>
    )
}

export default AboutUs;