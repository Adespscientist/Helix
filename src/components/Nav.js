import React from "react";
import navData from '../fixtures/Nav.json'
export default function Nav(){
    return (
        <div className="mainNav flex justify-center w-full border-r-4 ">
            {navData.map((item)=>(
                    <div className="navMenu transition ease-in-out delay-600 hover:bg-[#ff8800] duration-300 ">
                    <div className="content">
                    <h3>{item.title}</h3>
                    <p>{item.caption}</p>
                        </div>
                  
                </div>
            ))}
            
        </div>
    )
}