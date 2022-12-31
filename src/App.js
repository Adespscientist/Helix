import React from 'react'

import * as ROUTES from './constants/routes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'normalize.css/';
import './index.css';
import { Home, Privacy, Faq, Blog,Stayconnected, Community, Express, HelixBusiness } from './pages/index'
import Header from './container/Header';
import Footer from './container/Footer';

export default function App() {
  return (
    
  <>
  
    <Router>
    <div className="header">
    <Header />
    </div>
 
      <Routes>
      <Route exact path='/blog' element={
        <Blog />
      }>
      </Route>
      <Route exact path='/privacy' element={
        <Privacy />
      }>
      </Route>
      <Route exact path='/faq' element={
        <Faq />
      }>
      </Route>
      <Route exact path='/stayconnected' element={
        <Stayconnected />
      }>
      </Route>
      <Route exact path='/community' element={
        <Community />
      }>
      </Route>
      <Route exact path='/express' element={
        <Express />
      }>
      </Route>
      <Route exact path='/helix-business' element={
        <HelixBusiness />
      }>
      </Route>
      <Route exact path={ROUTES.HOME} element={
        <Home />
      }>
      </Route>
      
      </Routes>
         <div className='footer'>
      <Footer />
      </div>
      </Router>
      </>
  
  )
}
