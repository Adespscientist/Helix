import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";
import { GetApp } from "@material-ui/icons";
export default function Section() {
  return (
    <SectionContainer>
      <SectionImage>
        <SectionMain>
          <SectionPane>
            <SectionLeft>
              <SectionTitle>Message Privately</SectionTitle>
              <SectionCaption>
                Simple, reliable, private messaging and calling for free*,
                available all over the world.
              </SectionCaption>
              <SectionButton>
                Download
                <CustomBtn />
              </SectionButton>
            </SectionLeft>
          </SectionPane>
          <SectionPane>
            <SectionRight>
              <Fade bottom>
                <SectionImgTop
                  src="/images/helix-audio.png"
                  alt="Helix-landing-image"
                ></SectionImgTop>
              </Fade>

              <Fade bottom>
                <SectionImgBottom
                  src="/images/helix-talk.png"
                  alt="Helix-landing-image"
                ></SectionImgBottom>
              </Fade>
              <Fade right>
                <SectionImgTop
                  src="/images/helix-text.png"
                  alt="Helix-landing-image"
                ></SectionImgTop>
              </Fade>
            </SectionRight>
          </SectionPane>
        </SectionMain>
      </SectionImage>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  position: relative;
  padding: 10px;
`;
const SectionImage = styled.div`
  background-image: url("/images/helix-landing.png");
  height: 100vh;
  width: 100%;
  object-fit: contain;
  position: center center;
  background-size: cover;
  border-radius: 20px;
  margin: 22px;
  z-index: -1;

  @media (max-width: 1000px) {
    background-position: top center;
    margin: 10px;
    height: 90vh;
    flex-direction: row-reverse;
    display: flex;
  }
`;
const SectionMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 150px;

  @media (max-width: 1000px) {
    padding: 20px;
    flex-direction: column-reverse;
    display: flex;
    width: 100%;
  }
`;
const SectionPane = styled.div`
  margin: 20px;
  padding: 60px;
  color: #fff;
  @media (max-width: 1000px) {
    padding: 0;
    text-align: left;
    width: 100%;
  }
`;
const SectionLeft = styled.div``;
const SectionRight = styled.div``;
const SectionTitle = styled.h1`
  font-size: 80px;
  width: 40px;
  line-height: 6rem;
  font-weight: 300;
  padding: 10px;
  @media (max-width: 1000px) {
    font-size: 40px;
    line-height: 2.5rem;
    padding: 2px;
    font-weight: 600;
  }
`;
const SectionCaption = styled.p`
  width: 70%;
  padding: 10px;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 0;
  }
`;
const SectionButton = styled.button`
  padding: 10px;
  background: #24d366;
  border-radius: 50px;
  padding: 20px;
  width: 200px;
  margin-top: 30px;
`;
const SectionImgTop = styled.img`
  //   padding:10px;
`;
const SectionImgBottom = styled(SectionImgTop)`
  padding: 10px;
  @media (max-width: 1000px) {
    display: none;
  }
`;
const CustomBtn = styled(GetApp)``;
