import React, { useState } from 'react'
import Footer from '../container/Footer'
import navData from '../fixtures/Nav.json'
import { Add, Remove, ArrowRightAlt } from '@material-ui/icons'
import Mobilefooter from './Mobilefooter'
import { NavLink } from 'react-router-dom'
import  * as ROUTES from '../constants/routes'
export default function Sidenav() {
    const [linkOpen, setLinkOpen] = useState(false)
  return (
    <>
    <div className="mainSide w-full">
        <div classname="nav">
            <ul className="navMenu2">
                <li><NavLink to={ROUTES.HOME}>Home</NavLink></li>
                <div className="sideBtn transition-all">
                <div className="openContainer">
                <button onClick={()=> setLinkOpen(!linkOpen)} className="flex justify-between w-full">Features 
                {linkOpen ?<Remove className="mr-6" />  : <Add className="mr-6" /> }
                </button>
               
                </div>
                
                {linkOpen ? 
                 <>
                 <div className="sideCap">
                 {navData.map((item)=>(
                    <div className="navMenu1 transition-all duration-[200ms] hover:bg-[#ffa33a]">
                    <div className="content">
                    <h3>{item.title}</h3>
                   
                    <ArrowRightAlt />
                        </div>
                  
                </div>
            ))}
            </div>
                </>: null}
               
                </div>
               <li><NavLink to={ROUTES.PRIVACY}>Privacy</NavLink></li> 
                    <li><NavLink to={ROUTES.FAQ}>Help Centre</NavLink></li>
                    <li><NavLink to={ROUTES.BLOG}>Blog</NavLink></li>
            </ul>
        </div>
        <Mobilefooter />
    </div>
                   
    </>
  )
}
