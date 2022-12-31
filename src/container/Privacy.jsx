import React from "react";
import { Privacy } from "../components";
import privateData from "../fixtures/privacy.json";
import { Fade } from "react-reveal";
export default function PrivacyContainer() {
  return (
    <Privacy.Container>
      {privateData.map((item) => (
        
        <Privacy key={item.id} direction={item.direction}>
            <Fade bottom>
               
          <Privacy.Pane>
        
            <Privacy.Title>{item.title}</Privacy.Title>
            <Privacy.Caption>{item.caption}</Privacy.Caption>
        
          </Privacy.Pane>
          </Fade>
          <Fade bottom>
          <Privacy.Pane>
            <Privacy.Image src={item.image} alt={item.alt}></Privacy.Image>
            
          </Privacy.Pane>
         
          </Fade>
        
        </Privacy>
        
      ))}
    </Privacy.Container>
  );
}
