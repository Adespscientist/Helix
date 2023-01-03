import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  ExpandMore,
  GetApp,
  Menu,
  KeyboardArrowUp,
  Close,
} from "@material-ui/icons";
import Nav from "../components/Nav";
import Sidenav from "../components/Sidenav";
import helix from "../images/helix-mainlogo.png";
import helixW from "../images/helix-grp.png";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [navBg, setNavBg] = useState("");
  const [navColor, setNavColor] = useState("white");
  const [changeImg, setChangImage] = useState();
  const location = useLocation();
  const color = "white";
  const white = "black";
  useEffect(() => {
    if (window.location.pathname === "/privacy") {
      setNavBg("#151B34");
      setNavColor(color);
      setChangImage(helixW);
    } else {
      setNavBg("#FEFCF9");
      setNavColor(white);
      setChangImage(helix);
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    alert("hello");
  };

  return (
    <>
      <header
        style={{ backgroundColor: navBg, color: navColor }}
        className={`${
          isScrolled &&
          "border-solid border-b border-[#ebe7e7]"
        } p-2 transition-all duration-200 `}
      >
        <HeaderContainer>
          <Wrapper>
            <Link onClick={() => setIsOpen(false)} to={ROUTES.HOME}>
              <HeaderLogo
                to={ROUTES.HOME}
                src={changeImg}
                alt="Helix-logo"
              ></HeaderLogo>
            </Link>

            <WrapperLink>
              <li>
                <button onClick={() => setIsOpen(!isOpen)}>
                  Features {isOpen ? <KeyboardArrowUp /> : <ExpandMore />}
                </button>
              </li>

              <Link onClick={() => setIsOpen(false)} to={ROUTES.PRIVACY}>
                Privacy
              </Link>
              <Link onClick={() => setIsOpen(false)} to={ROUTES.FAQ}>
                Help Centre
              </Link>
              <Link onClick={() => setIsOpen(false)} to={ROUTES.BLOG}>
                Blog
              </Link>
            </WrapperLink>
            <WrapperLink>
              {/* <Link to={ROUTES.HELIXBUSINESS}>Helix Web</Link> */}
              <Link to={ROUTES.DOWNLOAD}>
              <ButtonLink >
                Download <CustomBtn />
              </ButtonLink>
              </Link>
            </WrapperLink>
          </Wrapper>
        </HeaderContainer>
        <CloseMe2 className="close-me">
          {isOpen ? <Nav /> : <div></div>}
        </CloseMe2>
        <SmallWrapper>
          <BurgerMenu>
            <button onClick={() => setNavIsOpen(!navIsOpen)}>
              {navIsOpen ? <Close /> : <Menu />}
            </button>
            {/* <CustomMenu onClick={(handleClick)}>Hello</CustomMenu> */}
          </BurgerMenu>
          <Link to={ROUTES.HOME}>
            <HeaderLogoSmall src={helix} alt="Helix-logo"></HeaderLogoSmall>
          </Link>
          
          <ButtonLinkSmall>
          <Link to={ROUTES.DOWNLOAD}>
            {" "}
            <CustomBtn />
            </Link>
          </ButtonLinkSmall>
         
        </SmallWrapper>

        <CloseMe className="close-me">{navIsOpen ? <Sidenav /> : null}</CloseMe>
      </header>
    </>
  );
}

const HeaderContainer = styled.div`
  padding: 0px 35px 0 40px;
  @media (max-width: 1000px) {
    display: none;
  }
`;
const HeaderLogo = styled.img`
  width: 100px;
  objext-fit: contain;
  margin-right: 200px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin:0;

`;

const WrapperLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  li {
    text-decoration: none;
    list-style: none;
    padding: 15px;
  }
  a {
    padding: 10px;
    font-weight: 300;
    font-size:14px;
  }
  @media (max-width: 1000px) {
    display: none;
  }
  @media (min-width: 1024px) {
    li {
      text-decoration: none;
      list-style: none;
      padding: 5px;
    }
  }
`;
const CustomBtn = styled(GetApp)``;
const CustomBtnLink = styled(ExpandMore)``;
const ButtonLink = styled.button`
  background:#f7a31d;
  border-radius: 30px;
  padding: 10px;
  width:100%;
  margin: 5px;
  border: 1px soild #000;
`;
const ButtonLinkSmall = styled.button`
  background: rgb(233, 169, 69);
  border-radius: 100%;
  width: 50px;
  padding: 10px;
  border: 1px solid black;
`;
const SmallWrapper = styled.div`
  display: none;
  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
  }
`;
const BurgerMenu = styled.div``;
const CustomMenu = styled.button`
  background: red;
  height: 200px;
`;
const HeaderLogoSmall = styled.img`
  width: 70px;
  height: 30px;
  objext-fit: contain;
`;
const CloseMe = styled.div`
  @media (min-width: 1000px) {
    display: none;
    background: red;
  }
`;
const CloseMe2 = styled.div`
  width: 100%;
  padding: 10px;

  @media (max-width: 1000px) {
    display: none;
    background: red;
  }
`;

const HeaderLinks = styled.a``;
