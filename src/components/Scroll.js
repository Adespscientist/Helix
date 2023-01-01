import React, {useState, useEffect, useRef} from 'react'
import scrollData from '../fixtures/Scroll.json'
import {ChevronLeft, ChevronRight} from 'react-feather'

import { Fade } from 'react-reveal';
export default function Scroll(){
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
    
    
    return(
        <>
        
        {/* <div>{ArrowLeftRounded}</div> */}
        <div className="high">
            
        <div className="scroll__div">
            <div className="inner">
            <div className="itemR">
        
                <h2>Connect Us</h2>
                <div className='scroll__btn transition-all'>
          <button onClick={() => {handleHorizantalScroll(elementRef.current,20, 350,  -50)}} disabled={arrowDisable}><ChevronLeft/></button>
          <button onClick={() => {handleHorizantalScroll(elementRef.current,20, 350, 50)}}><ChevronRight/></button>

          </div>
            </div>
        
        <div className="scroll__container" ref={elementRef}>
            {scrollData.map((item) =>(
                <div className="scroll__nav">
                    <div className='scroll__content'>
                        <Fade>
                            <img  className="icon" src={item.icon} alt="helix-icon"/>
                    <h3>{item.title}</h3>
                    <p>{item.caption}</p>
                    <button>{item.btn} <ChevronRight/></button>
                    </Fade>
                    </div>
                    </div>
                    
            ))}
        </div>
        </div>
        </div>
        </div>
        </>
    )
}