import React from "react";
import { Link } from "react-router-dom";


const Header = ()=>{
    return(
        <div className ="header">
            <Link to={"/"}>
            <img className="header__logo" src="/images/tlu_logo.png"/>
            </Link>
            <div className="header__buttons">
                <button>Logi sisse/Loo konto</button>
                <button>Ostukorv</button>
            </div>
        </div>
    );
};

export default Header;