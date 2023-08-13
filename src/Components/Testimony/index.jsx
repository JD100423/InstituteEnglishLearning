import React from "react";
import { styled } from "styled-components";
import Student1 from '../img/student1.png';
import Student2 from '../img/student2.png';
import Student3 from '../img/student3.png';
 
const Container = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
`;
const Title = styled.h1`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 50px;
    font-weight: 700;
    text-align: center;
    margin: 0;
    padding: 10px;
`;
const Content = styled.div`
    align-items: center;
    display: flex;
`;
const Card = styled.div`
    max-width: 400px;
    text-align: center;
    margin-left: 10px;
    flex-wrap: wrap;
    border: 1px solid #1B4F72;
    border-radius: 10px;
`;
const CardTitle = styled.h2`
    font-family: 'Ubuntu', sans-serif;
    font-size: 20px;
    margin-top: 5px;
`;
const CardInfo = styled.h4`
    font-family: 'Ubuntu', sans-serif;
    font-size: 14px;
    margin-bottom: 6px;
    font-weight: 400;
    padding: 10px;
`;
const CardImg = styled.img`
    width: 300px;
    border-radius: 50%;
    background-color: transparent;
`;


const Testimony = () => {
    return(
        <div style={{backgroundColor: "whitesmoke", margin: "0"}}>
            <Title>Testimony</Title>
        <Container>
            <Content>
                <Card>
                    <CardImg src={Student1}/>
                    <CardTitle>Taisha Margarita</CardTitle>
                    <div style={{margin: "0", borderRadius: "15px", backgroundColor: "#EAEDED"}}>
                    <CardInfo>I love the language English and I decided to study it, I have a friend who recommended to study it in this institution and it was the best option.</CardInfo>
                    </div>
                </Card>
                <Card>
                    <CardImg src={Student2}/>
                    <CardTitle>Johan Alberoni Jimenez</CardTitle>
                    <div style={{margin: "0", borderRadius: "15px", backgroundColor: "#EAEDED"}}>
                        <CardInfo>In 2017, I had to learn because I got a job and one of requeriments was know English I started learn English in this Instite and was amazin, thanks a lot.</CardInfo>
                    </div>
                </Card>
                <Card>
                    <CardImg src={Student3}/>
                    <CardTitle>Jacdelin Mercedes Tiburcio</CardTitle>
                    <div style={{margin: "0", borderRadius: "15px", backgroundColor: "#EAEDED"}}>
                        <CardInfo>In 2017, I had to learn because I got a job and one of requeriments was know English I started learn English in this Instite and was amazin, thanks a lot.</CardInfo>
                    </div>
                </Card>
            </Content>
        </Container>
        </div>
    )
}

export default Testimony;