import React from "react";
import { styled } from "styled-components";
import { Box } from "@mui/material";
import { TextField } from "@mui/material";

const Title = styled.h1`
    font-size: 35px;
    text-align: center;
    font-family: 'Noto Sans', sans-serif;
    color: #fff;
    margin-top: 0;
`;
const Container = styled.div`
    justify-content: center;
    padding: 20px;
    `
const Content = styled.section`
    align-items: center;
    background-color: #fff;
    display: flex;
    border-radius: 20px;
    justify-content: space-between;
    padding: 30px;
    color: #fff;
`;
const Input = styled(TextField)`
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 16px;
    border: none;
    padding: 20px;
    border-radius: 15px;
    outline-color: #01579B;
    font-family: 'Noto Sans', sans-serif;
    margin-bottom: 10px;
    `;
const ContentBox = styled(Box)`
    justify-content: space-evenly;
    display: flex;
    margin: 80px 50px;
    flex-wrap: wrap;
    padding: 16px;
    width: 100%;
    border: none;
    border-radius: 15px;
    color: #fff;
    box-shadow: 1px 1px 4px rgba(0,0,0,0.6);
`;
const Button = styled.button`
    padding: 20px 30px;
    border-radius: 20px;
    border: none;
    background-color: #01579B;
    text-align: center;
    color: #fff;
    font-family: 'Noto Sans', sans-serif;
    font-size: 15px;
    transition: all 0.3s ease-in-out;
    &:hover{
        background-color: #58D68D;
        color: #fff;
        font-size: 20px;
    }
`

const FormularioContact = () => {
    return(
        < div style={{backgroundColor: "#01579B"}}>
        <Title>Contact us</Title>
        <Container>
        <Content>
            < ContentBox component="form">
                <Input placeholder="Enter your name" label="Name" style={{marginBottom: "20px"}}/>
                <Input placeholder="Enter your last name" label="Last Name" style={{marginBottom: "20px"}}/>
                <Input placeholder="Enter your email" label="Email" style={{marginBottom: "20px"}} type="email"/>
                <Input placeholder="Enter your phone number" label="Phone number" style={{marginBottom: "20px"}} type="number"/>
                <Input placeholder="Enter your message" label="Message" style={{marginBottom: "20px"}} multiline rows={4}/>
            <Button>Send </Button>
            </ContentBox>
        </Content>
        </Container>
        </div>
    )
}

export default FormularioContact;