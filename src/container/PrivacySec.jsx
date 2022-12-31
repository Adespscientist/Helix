import React from 'react';
import Header from './Header';

export default function PrivacySec(){
    return(
        <>
        {/* <div className="header2">
        <Header />
        </div>
             */}
        <div className="main__container">
                <div className="private__title">
                    <h2>Whether it's your confessions, your difficult debates, or your silly inside jokes, your conversations need to <span className="text-green-400">be protected</span></h2>
                </div>
            
            <div className="private__pane">
                <div className="private__rowq">
                    <div className="items__a">
                            <h2>End-to-end encryption</h2>
                            <p>Messages and calls stay between you. No one else can read or listen to them, not even WhatsApp.</p>
                    </div>
                </div>
                <div className="private__rowq">
                <div className="items__a">
                        <h2>Additional layers of privacy</h2>
                        <p>Beyond end-to-end encryption, we add additional layers of protection to all of your conversations.</p>
                        </div>
                </div>
                <div className="private__rowq">
                <div className="items__a">
                                <h2>Control the privacy you need</h2>
                                <p>You get to choose what you share, how you show up online, or who can talk to you.</p>
                        </div>
                </div>
            </div>
        </div>
        </>
    )
}