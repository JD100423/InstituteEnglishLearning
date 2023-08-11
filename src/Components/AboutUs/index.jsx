import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
    display: flex;
    background-color: #01579B;
    justify-content: center;
`;

const Content = styled.div`
    align-items: center;
    display: flex;
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
    border: 1px solid #EEEEEE;
    display: flex;
    box-shadow: 0 3px 10px  rgb(21, 30, 37);
`;

const Infop = styled.p`
    font-size: 22px;
    font-family: 'Josefin Sans', sans-serif;
    color: #fff;
`
const AboutUs = () => {
    return(
        <>
        <Title>About us</Title>
        <Container>
            <Content>
                <Info>
                    <Infop>We are a 100% certified institute with more than 30 years being a leader as an
                        English institute in Latin America, thus achieving global positioning when it comes to
                        English language teaching.
                    </Infop>
                </Info>
                <Info>
                    <Infop>We are a 100% certified institute with more than 30 years being a leader as an
                        English institute in Latin America, thus achieving global positioning when it comes to
                        English language teaching.
                    </Infop>
                </Info>
                <Info>
                    <Infop>We are a 100% certified institute with more than 30 years being a leader as an
                        English institute in Latin America, thus achieving global positioning when it comes to
                        English language teaching.
                    </Infop>
                </Info>
            </Content>
            
        </Container>
        </>
    )
}

export default AboutUs;