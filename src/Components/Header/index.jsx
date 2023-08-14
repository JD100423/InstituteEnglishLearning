import React from "react";
import { styled } from "styled-components";
import logo from '../img/BKlogoimg.png'
import { Link } from "react-router-dom";

const Container = styled.header`
    background-color: #01579B;
    color: #fff;
    padding: 2rem;
    align-items: center;
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        padding: 10px;
        
    }
`;
const Nav = styled.nav`
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
        text-align: center;
        align-items: center;
        padding-bottom: 10px;
    }
`;
const ImgContainer = styled.div`
    max-width: 100px;
`;
const Logo = styled.img`
    width: 100px;
    filter: invert(100%);
`;
const Ul = styled.ul`
    list-style: none;
    display: flex;
    gap: 1rem;
    margin: 0;
    padding: 0;
`;
const Li = styled.li`
    padding: 0;
    margin: 0;
`;
const A = styled(Link)`
    text-decoration: none;
    color: #fff;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 20px;
    transition: all 0.5s ease-in-out;
    
    &:hover{
        background-color: #03A9F4;
        color: #212121;
        padding: 20px;
        border-radius: 15px;
    }
    @media (max-width: 768px) {
        padding: 0;
        display: block;
        align-items: center;
    }
`;
const Header = () => {
    return (
        <Container>
                <ImgContainer>
                    <Logo src={logo} alt="BKC Englis Institute logo"/>
                </ImgContainer>
            <Nav>
                <Ul>
                    <Li><A to="/">Home</A></Li>
                    <Li><A to="/About">About us</A></Li>
                    <Li><A to="/Courses">Courses</A></Li>
                    <Li><A to="/Contact">Contact</A></Li>
                </Ul>
            </Nav>
        </Container>
    )
}

export default Header;