import React from "react";
import navData from '../fixtures/Nav.json'
export default function Nav(){
    return (
        <div className="mainNav flex justify-center  w-full ">
            {navData.map((item)=>(
                    <div className="navMenu transition-all duration-[200ms] hover:bg-[#ffa33a]">
                    <div className="content">
                    <h3>{item.title}</h3>
                    <p>{item.caption}</p>
                        </div>
                  
                </div>
            ))}
            
        </div>
    )
}