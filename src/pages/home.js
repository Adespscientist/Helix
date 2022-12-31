import React from 'react'
import JumbotronContainer from '../container/Jumbotron'
import ChatContainer from '../container/Chat'
import Section from '../container/Section';
import  Header from '../container/Header';
import Footer from '../container/Footer';
export default function Home() {
  return <>

<div className="header">
    <Header />
    </div>
    <Section />
       <ChatContainer />
      <JumbotronContainer />
      <div className='footer'>
      <Footer />
      </div>
  </>
}
