import React from 'react';
import { NavLink } from "react-router-dom";

const WhatsTheMatter = () => {

    return (

        <div className="matter">

            <div className="matter-heading">
                <h1 className="matter-heading-title">Wystarczą 4 proste kroki</h1>
                <div className="matter-heading-border"></div>
            </div>

            <div className="matter-box-background">
                <div className="container">

                    <div className="matter-box">
                        <div className="matter-boxes">
                            <div className="matter-boxes-icon-1"></div>
                            <h4 className="matter-boxes-title">Wybierz rzeczy</h4>
                            <p className="matter-boxes-border"></p>
                            <p className="matter-boxes-description">ubrania, zabawki, sprzęt i inne</p>
                        </div>

                        <div className="matter-boxes">
                            <div className="matter-boxes-icon-2"></div>
                            <h4 className="matter-boxes-title">Spakuj je</h4>
                            <div className="matter-boxes-border"></div>
                            <p className="matter-boxes-description">skorzystaj z worków na śmieci</p>
                        </div>


                        <div className="matter-boxes">
                            <div className="matter-boxes-icon-3"></div>
                            <h4 className="matter-boxes-title">Zdecyduj komu chcesz pomóc</h4>
                            <div className="matter-boxes-border"></div>
                            <p className="matter-boxes-description">wybierz zaufane miejsce</p>
                        </div>

                        <div className="matter-boxes">
                            <div className="matter-boxes-icon-4"></div>
                            <h4 className="matter-boxes-title">Zamów kuriera</h4>
                            <div className="matter-boxes-border"></div>
                            <p className="matter-boxes-description">kurier przyjedzie w dogodnym terminie</p>
                        </div>
                    </div>
                </div>
            </div>

            <NavLink className="matter-button" to="/logowanie"> ODDAJ RZECZY</NavLink>
        </div >
    )
}

export default WhatsTheMatter;