import React from 'react'
import styled from 'styled-components'
import { GetApp } from '@material-ui/icons';
import helix from '../images/helix-mainlogo.png'
import helixwhite from '../images/helix-grp.png'
export default function Mobilefooter() {
  return (
    <FooterContainer>
        <Wrapper>
            <Item1>
                <FooterLogo src={helixwhite} alt="Helix-logo"></FooterLogo>
                <FooterBtn>Download<CustomBtn /></FooterBtn>
                <li className="topic"><a href="">2022 &copy; Helix LLC</a></li>
        <li className="topic2"><a href="">Terms of Service</a></li>
            </Item1>
        </Wrapper>
        <Wrapper2>
        <li className="topic"><a href="">2022 &copy; Helix LLC</a></li>
        <li className="topic2"><a href="">Terms of Service</a></li>
             
            </Wrapper2>
    </FooterContainer>
  )
}

const FooterContainer= styled.div`
    background:rgb(44,51,91);
    color:#fff;
    width:100%;
    bottom:0;
    height:100vh;
    // position:absolute;
    padding:60px;
   
`;
const Wrapper= styled.div`
        display:flex;
        align-items:center;
        justify-content:center;
        border-bottom:1px solid #ccc;
        padding:100px;   

        @media (max-width: 768px){
            flex-direction:column;
            padding:10px;
            align-items:center;
           
        }
        li{
            list-style:none;
            padding:30px;
        }
`;
const Wrapper2= styled.div`
        display:flex;
        margin:20px;
        align-items:center;
        justify-content:center;
        padding:20px;   

        @media (max-width: 768px){
            flex-direction:column;
            padding:10px;
            align-items:center;
           
        }
        li{
            list-style:none;
            padding:30px;
        }
        .topic{
            font-size:13px;
        }
        .topic2{
            font-size: 10px;
        }
`;
const Item1= styled.div`
       display:flex;
       flex-direction:column;
       justify-content:space-between;
       align-items:center;
       @media (max-width: 768px){
        flex-direction:column;
        margin:15px 0;
       }
        `;

const FooterBtn= styled.button`
padding: 10px;
background: rgb(233,169,69);
border-radius: 50px;
padding: 20px;
width: 200px;
margin-top: 30px;
color:#000;
@media (max-width: 768px){
    margin-bottom:20px;
}
`;
const CustomBtn= styled(GetApp)`

`;
const FooterLogo = styled.img`
width:100px;
height:40px;
objext-fit:contain;

`;
