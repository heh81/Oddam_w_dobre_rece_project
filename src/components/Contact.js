import React from 'react';

const Contact = () => {

    return (

        <>

            <div className="contact">
                <div className="contact-container">
                    <h3 className="contact-title">Skontaktuj się z nami</h3>
                    <div>
                        <p className="contact-description">Wpisz swoje imię</p>
                        <p className="contact-description">Wpisz swój email</p>
                    </div>
                    <div className="contact-border"></div>
                    <input></input>  <input></input>
                    <p className="contact-description">Wpisz swoją wiadomość</p>
                    <textarea className="contact-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </textarea>
                    <button className="contact-button"></button>
                </div>
                <div className="contact-foot container">
                    <h4 className="contact-foot-copyright">Copyright by Coders Lab</h4>
                    <div className="contact-foot-fb"></div>
                    <div className="contact-foot-instagram"></div>
                </div>
            </div>
        </>
    )
}

export default Contact;