import React from "react";
import { styled } from "styled-components";
import Ceo1 from '../img/ceo1.png';
import Ceo2 from '../img/ceo2.png';
import Ceo3 from '../img/ceo3.png';
import Ceo4 from '../img/ceo4.png';
import Ceo5 from '../img/ceo5.png';

const CeoContainer = styled.section`
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const CeoContent = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    @media (max-width: 768px) {
        align-items: start;
    }
`;

const CeoTitle = styled.h2`
    font-size: 30px;
    font-family: 'Bricolage Grotesque', sans-serif;
    font-weight: 600;
    text-align: center;
`;
const CeoCards = styled.div`
    width: 600px;
    padding: 10px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    margin-left: 5px;
    margin-bottom: 10px;
    @media (max-width: 768px) {
        max-width: 400px;
    }
`;
const CeoImg = styled.img`
    width: 300px;
    margin-bottom: 10px;
    border-radius: 20px;
    @media (max-width: 768px) {
        max-width: 150px;
    }
`;
const CeoInfoCard = styled.div`
    align-items: center;
    text-align: center;
`;
const CeoName = styled.h3`
    font-size: 20px;
    font-family: 'Bricolage Grotesque', sans-serif;
    margin-right: 10px;
`;
const CeoInfo = styled.p`
   font-size: 15px;
   font-family: 'Bricolage Grotesque', sans-serif;
`;

const CEO = () => {
    return(
        <>
            <CeoTitle>Our Executives</CeoTitle>
        <CeoContainer>
            <CeoContent>
                <CeoCards>
                    <CeoInfoCard>
                        <CeoName>Johan Alveroni Jimenez</CeoName>
                        <CeoInfo>Founder and Ceo of BKC English Institute</CeoInfo>
                    </CeoInfoCard>
                    <CeoImg src={Ceo1} alt="Ceo Photo"/>
                </CeoCards>
                <CeoCards>
                    <CeoInfoCard>
                        <CeoName>Lady Laura Adames</CeoName>
                        <CeoInfo>Executive Vicepresident</CeoInfo>
                    </CeoInfoCard>
                    <CeoImg src={Ceo2} alt="Ceo Photo"/>
                </CeoCards>
                <CeoCards>
                    <CeoInfoCard>
                        <CeoName>Salvador E. Guerrero A.</CeoName>
                        <CeoInfo>Director General</CeoInfo>
                    </CeoInfoCard>
                    <CeoImg src={Ceo3} alt="Ceo Photo"/>
                </CeoCards>
                <CeoCards>
                    <CeoInfoCard>
                        <CeoName>Auri M. Mirabal Capellan</CeoName>
                        <CeoInfo>Executive Secretary</CeoInfo>
                    </CeoInfoCard>
                    <CeoImg src={Ceo4} alt="Ceo Photo"/>
                </CeoCards>
                <CeoCards>
                    <CeoInfoCard>
                        <CeoName>Ercilia M. Reynoso Alcantara</CeoName>
                        <CeoInfo>General Coordinator</CeoInfo>
                    </CeoInfoCard>
                    <CeoImg src={Ceo5} alt="Ceo Photo"/>
                </CeoCards>
            </CeoContent>
        </CeoContainer>
        </>
    )
}

export default CEO;