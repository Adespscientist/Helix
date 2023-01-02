import React from 'react'
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { ExpandMore, GetApp, Menu, KeyboardArrowUp, Close } from '@material-ui/icons';
import Nav from '../components/Nav';
import Sidenav from '../components/Sidenav';
import helix from '../images/helix-mainlogo.png'
import {Link} from  'react-router-dom'
import  * as ROUTES from '../constants/routes'
export default function Header() {
const [isOpen, setIsOpen] = useState(false);
const [navIsOpen, setNavIsOpen] = useState(false);
const [isScrolled, setIsScrolled] = useState(false);

useEffect(() =>{
    const handleScroll= ()=>{


   
    if(window.scrollY > 0 ){
        setIsScrolled(true )
    }
    else{
        setIsScrolled(false)
    }
}
    window.addEventListener('scroll', handleScroll)

    return () =>{
        window.removeEventListener('scroll', handleScroll)
    }
}, [])

const handleClick = ()=>{
        
        alert('hello')
        
}
// window.addEventListener('resize', function () {
//     if (window.innerWidth > '1000px') {
//         alert('hello')
//     }
//   })
  return (
    <>
        <header className = {`${isScrolled && 'bg-[#fffffffc] shadow-sm'}  p-2 transition-all duration-700 `} >

       
            <HeaderContainer>
           
                <Wrapper>
                   
               <Link to={ROUTES.HOME}>
                
                 <HeaderLogo to ={ROUTES.HOME} src={helix} alt="Helix-logo"></HeaderLogo></Link>
                
                    <WrapperLink>
                    <li><button onClick={()=> setIsOpen(!isOpen)}>Features {isOpen  ? <KeyboardArrowUp /> :<ExpandMore /> }</button></li>
                    
                    <Link onClick={()=> setIsOpen(!isOpen)} to={ROUTES.PRIVACY}>Privacy</Link>
                    <Link to={ROUTES.FAQ}>Help Centre</Link>
                    <Link to={ROUTES.BLOG}>Blog</Link>
                   
                    </WrapperLink>
                    <WrapperLink>
                    <Link to={ROUTES.HELIXBUSINESS}>Helix Web</Link>
                  
                   <ButtonLink to ={ROUTES.BLOG}>Download <CustomBtn /></ButtonLink>
                    
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
                <Link to={ROUTES.HOME}>
             <HeaderLogoSmall src={helix} alt="Helix-logo"></HeaderLogoSmall>
             
             </Link>
             <ButtonLinkSmall> <CustomBtn /></ButtonLinkSmall>
             </SmallWrapper>
             
             <CloseMe className="close-me">
             
               
             {navIsOpen ? <Sidenav/>: null}
                  
            
             </CloseMe>
             
             </header>
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
const ButtonLink = styled.button`
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
       width:100%;
       padding:10px;
       
    @media (max-width: 1000px){
        display:none;
        background:red;
    }
`;  

const HeaderLinks = styled.a`

`;