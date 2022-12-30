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
                <ChatImage src={item.image} alt={item.alt}></ChatImage>
                <Fade bottom>
                <ChatText>{item.text}</ChatText>
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

    @media (max-width: 1000px){
        width:100%;
    }
`;
const ChatText = styled.p`
        font-size:50px;
        width:80%;
        text-align:center;
        line-height:2.9rem;
        margin:auto;

        @media (max-width: 1000px){
            font-size:30px;
            line-height:2rem;
        }
`;