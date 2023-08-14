import React from "react";
import { styled } from "styled-components";
import BackImage from '../img/englishimg.png'
import { Link } from "react-router-dom";

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 45%;
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
const Container = styled.section`
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
const Title = styled.h2`
    font-size: 35px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    color: #fff;
`;
const Content = styled.div`
    align-items: center;
    margin-bottom: 10px;
    justify-content: space-between;
    display: flex;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
const CardCoursesInfo = styled.div`
    width: 700px;
    background-color: #33333375;
    text-align: center;
    border-radius: 20px;
    margin-left: 15px;
    padding: 10px;
    @media (max-width: 768px) {
        max-width: 300px;
        margin-bottom: 10px;
    }
`;
const CoursesTitle = styled.h3`
    font-family: 'Roboto', sans-serif;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    padding: 5px;
`;
const CoursesInfo = styled.p`
    font-family: 'Roboto', sans-serif;
    color: #fff;
`;

const MVVsection = styled.section`
    background-color: #01579B;
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
        flex-direction: column;
    }
    `;
const MVVContent = styled.div`
    align-items: center;
    display: flex;
    margin-top: 10px;
    margin-bottom: 15px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
const MVVCards = styled.div`
    width: 400px;
    background-color: #fff;
    align-items: center;
    border-radius: 10px;
    margin-left: 15px;
    color: #000;
    padding: 10px;
    @media (max-width: 768px) {
        max-width: 350px;
        margin-bottom: 15px;
        margin-right: 15px;
    }
`;
const MVVTitle = styled.h3`
    font-size: 22px;
    font-family: 'Raleway', sans-serif;
    text-align: center;
`;
const MVVCont = styled.p`
    font-size: 15px;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
`;
const ContainerCourses = styled.section`
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
        flex-direction: column;
    }
    `;
const ContentCourses = styled.div`
    align-items: center;
    display: flex;
    @media (max-width: 768px) {
        flex-direction: column;
    }
    `;
const TitleCourses = styled.h2`
    font-family: 'Raleway', sans-serif;
    font-size: 30px;
    color: #222;
    text-align: center;
`;
const CardsCourses = styled.div`
    width: 300px;
    background-color: #01579B;
    border-radius: 13px;
    padding: 20px;
    align-items: center;
    margin-left: 16px;
    margin-bottom: 15px;
`;
const CardTitle = styled.h2`
    font-family: 'Raleway', sans-serif;
    font-size: 50px;
    color: #fff;
    text-align: center;
`;
const Morecontent = styled.section`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;
const Moreinfo = styled.div`
    align-items: center;
    max-width: 300px;
    padding: 15px;
    border-radius: 20px;
    justify-content: center;
`;
const MoreQuestion = styled.h3`
    font-family: 'Raleway', sans-serif;
    font-size: 22px;
    text-align: center;
    color: #000;
`;
const Morebutton = styled(Link)`
    text-decoration: none;
    color: #000;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 20px;
    padding: 20px;
    border-radius: 20px;
    transition: all 0.5s ease-in-out;
    margin-left: 50px;
    &:hover{
        background-color: #229954;
        color: #fff;
    };
`;


const Courses = () => {
    return(
        <>
        <Title>Information</Title>
        <Container>
            <Background/>
            <Content>
                <CardCoursesInfo>
                    <CoursesTitle>What's the importance of English?</CoursesTitle>
                    <CoursesInfo>In addition to being the most well-known and spoken in almost the entire planet, English is the official language of numerous countries
                        such as England, Ireland, United States, Canada, Malt, Australia, New Zealand, amoung others.
                    </CoursesInfo>
                </CardCoursesInfo>
                <CardCoursesInfo>
                    <CoursesTitle>Why should you study at our institute?</CoursesTitle>
                    <CoursesInfo>We have many benefits for students like a break time, we give you the food and transportation of your house. 
                    </CoursesInfo>
                </CardCoursesInfo>
            </Content>
        </Container>
            <MVVsection>
                <MVVContent>
                    <MVVCards>
                        <MVVTitle>Mission</MVVTitle>
                        <MVVCont>Helps students build knowledge of the content and methods of literary studies, TESOL, English education, and academic, professional, and creative writing. 
                            It also provides General Education courses in Communication (CW, CA), Humanities and Fine Arts (HF), Diversity (D), and Ethical Citizenship (EC). In addition, our 
                            institute is committed to an interdisciplinary approach to knowledge, evident in their involvement in programs such as Ethnic Studies, Women's Studies, Film Studies, 
                            International Studies, and Environmental Studies. Our graduates are well prepared for professional and graduate study and for lifelong learning. They pursue careers 
                            in education, research, business, law, government, and publishing. The Department's policies and its reading- and writing-intensive curriculum demonstrate our commitment 
                            to the liberal arts.</MVVCont>
                    </MVVCards>
                    <MVVCards>
                        <MVVTitle>Vision</MVVTitle>
                        <MVVCont>To provide appropriate pedagogies - including class size - and environments (classrooms, equipment, resources, and technology) that will lead o student retention and success as well as an increase in the number of majors and minors.</MVVCont>
                        <MVVCont>To help students see themselves as professionals, as part of a discipline with skills and abilities valuable in the business, teaching, publishing, or post-graduate work.</MVVCont>
                        <MVVCont>To give students a sense of themselves as citizens of a larger community by encouraging participation in service learning and in diverse and international course work and programming.</MVVCont>
                        <MVVCont>To assure that students encounter creativity crucial to English studies through theater productions, readings by professional writers, and their own creative and critical production and presentation.</MVVCont>
                        <MVVCont>To balance the needs of general education - communication, diversity, global perspectives, interdisciplinary studies - with those of the major.</MVVCont>
                        <MVVCont>To acquire adequate funding to support the department's contributions to general education and the liberal arts through departmental budgets and hiring.</MVVCont>
                        <MVVCont>To value faculty scholarship and service through greater support for and participation in activities of the profession.</MVVCont>
                    </MVVCards>
                    <MVVCards>
                        <MVVTitle>Values</MVVTitle>
                        <MVVCont>Convey knowledge of literary history, literary forms, literary theory, and a wide variety of texts and a wide array of vocabularies and practices used to consider them.</MVVCont>
                        <MVVCont>Give students an understanding of an an appreciation for the English language.</MVVCont>
                        <MVVCont>Provide students with sophisticated writing and critical thinking skills useful not only in the academy but also in the world at large.</MVVCont>
                        <MVVCont>Offers opportunities to explore identity, values, manners, and morals.</MVVCont>
                    </MVVCards>
                </MVVContent>
            </MVVsection>
            <TitleCourses>Our Courses</TitleCourses>
            <ContainerCourses>
                <ContentCourses>
                    <CardsCourses>
                        <CardTitle>Children learning</CardTitle>
                    </CardsCourses>
                    <CardsCourses>
                        <CardTitle>Adults learning</CardTitle>
                    </CardsCourses>
                    <CardsCourses>
                        <CardTitle>Juniors learning</CardTitle>
                    </CardsCourses>
                    <CardsCourses>
                        <CardTitle>Playful learning </CardTitle>
                    </CardsCourses>
                    <CardsCourses>
                        <CardTitle>TOEFL preparatoy</CardTitle>
                    </CardsCourses>
                </ContentCourses>
            </ContainerCourses>
            <Morecontent>
                    <Moreinfo>
                        <MoreQuestion>What are you waiting for?</MoreQuestion>
                        <Morebutton to="/">Apply Now!</Morebutton>
                    </Moreinfo>
            </Morecontent>
        </>
    )
}

export default Courses;