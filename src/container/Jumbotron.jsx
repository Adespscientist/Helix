import React from "react"
import {Jumbotron} from '../components/jumbotron/index'
import jumbo from '../fixtures/Jumbo.json';
import Fade from 'react-reveal'
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';
import { ArrowForwardIos } from "@material-ui/icons";


export default function JumbotronContainer(){
   
    return(
        <Jumbotron.Container>
           
           {jumbo.map((item)=>(
            <Fade bottom>
                <Jumbotron key={item.id} direction={item.direction} className={item.bg}>
                    <Jumbotron.Pane>
                        <Jumbotron.Title>{item.title}</Jumbotron.Title>
                        <Jumbotron.SubTitle>
                            <p>{item.subTitle}</p></Jumbotron.SubTitle>
                            <Jumbotron.ButtonLink >Learn More
                            <CustomMenu fontSize="small"/>
                            </Jumbotron.ButtonLink>
                            
                    </Jumbotron.Pane>
                        <Jumbotron.Pane>
                            <Jumbotron.Image src={item.image} alt={item.alt} />
                        </Jumbotron.Pane>
                </Jumbotron>
                </Fade>
               
           ))
           }
        </Jumbotron.Container>
    )
}
 const CustomMenu = styled(ArrowForwardIos)`
     
      
 `;