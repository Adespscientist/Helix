import React from 'react'
import styled from 'styled-components'
import { GetApp } from '@material-ui/icons';
import helix from '../images/helix-mainlogo.png'
import helixwhite from '../images/helix-grp.png'
import * as ROUTES from '../constants/routes'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <FooterContainer>
        <Wrapper>
            <Item1>
                <FooterLogo src={helixwhite} alt="Helix-logo"></FooterLogo>
                <Link to={ROUTES.DOWNLOAD}>
                <FooterBtn>Download<CustomBtn /></FooterBtn>
                    </Link>
            </Item1>
            <WrapperLink>
            <Item2>
                <ul>
                <li className="topic"><a href=""  >What we do</a></li>
                <li><a href="">Features</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Stories</a></li>
                <li><a href="">For Business</a></li>
                </ul>
            </Item2>
            <Item3>
                <ul>
            <li className="topic"><a href="" >Who we are</a></li>
                <li><a href="">About us</a></li>
                <li><a href="">Careers</a></li>
                <li><a href="">Brand Center</a></li>
                <li><a href="">Privacy</a></li>
                </ul>
            </Item3>
            <Item4>
                <ul>
            <li className="topic"><a href="" >Use Helix</a></li>
                <li><a href="">Andriod</a></li>
                <li><a href="">Iphone</a></li>
                <li><a href="">Mac/PC</a></li>
                <li><a href="">Helix Web</a></li>
                </ul>
            </Item4>
            <Item5>
                <ul>
            <li className="topic"><a href="" >Need help ?</a></li>
                <li><a href="">Contact us</a></li>
                <li><a href="">Help Center</a></li>
                <li><a href="">Coronavirus</a></li>
                </ul>
            </Item5>
            </WrapperLink>
        </Wrapper>
        <Wrapper2>
            <ul>
        <li className="topic"><a href="">2022 &copy; Helix LLC</a></li>
        <li className="topic2"><a href="">Terms of Service</a></li>
        </ul>
             
            </Wrapper2>
    </FooterContainer>
  )
}

const FooterContainer= styled.div`
    background:#151b34;
    color:#fff;
    width:100%;
    position:absolute;
   
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
        align-items:center;
        justify-content:center;
        padding:20px;   
        @media (max-width: 768px){
            flex-direction:column;
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
        flex-direction:column-reverse;
        margin:15px 0;
       }
        `;
const Item2= styled.div`
padding:20px;
margin-left:20px;
.topic a{
    font-size:12px;
    margin-bottom:30px;
}
a{
    font-size:17px;
}
li{
    text-decoration:none;
    list-style:none;
    padding:4px;
}
@media (max-width:768px){
        margin:-20px;
        a{
            font-size:14px;
        }
}
`;
const Item3= styled(Item2)`

`;
const Item4= styled(Item2)`

`;
const Item5= styled(Item2)`

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
const WrapperLink = styled.div`
    display:grid;
    grid-template-columns:repeat(4, 1fr);
    padding:20px;
    grid-gap: 100px;
    margin:auto;
    @media (max-width: 1000px){
        grid-template-columns:repeat(2, 1fr) ;
        padding:0;
        margin:0;
    }
`;