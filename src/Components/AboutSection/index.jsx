import React from "react";
import { styled } from "styled-components";
import BKClogo from '../img/BKClogo.png';
import Teacher1 from '../img/teacher1.png';
import Teacher2 from '../img/teacher2.jpg';
import Teacher3 from '../img/teacher3.jpeg';
import CEO from "../CEO";

const Container = styled.div`
    display: flex;
    justify-content: space-around;

    @media (max-width: 768px) {
        justify-content: center;
        width: 100%;
    }
`;
const Content = styled.div`
    align-items: center;
    display: flex;
    @media (max-width: 768px) {
        flex-direction: column-reverse;
        
    }
    
`;
const AboutDiv = styled.div`
    display: flex;
    margin: 20px;
    align-items: flex-start;
    background-color: #1B4F72;
    border-radius: 16px;
    @media (max-width: 768px) {
        align-items: center;
        margin-left: 10px;
    }
    `;
const Card = styled.div`
    width: 500px;
    text-align: center;
    color: #fff;
    flex-wrap: wrap;
    @media (max-width: 768px) {
        max-width: 300px;
        align-items: center;
        padding: 10px;

    }
`;
const CardTitle = styled.h2`
    font-family: 'Bricolage Grotesque', sans-serif;
    font-size: 25px;
    font-weight: 400;
`;
const CardInfo = styled.h4`
    font-family: 'Bricolage Grotesque', sans-serif;
    font-size: 18px;
    font-weight: 400;
`;
const CardImg = styled.img`
    width: 500px;
    @media (max-width: 768px) {
        max-width: 300px;
    }
`;
const TeachersSeccion = styled.div`
    display: flex;
    justify-content: center;
    background-color: #01579B;
    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
    }
`;
const TeacherContent = styled.div`
    align-items: center;
    display: flex;
@media (max-width: 768px) {
    flex-direction: column;
}
`
const TeachersTitle = styled.h2`
    font-family: 'Bricolage Grotesque', sans-serif;
    background-color: #01579B;
    text-align: center;
    font-size: 30px;
    color: #fff;
    padding: 20px;
    margin-bottom: 0;
`;
const CardsTeachers = styled.div`
    width: 400px;
    padding: 20px;
    flex-wrap: wrap;
    margin-left: 15px;
    @media (max-width: 768px) {
        max-width: 100%;
        padding: 0;
    }
    `;
const ImgTeachers = styled.img`
    width: 200px;
    border-radius: 50% 50%;
    align-items: center;
    height: 200px;
    `;
const NameTeachers = styled.h2`
    font-family: 'Bricolage Grotesque', sans-serif;
    font-size: 15px;
    text-align: center;
    font-weight: 500;
    `;
const TeacherInfo = styled.div`
    background-color: #b3b6b778;
    justify-content: center;
    border-radius: 20px;
    color: #fff;
    @media (max-width: 768px) {
        align-items: center;
        max-width: 100%;
        text-align: center;
        margin-right: 15px;
    }
`;
const TeachersPosition = styled.p`
    font-size: 14px;
    text-align: center;
    font-family: 'Bricolage Grotesque', sans-serif;
`;

const About = () => {
    return(
        <>
        <Container>
            <Content>
                <AboutDiv>
                    <Card>
                        <CardTitle>About us</CardTitle>
                        <CardInfo>Our institute has more than 30 years teaching children, young and adults people the English language. </CardInfo>
                        <CardInfo>We openned our doors to the public in Septermber 1990. Our first building was located in the urbanization Maximo Gomez in Santo Domingo Norte. </CardInfo>
                    </Card>
                </AboutDiv>
                        <CardImg src={BKClogo} alt="BKC English Logo"/>
            </Content>
        </Container>
        <TeachersTitle>Our Teachers</TeachersTitle>
        <TeachersSeccion>
            <TeacherContent>
            <CardsTeachers>
                <div style={{ justifyContent: "center", display: "flex", marginBottom: "5px", maxWidth: "400px"}}>
                <ImgTeachers src={Teacher1}/>
                </div>
                <TeacherInfo>
                    <NameTeachers>Alexandra Mclain</NameTeachers>
                    <TeachersPosition>Children Teacher</TeachersPosition>
                </TeacherInfo>
            </CardsTeachers>
            <CardsTeachers>
            <div style={{ justifyContent: "center", display: "flex", marginBottom: "5px", maxWidth: "400px"}}>
                <ImgTeachers src={Teacher2}/>
                </div>
                <TeacherInfo>
                    <NameTeachers>Franchesca Santos</NameTeachers>
                    <TeachersPosition>Teacher</TeachersPosition>
                </TeacherInfo>
            </CardsTeachers>
            <CardsTeachers>
            <div style={{ justifyContent: "center", display: "flex", marginBottom: "5px", maxWidth: "400px"}}>
                <ImgTeachers src={Teacher3}/>
                </div>
                <TeacherInfo>
                    <NameTeachers>Lic. Daphna Rodriguez</NameTeachers>
                    <TeachersPosition>Children Teacher</TeachersPosition>
                </TeacherInfo>
            </CardsTeachers>
            </TeacherContent>
        </TeachersSeccion>
        <CEO/>
        </>
    )
}

export default About;