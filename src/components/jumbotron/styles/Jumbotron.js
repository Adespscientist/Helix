import styled from 'styled-components/macro';

export const Inner  = styled.div`
        display:flex;
        justify-content: space-between;
        align-items:center;
        flex-direction: ${({direction}) => direction};
        max-width:1100px;
        width:100%;
        margin:auto;

        @media (max-width: 1000px){
            flex-direction:column;
           
        }
`;
export const Container  = styled.div`
            width:100%;
          .red{
            background:#151b34;;
            color:#fff;
          }
          .red img{
            width:100%;
          }
          .red  h1{
            width:100px;
           
          }
          .red button{
            color:#fff;
          }
`;
export const Item  = styled.div`
           
`;

export const Pane  = styled.div`
width:100%;
height:100%;
padding:20px;
margin:40px;


`;
export const Title  = styled.h1`
        font-size:3.5rem; 
        line-height:3.5rem;
        @media (max-width:768px){
            font-size:2rem;
            line-height:2.5rem;
            
        }

`;
export const SubTitle  = styled.p`
            margin-top:20px;
            font-size:16px;
     
  
`;
export const ButtonLink  = styled.button`
        margin-top:20px;
        font-weight:600;
        border-bottom:2px solid #24d366;
       
        cursor:pointer;
        border:none;
        outline:none;
        background:transparent;
        
`;
export const Image  = styled.img`
    width:100%;
    max-height:700px;
    height:100%;
    object-fix:contain;
    @media (max-width: 1000px){
  
      width:70%;
      height:70%;
      margin:auto;

    }
`;
export const BorderBtm  = styled.div`
    width:400px;
    max-height:700px;
    object-fix:contain;
    
`;
