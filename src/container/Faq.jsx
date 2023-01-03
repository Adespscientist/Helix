import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import * as ROUTES from '../constants/routes'
export default function FaqContainer(){
    return(
        <Faq className="">
            <FaqPane className='pane'>
                <FaqItem>
                <FaqTitle>Comming soon..</FaqTitle>
                <Link to={ROUTES.HOME}>
                <FaqLink className="underline text-[#ffb032]">Go Home</FaqLink>
                </Link>
                </FaqItem>
            </FaqPane>
        </Faq>
    )
}


const Faq = styled.div`

`;
const FaqPane = styled.div`
display:flex;
justify-content:center;
align-items:center;
padding:50px;
margin:auto;
width:100%;
text-align:center;
`;
const FaqItem = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
padding:50px;
margin:auto;
width:100%;
`;
const FaqTitle = styled.div`
margin:50px;
font-size:50px;

@media (max-width:1000px){
    font-size:20px;
    margin:20px;
}
`;
const FaqLink = styled.div`

`;

