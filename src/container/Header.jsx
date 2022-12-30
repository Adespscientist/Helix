import React from 'react'
import styled from 'styled-components';
import { ExpandMore, GetApp, Menu } from '@material-ui/icons';
export default function Header() {
  return (
    <>
            <HeaderContainer>
                <Wrapper>
                <HeaderLogo src="/images/helix-logo.png" alt="Helix-logo"></HeaderLogo>
                    <WrapperLink>
                    <li><a href="">Features <CustomBtnLink /></a></li>
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
             <SmallWrapper>
             <BurgerMenu><CustomMenu /></BurgerMenu>
             <HeaderLogoSmall src="/images/helix-logo.png" alt="Helix-logo"></HeaderLogoSmall>
             <ButtonLinkSmall> <CustomBtn /></ButtonLinkSmall>
             </SmallWrapper>
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
        background:#0EB74F;
        border-radius: 50px;
        padding: 0px;
        width: 180px;
        margin:0;
        border:1px soild #000;
      
`;  
const ButtonLinkSmall = styled.button`
        background:#0EB74F;
        border-radius: 100%;
        width:50px;
        padding:10px;
        border:1px soild #000;
      
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
const BurgerMenu = styled(Menu)`    
      
`;  
const CustomMenu = styled.div`    
      
`;  
const HeaderLogoSmall = styled.img`    
width:80px;
height:20px;
objext-fit:contain;
`;  

