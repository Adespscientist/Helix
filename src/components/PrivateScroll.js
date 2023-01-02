import React, { useState, useEffect, useRef } from "react";
import scrollData from "../fixtures/Scroll.json";
import { ChevronLeft, ChevronRight } from "react-feather";
import privateData from "../fixtures/privacy.json";
import styled from "styled-components/macro";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Scroll from "./Scroll";
export default function PrivateScroll() {
  const [isScrolled, setIsScrolled] = useState(false);
  const elementRef = useRef(null);
  const [arrowDisable, setArrowDisable] = useState(true);

  const handleHorizantalScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };
  // const ref = useRef(null);
  // const scroll = (scrollOffset) => {
  //     ref.current.scrollLeft += scrollOffset;
  //   };

  return (
    <>
      {/* <div>{ArrowLeftRounded}</div> */}
      <MainContainer>

      <HelpContainer>
            <HelpDiv>
            <Fade bottom>
                <HelpItem1>
                <HelpTitle>Need More <span className="text-[#E9A945]">Help ?</span></HelpTitle>
                <HelpLink className="hover:text-[#E9A945] transition-all cursor-pointer">See all FAQ's</HelpLink>
        
                </HelpItem1>
                
                   {privateData.item3.map((item) => (
                    
                     <Link to={item.link}>
                        <HelpContent className="hover:bg-[#532ad7] transition-all cursor-pointer" >
                            <HelpButton>
                               <HelpTitle2 > {item.title} </HelpTitle2>
                                <HelpArrow><ArrowOutwardIcon/></HelpArrow>
                            </HelpButton>
                        </HelpContent>
                        </Link>
                        
                    ))}
               
               </Fade>
            </HelpDiv>
        </HelpContainer>

        {/*Main Scroll*/}
        <MainScroll>
          <InnerScroll>
            <ItemR>
                <Fade bottom>
                <ItemP>
              <Item1>Discover more <span className="text-[#e6993d]">Features</span></Item1>
              <Item2>Learn more about what you can do on Helix.</Item2>
              </ItemP>
              </Fade>
              <MainButton>
                <button className="scroll_btn2"
                  onClick={() => {
                    handleHorizantalScroll(elementRef.current, 20, 300, -10);
                  }}
                  disabled={arrowDisable}
                >
                  <ChevronLeft />
                </button>
                <button className="scroll_btn2"
                  onClick={() => {
                    handleHorizantalScroll(elementRef.current, 20, 300, 10);
                  }}
                >
                  <ChevronRight />
                </button>
              </MainButton>
            </ItemR>

            <ScrollContainer ref={elementRef}>
              {privateData.item2.map((item) => (
                <Scrolled>
                    <Fade bottom>
                  <ScrolledPane>
                    <ScrolledImage src={item.image} alt="Image" />
                    <ScrolledTitle>{item.title}</ScrolledTitle>
                    <ScrolledButton>{item.btn}</ScrolledButton>
                  </ScrolledPane>
                  </Fade>
                </Scrolled>
              ))}
            </ScrollContainer>
          </InnerScroll>
        </MainScroll>

        {/* Need More Help */}

        
      </MainContainer>
    </>
  );
}

//Container

const MainContainer = styled.div`
  background-color: #151b34;
  
`;
const ScrollContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 60%;
//  scroll-behavior: smooth;
  margin: 0;
  @media (max-width:1000px){
  width:80%;
  }
`;

const MainScroll = styled.div`
background-color: #101527;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 80px;
  width:100%;
  display:flex;
  align-items:center;
  justify-content:center;

  @media (max-width:1000px){
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
     height: 100vh;
  
  }
`;

const InnerScroll = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
  height: 80vh;

  @media (max-width:1000px){
    
      display: flex;
      width:100%;
      flex-direction: column;
      justify-content: center;
      height:100vh;
      padding:0px;
      margin:0;


`;

const ItemR = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;
const ItemP = styled.div`
  padding:150px;

  @media (max-width:1000px){
    padding:20px;
  }
`;

const Item1 = styled.h1`
font-size:60px;
color:#fff;

@media (max-width:1000px){
    font-size:16px;
    width:100%;
    margin-bottom:15px;
}
`;
const Item2 = styled.p`
font-size:20px;
color:#fff;
`;

const MainButton = styled.div`
margin-bottom:40px;
@media (max-width:1000px){
    margin-top:420px;
    position:absolute;
    margin-bottom:40px;
}

`;

const Scrolled = styled.div`
  flex-shrink: 0;
  width: 60%;
//   height: 600px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width:1000px){
    width: 60%;
    
   
  }
`;
const ScrolledPane = styled.div`
  
`;
const ScrolledImage = styled.img`
  border-radius: 20px;

`;
const ScrolledTitle = styled.h2`
font-size:30px;
width:50%;
margin-bottom:15px;
color:#fff;

@media (max-width:1000px){
    font-size:16px;
    width:100%;
    margin-bottom:15px;
}
`;
const ScrolledButton = styled.button`
  color: #fff;
`;


//Help Styled Components

const HelpContainer = styled.div`

`;
const HelpDiv = styled.div`
padding:25px;
width:80%;
margin:auto;
color:#fff;
@media (max-width:1000px){
    width:100%;
    padding:30px;
}
`;
const HelpItem1 = styled.div`
display:flex;
justify-content:space-between;
align-items:center;

@media (max-width:1000px){
    flex-direction:column;
    align-items:flex-start
}
`;
const HelpItem2 = styled.div`
`;
const HelpLink = styled.div`
border-bottom:2px solid #E9A945
`;
const HelpContent = styled.div`
margin:30px 0 30px 0;
border:1px solid #003;
padding:20px;
border-top-left-radius:20px;
border-top-right-radius:20px;
border-bottom-right-radius:20px;
border-bottom-left-radius:20px;
transition: transition-all 2s ease;

`;


const HelpButton = styled.button`
        display:flex;
        justify-content: space-between;
        width:100%;
        padding:10px;
        @media (max-width:1000px){
            padding:0;
            
            align-items:flex-start
        }
`;
const HelpTitle2 = styled.h1`
@media (max-width:1000px){
    width:80%;
    text-align:left;
    font-size:15px;
}
        
`;
const HelpTitle = styled.h1`
        font-size:70px;

        @media (max-width:1000px){
            font-size:30px;
        }
        
`;

const HelpArrow = styled.div`
        background:#151B34;
        border-radius:50%;
        padding:5px;
        border:1px solid #fff;
       
        
`;

