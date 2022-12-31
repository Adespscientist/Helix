import React from "react";
import {Container, Pane, Image } from '../jumbotron/styles/Jumbotron'

export default function Chat({children, ...restProps}){
    return(
        <Container {...restProps}>{children}</Container>
       
    )
}

Chat.Container = function ChatContainer({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}
Chat.Pane = function ChatPane({children, ...restProps}){
    return <Pane {...restProps}>{children}</Pane>
}
Chat.Image = function ChatImage({ ...restProps}){
    return <Image {...restProps}/>
}
// Chat.Text = function ChatText({children, ...restProps}){
//     return <Text {...restProps}>{children}</Text>
// }