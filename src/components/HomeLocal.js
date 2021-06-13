import React from 'react';
import { NavLink } from "react-router-dom"

const HomeLocal = () => {

    return (
        <>
            <div className="home-local">
                <div className="home-local-title">Zacznij pomagać!<br></br>
                Oddaj niechciane rzeczy w zaufane ręce</div>

                <div className="home-local-line"></div>
                <div className="home-local-boxes">
                    <NavLink className="home-local-button" to="/logowanie"> ODDAJ RZECZY</NavLink>
                    <NavLink className="home-local-button" to="/logowanie"> ZORGANIZUJ ZBIÓRKĘ</NavLink>

                </div>
            </div>
        </>
    )
}

export default HomeLocal;
