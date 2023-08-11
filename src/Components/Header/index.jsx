import React from "react";
import { styled } from "styled-components";
import logo from '../img/BKlogoimg.png'

const Container = styled.header`
    background-color: #01579B;
    color: #fff;
    padding: 2rem;
    align-items: center;
    display: flex;
    justify-content: space-between;
`;
const Nav = styled.nav`
    display: flex;
    justify-content: center;
`;
const ImgContainer = styled.div`
    max-width: 100px;
`
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
const A = styled.a`
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
`;
const Header = () => {
    return (
        <Container>
                <ImgContainer>
                    <Logo src={logo} alt="BKC Englis Institute logo"/>
                </ImgContainer>
            <Nav>
                <Ul>
                    <Li><A href="#">Home</A></Li>
                    <Li><A href="#">About us</A></Li>
                    <Li><A href="#">Courses</A></Li>
                    <Li><A href="#">Contact</A></Li>
                </Ul>
            </Nav>
        </Container>
    )
}

export default Header;