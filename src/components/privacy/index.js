import React from 'react';
import styled from 'styled-components';
export default function Privacy({children, direction='row', ...restProps}){
    return (
        <Item {...restProps} >
            <Inner direction={direction}>{children}</Inner>
        </Item>
    )
}

Privacy.Container = function PrivacyContainer({children, ...restProps}){
    return (
        <Container {...restProps}>{children}</Container>
    )
}
Privacy.Pane = function PrivacyPane({children, ...restProps}){
    return (
        <Pane {...restProps}>{children}</Pane>
    )
}
Privacy.Frame = function PrivacyFrame({children, ...restProps}){
    return (
        <Frame {...restProps}>{children}</Frame>
    )
}
Privacy.Image = function PrivacyImage({...restProps}){
    return (
        <Image {...restProps} />
    )
}
Privacy.Title = function PrivacyTitle({children, ...restProps}){
    return (
        <Title {...restProps}>{children}</Title>
    )
}
Privacy.Caption = function PrivacyCaption({children, ...restProps}){
    return (
        <Caption {...restProps}>{children}</Caption>
    )
}
Privacy.ButtonLink = function PrivacyButtonLink({children, ...restProps}){
    return (
        <ButtonLink {...restProps}>{children}</ButtonLink>
    )
}
const Inner = styled.div`
    display:flex;
    justify-content:space-between;
    flex-direction:${({direction}) => direction};
    align-items:center;
    max-width:1100px;
    width:100%;
    margin:auto;

    @media (max-width:1000px){
        flex-direction:column;
    }
`;

const Item = styled.div`
        
`;
const Container = styled.div`
        width:100%;
        background:#2C335B;
        color:#fff;
`;
const Pane = styled.div`
width:100%;
padding:20px;
// margin:40px;

@media (max-width:1000px){
    
    // margin:30px
}
`;
const Frame = styled.div`
    
    // padding:80px;
`;
const Image = styled.img`
width:500px;
max-height:700px;
height:100%;
object-fix:contain;
@media (max-width: 1000px){

  width:70%;
  height:70%;
  margin:auto;

}
`;
const Title = styled.h1`
font-size:3.5rem; 
line-height:3.5rem;
@media (max-width:768px){
    font-size:2rem;
    line-height:2.5rem;
    
}

`;
const Caption = styled.p`
margin-top:20px;
font-size:16px;
`;
const ButtonLink = styled.button`
margin-top:20px;
        font-weight:600;
        border-bottom:2px solid #24d366;
       
        cursor:pointer;
        border:none;
        outline:none;
        background:transparent;
`;