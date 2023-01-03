import React, { Fragment } from "react";
import styled from "styled-components";
import downloadData from '../fixtures/download.json'
export default function DownloadContainer() {
  return (
    <Container>
      <Frame>
        <Pane>
          <Left className="bg-[]">Download Helix</Left>
          <Right>
            <Title>
            Stay connected on Helix across your devices, so you can pick up any conversation where you left off.
            </Title>
            <Links>By installing Helix, you agree to our <span className="underline">Terms</span> & <span className="underline">Privacy Policy.</span></Links>
            </Right>
        </Pane>
      </Frame>

      <Download>
        {downloadData.map((item) =>(
            <DownloadContent className="hover:bg-[#f79f1b] transition-all delay-100">
                <IFrame>
                <TopItem1>
            <DownloadHeader>{item.header}</DownloadHeader>
            <DownloadTitle>{item.title}</DownloadTitle>
            <DownloadCaption>{item.caption}</DownloadCaption>
            </TopItem1>
            <TopItem2>
            <DownloadImage src={item.btnImg} alt="DownloadImg"></DownloadImage>
            </TopItem2>
            </IFrame>
            </DownloadContent>
            
        ))}
      </Download>
    </Container>
  );
}


const Container =  styled.div`
background:#ffc26093;
`;
const Frame =  styled.div`
width:100%;
padding:0px;
@media (max-width:1000px){
    padding:10px;
}
`;
const Pane =  styled.div`
display:flex;
flex-direction:justify-between;
align-items:center;
margin:auto;
width:80%;
@media (max-width:1000px){
    display:flex;
    flex-direction:column;
    width:100%;
    align-items:flex-start;

}
`;
const Left =  styled.h1`
font-size:60px;
padding:40px;
@media (max-width:1000px){
    padding:10px;
    font-size:40px;
    width:50%;
}
`;

const Right =  styled.div`
padding:40px;
width:60%;
@media (max-width:1000px){
    width:100%;
    padding:10px;
}
`;
const Title =  styled.p`
margin-bottom:40px;
@media (max-width:1000px){
    margin-bottom:20px;
}

`;
const Links =  styled.p`
    font-size:10px;
`;
const Download =  styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin:auto;
    @media (max-width:1000px){
        display:flex;
        flex-direction:column;
        width:100%;

    
    }

`;
const DownloadHeader =  styled.span`
    background:#E9A945;
    padding:10px;
    border-radius:10px;
    width:40%;
    text-align:center;
`;
const DownloadContent =  styled.div`
    background:#000;
    height:400px;
    display:flex;
    color:#fff;
    width:20%;
    border-radius:15px;
    flex-direction:column;
    padding:30px;
    margin:20px;

    align-items:center;
    justify-content:space-between;

    @media (max-width:1000px){
     
        width:80%;
      
    
    }
`;
const DownloadTitle =  styled.h2`
    font-size:50px;
    letter-spacing:4px;
    font-weight:500;
`;
const DownloadImage =  styled.img`
    width:200px;
    margin-top:90px;
`;
const DownloadCaption =  styled.p`
        font-size:10px;
        text-align:center;
        width:100%;
`;
const TopItem1 =  styled.div`
        font-size:14px;
        text-align:center;
`;
const TopItem2 =  styled.div`
     display:flex;
     align-items:center;
     margin:auto;
     
`;
const IFrame =  styled.div`
        
        padding:10px;
`;
