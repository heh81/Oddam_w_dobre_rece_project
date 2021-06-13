import React from "react";
import { MenuItems } from "./MenuItems";
import { NavLink } from "react-router-dom";

const Header = () => {



    return (

        <header className="header">
            <div className="container">
                <div className="header-log">
                    <NavLink className="header-login" to="/logowanie"> Zaloguj się</NavLink>
                    <NavLink className="header-register" to="/rejestracja">Zarejestruj się</NavLink>
                </div>

                <div className="header-wrapper">
                    <nav className="header-nav">
                        <ul className="header-list">
                            {MenuItems.map((item) => {
                                return (
                                    <NavLink className="header-list-link" to={item.url} key={item.title} > { item.title}
                                    </NavLink>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </header >

    )
}


export default Header;