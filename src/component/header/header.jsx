import React from "react";
import { Link } from "react-router-dom";

const Header= ()=>{
    return (
        <header>
            <img src="../logo.svg" />
            <div className="nav">
                <Link to="/home">ACCUEIL</Link>
                <Link to="/about">A PROPOS</Link>
            </div>
            

        </header>
    )
}
export default Header