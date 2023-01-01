import React, { useState } from 'react'
import Footer from '../container/Footer'
import navData from '../fixtures/Nav.json'
import { Add, Remove, ArrowRightAlt } from '@material-ui/icons'
import Mobilefooter from './Mobilefooter'
import { Link } from 'react-router-dom'
import  * as ROUTES from '../constants/routes'
export default function Sidenav() {
    const [linkOpen, setLinkOpen] = useState(false)
  return (
    <>
    <div className="mainSide overflow-hidden">
        <div classname="nav">
            <ul className="navMenu2">
                <li><Link to={ROUTES.HOME}>Home</Link></li>
                <div className="sideBtn transition-all duration-700">
                <div className="openContainer">
                <button onClick={()=> setLinkOpen(!linkOpen)} className="flex justify-between w-full">Features 
                {linkOpen ?<Remove className="mr-6" />  : <Add className="mr-6" /> }
                </button>
                
                </div>
                
                {linkOpen ? 
                 <>
                 <div className="sideCap">
                 {navData.map((item)=>(
                    <div className="navMenu1">
                    <div className="content transition-all duration-700 hover:bg-[#ffa33a]">
                    <h3>{item.title}</h3>
                   
                    <ArrowRightAlt />
                        </div>
                  
                </div>
            ))}
            </div>
                </>: null}
               
                </div>
               <li><Link to={ROUTES.PRIVACY}>Privacy</Link></li> 
                    <li><Link to={ROUTES.FAQ}>Help Centre</Link></li>
                    <li><Link to={ROUTES.BLOG}>Blog</Link></li>
            </ul>
        </div>
        
    </div>
                   
    </>
  )
}
