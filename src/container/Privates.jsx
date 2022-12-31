import React from "react";
import privateData from "../fixtures/privacy.json";
import '../styles/privacy.css';
import { Privacy } from "../components/";
import { Section } from "../components/Section"



export default function PrivacyContainer() {
  return (
    <>
  <Section /> 
    <Privacy.Container>
      {privateData.map((item) => (
        <Privacy key={item.id} direction={item.direction}>
          <Privacy.Pane>
            <Privacy.Title>{item.title}</Privacy.Title>
            <Privacy.SubTitle>{item.caption}</Privacy.SubTitle>
          </Privacy.Pane>
            <Privacy.Pane>
            <Privacy.Image src={item.image} alt={item.alt} />
            </Privacy.Pane>
          
        </Privacy>
      ))}
    </Privacy.Container>
    </>
  );
}
