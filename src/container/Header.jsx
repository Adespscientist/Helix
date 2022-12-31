import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';
import { ExpandMore, GetApp, Menu, KeyboardArrowUp, Close } from '@material-ui/icons';
import Nav from '../components/Nav';
import Sidenav from '../components/Sidenav';
export default function Header() {
const [isOpen, setIsOpen] = useState(false);
const [navIsOpen, setNavIsOpen] = useState(false);



// const handleClick = ()=>{
//         setNavIsOpen(true)
//         alert('hello')
        
// }
  return (
    <>
        
            <HeaderContainer>
           
                <Wrapper>
                <HeaderLogo src="/images/helix-logo.png" alt="Helix-logo"></HeaderLogo>
                    <WrapperLink>
                      
                    <li><button onClick={()=> setIsOpen(!isOpen)}>Features {isOpen  ? <KeyboardArrowUp /> :<ExpandMore /> }</button></li>
                    <li><a href="">Privacy</a></li>
                    <li><a href="">Help Center</a></li>
                    <li><a href="">Blog</a></li>
                    </WrapperLink>
                    <WrapperLink>
                    <li><a href="">Whatsapp Web</a></li>
                   <ButtonLink>Download <CustomBtn /></ButtonLink>
                    </WrapperLink>
                </Wrapper>
            </HeaderContainer> 
            {isOpen ? <Nav />: <div></div>}
             <SmallWrapper>
             <BurgerMenu >
                <button onClick={() => setNavIsOpen(!navIsOpen)}>{navIsOpen ? <Close /> :<Menu /> }</button>
                {/* <CustomMenu onClick={(handleClick)}>Hello</CustomMenu> */}
                </BurgerMenu>
             <HeaderLogoSmall src="/images/helix-logo.png" alt="Helix-logo"></HeaderLogoSmall>
             <ButtonLinkSmall> <CustomBtn /></ButtonLinkSmall>
             </SmallWrapper>
             {navIsOpen ? <Sidenav />: null}
             </>
      
  )
}

const HeaderContainer = styled.div`
padding:10px 35px 0 35px;
margin:auto;
@media (max-width: 1000px){
    display:none;
}



`;
const HeaderLogo = styled.img`
    width:130px;
    height:30px;
    objext-fit:contain;
    margin-right:200px;
`;

const Wrapper = styled.div`
        display:flex;
        justify-content:space-between;
        align-items:center;
        width:100%;
`;

const WrapperLink = styled.div`
    display:flex;
    align-item:center;
    justify-content:center;

    li{
        text-decoration:none;
        list-style:none;
        padding:20px;
    }
    a{
        padding:10px;
        font-weight:300;
    }
    @media (max-width:1000px){
        display:none;
    }
`;
const CustomBtn = styled(GetApp)`



`;  
const CustomBtnLink = styled(ExpandMore)`

`;  
const ButtonLink = styled.button`
        background:rgb(233,169,69);
        border-radius: 50px;
        padding: 0px;
        width: 180px;
        margin:0;
        border:1px soild #000;
      
`;  
const ButtonLinkSmall = styled.button`
        background:rgb(233,169,69);
        border-radius: 100%;
        width:50px;
        padding:10px;
        border:1px solid black;
      
`;  
const SmallWrapper = styled.div`
display:none;
@media (max-width: 1000px){
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:20px;
}    
   
`;  
const BurgerMenu = styled.div`    
      
`;  
const CustomMenu = styled.button`    
      background:red;
      height:200px;
`;  
const HeaderLogoSmall = styled.img`    
width:80px;
height:20px;
objext-fit:contain;
`;  

