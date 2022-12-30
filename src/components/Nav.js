import React from "react";
import navData from '../fixtures/Nav.json'
export default function Nav(){
    return (
        <div className="mainNav flex justify-center  w-full">
            {navData.map((item)=>(
                    <div className="navMenu">
                    <div className="content">
                    <h3>{item.title}</h3>
                    <p>{item.caption}</p>
                        </div>
                  
                </div>
            ))}
            
        </div>
    )
}