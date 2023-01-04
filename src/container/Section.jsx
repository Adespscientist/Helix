import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";
import { GetApp } from "@material-ui/icons";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
export default function Section() {
  return (
    <SectionContainer>
      <SectionImage>
        <SectionMain>
          <SectionPane>
            <SectionLeft>
              <SectionTitle>
                <message />
                Fast, <span className="text-[#29335C]">Reliable and </span> <span className="text-[#29335C]">Secure
                </span> instant Messaging.
              </SectionTitle>
              <SectionCaption>
                Stay connected with your family and friends no matter where they
                are with Helix.
              </SectionCaption>
              <Link to={ROUTES.DOWNLOAD}>
                <ButtonLink>
                  Download <CustomBtn />
                </ButtonLink>
              </Link>
            </SectionLeft>
          </SectionPane>
          <SectionPane>
            {/* <SectionRight>
              <Fade bottom>
                <SectionImgTop
                  src="/images/helix-audio.png"
                  alt="Helix-landing-image"
                ></SectionImgTop>
              </Fade>

              <Fade bottom>
                {/* <SectionImgBottom
                  src="/images/helix-talk.png"
                  alt="Helix-landing-image"
                ></SectionImgBottom> */}
            {/* </Fade> */}
            {/* <Fade right>
                <SectionImgTop
                  src="/images/helix-text.png"
                  alt="Helix-landing-image"
                ></SectionImgTop>
              </Fade>
            </SectionRight>  */}
          </SectionPane>
        </SectionMain>
      </SectionImage>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  position: relative;
  padding: 0 40px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;
const SectionImage = styled.div`
  background-image: url("/images/helix-bgg.png");
  height: 100vh;
  width: 100%;
  object-fit: contain;
  background-position: bottom top;
  background-size: cover;
  border-radius: 20px;
  margin: auto;
  z-index: -1;
  padding: 50px;

  @media (max-width: 1000px) {
    background-position: top center;
    height: 75vh;
    flex-direction: row-reverse;
    display: flex;
    padding: 25px;
  }
`;
const SectionMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    display: flex;
    width: 100%;
  }
  @media (max-width: 1024px) {
    margin-top: 10px;
  }
`;
const SectionPane = styled.div`
  margin-top: 5%;
  padding: 60px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;


  @media (max-width: 1000px) {
    padding: 0px;
    text-align: left;
    width: 100%;
  }
`;
const SectionLeft = styled.div`
  @media (max-width: 768px) {
    margin-bottom: 0px;
  }
`;
const SectionRight = styled.div`
  @media (max-width: 768px) {
    margin-top: 200px;
  }
`;
const SectionTitle = styled.h1`
  font-size: 50px;

  line-height: normal;
  font-weight: 300;
  padding: 05px;
  @media (max-width: 1000px) {
    font-size: 30px;
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
    font-size: 14px;
  }
`;
const SectionButton = styled.button`
  padding: 20px;
  width: 200px;
  margin-top: 30px;
  cursor: pointer;
`;
const SectionImgTop = styled.img`
  width: 100%;
  height: 100%;
`;
const SectionImgBottom = styled(SectionImgTop)`
  padding: 10px;
  @media (max-width: 1000px) {
    display: none;
  }
`;
const CustomBtn = styled(GetApp)``;
const ButtonLink = styled.button`
  padding: 10px;
  background: #29335c;
  border-radius: 50px;
  cursor: pointer;
  padding: 20px;
  width: 200px;
  margin-top: 30px;
  margin-bottom: 30px;
  cursor: pointer;
`;
