
import React from "react";
import {Container, Pane, Title, SubTitle, ButtonLink,  Item, Inner, Image, BorderBtm} from "./styles/Privacy";


export default function Privacy({
  children,
  direction = "row",
  ...restProps
}) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Privacy.Container = function PrivacyContainer({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}
Privacy.Pane = function PrivacyPane({children, ...restProps}){
    return <Pane {...restProps}>{children}</Pane>
}
Privacy.Title = function PrivacyTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}
Privacy.SubTitle = function PrivacySubTitle({children, ...restProps}){
    return <SubTitle {...restProps}>{children}</SubTitle>
}
Privacy.Image = function PrivacyImage({ ...restProps}){
    return <Image {...restProps} />
}
Privacy.ButtonLink = function PrivacyButtonLink({children, ...restProps}){
    return <ButtonLink {...restProps}>{children} </ButtonLink>
}
Privacy.BorderBtm = function PrivacyBorderBtm({...restProps}){
    return <BorderBtm {...restProps}/>
}