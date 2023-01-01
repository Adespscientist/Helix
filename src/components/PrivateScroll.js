import React, { useState, useEffect, useRef } from "react";
import scrollData from "../fixtures/Scroll.json";
import { ChevronLeft, ChevronRight } from "react-feather";
import privateData from "../fixtures/privacy.json";
import styled from "styled-components/macro";
import { Fade } from "react-reveal";
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
                // <div className='scroll__content'>
                // <img src={item.image} alt="Connected"/>
                // <h3>{item.title}</h3>
                // <button>{item.btn}</button>
                // </div>
                // <div className="scroll__nav">
                //     <div className='scroll__content'>
                //         <Fade>
                //             <img  className="icon" src={item.icon} alt="helix-icon"/>
                //     <h3>{item.title}</h3>
                //     <p>{item.caption}</p>
                //     <button>{item.btn} </button>
                //     </Fade>
                //     </div>
                //     </div>
              ))}
            </ScrollContainer>
          </InnerScroll>
        </MainScroll>
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
  overflow: hidden;
  width: 60%;
 
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
padding:50px;
margin:40px;
@media (max-width:1000px){
    margin-top:420px;
    position:absolute;
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
