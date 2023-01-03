import React from "react";
import { Chat } from "../components/chat";
import chatData from '../fixtures/Chat.json'
import styled from "styled-components";
import { Fade } from "react-reveal";
// import chatData from '../'
export default function ChatContainer(){
    return(
        <>
     
        <Container>
           
            {
            chatData.map((item)=>(
                <Fade>
                <Wrapper key={item.id}>
                <ChatText>{item.text}</ChatText>
                <ChatImage src={item.image} alt={item.alt}></ChatImage>
                <Fade bottom>
                
                </Fade>
                
                </Wrapper>
                </Fade>
            ))}
           
        </Container>
        </>
    )
}

const Container = styled.div``;
const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    margin:auto;
    padding:20px;
    justify-content:center;
    align-items:center;


`;

const ChatImage = styled.img`
    padding:20px;
    margin:auto;
    width:100%;
    height:100%;
   
`;
const ChatText = styled.h3`
        font-size:40px;
        width:80%;
        text-align:center;
        
        margin:auto;

        @media (max-width: 1000px){
            font-size:30px;
            line-height:2rem;
        }
`;