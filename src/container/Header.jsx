import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';
import { ExpandMore, GetApp, Menu, KeyboardArrowUp, Close } from '@material-ui/icons';
import Nav from '../components/Nav';
import Sidenav from '../components/Sidenav';
import helix from '../images/helix-mainlogo.png'
import {Link as ReactRouterLink} from  'react-router-dom'
import  * as ROUTES from '../constants/routes'
export default function Header() {
const [isOpen, setIsOpen] = useState(false);
const [navIsOpen, setNavIsOpen] = useState(false);



// const handleClick = ()=>{
//         setNavIsOpen(true)
//         alert('hello')
        
// }
// window.addEventListener('resize', function () {
//     if (window.innerWidth > '1000px') {
//         alert('hello')
//     }
//   })
  return (
    <>
        
            <HeaderContainer>
           
                <Wrapper>
                    <ReactRouterLink>
                <HeaderLogo to ={ROUTES.HOME} src={helix} alt="Helix-logo"></HeaderLogo>
                </ReactRouterLink>
                    <WrapperLink>
                    <li><button onClick={()=> setIsOpen(!isOpen)}>Features {isOpen  ? <KeyboardArrowUp /> :<ExpandMore /> }</button></li>
                    
                    <li><a href="">Privacy</a></li>
                    <li><a href="">Help Center</a></li>
                    <li><a href="">Blog</a></li>
                    </WrapperLink>
                    <WrapperLink>
                    <li><a href="">Helix Web</a></li>
                   <ReactRouterLink>
                   <ButtonLink to ={ROUTES.BLOG}>Download <CustomBtn /></ButtonLink>
                    </ReactRouterLink>
                    </WrapperLink>
                </Wrapper>
            </HeaderContainer> 
            <CloseMe2 className="close-me">
            {isOpen ? <Nav />: <div></div>}
            </CloseMe2>
             <SmallWrapper>
             <BurgerMenu >
                <button onClick={() => setNavIsOpen(!navIsOpen)}>{navIsOpen ? <Close /> :<Menu /> }</button>
                {/* <CustomMenu onClick={(handleClick)}>Hello</CustomMenu> */}
                </BurgerMenu>
             <HeaderLogoSmall src={helix} alt="Helix-logo"></HeaderLogoSmall>
             <ButtonLinkSmall> <CustomBtn /></ButtonLinkSmall>
             </SmallWrapper>
             <CloseMe className="close-me">
             {navIsOpen ? <Sidenav />: null}
             </CloseMe>
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
    width:100px;
    height:40px;
    objext-fit:contain;
    margin-right:200px;
`;

const Wrapper = styled.div`
        display:flex;
        justify-content:space-between;
        align-items:center;
        width:100%;
        margin:10px 0;
        
`;

const WrapperLink = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    

    li{
        text-decoration:none;
        list-style:none;
        padding:15px;
    }
    a{
        padding:10px;
        font-weight:300;
    }
    @media (max-width:1000px){
        display:none;
    }
    @media (min-width:1024px){
        li{
            text-decoration:none;
            list-style:none;
            padding:5px;
        }
    }
`;
const CustomBtn = styled(GetApp)`



`;  
const CustomBtnLink = styled(ExpandMore)`

`;  
const ButtonLink = styled(ReactRouterLink)`
        background:rgb(233,169,69);
        border-radius: 50px;
        padding: 10px;
     
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
width:70px;
height:30px;
objext-fit:contain;
`;  
const CloseMe = styled.div` 
 
    @media (min-width: 1000px){
        display:none;
        background:red;
    }
`;  
const CloseMe2 = styled.div` 
 
    @media (max-width: 1000px){
        display:none;
        background:red;
    }
`;  

const HeaderLinks = styled.a`

`;