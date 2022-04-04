import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo_sin_fondo.png";

export default function Navbar() {
    return (
        <div className="navbar-style">
            <nav className="navbar navbar-expand-lg navbar-light bg-tranparent">
                <div className="container flex justify-content-center">
                    <Link to="/">
                        <img src={Logo} alt="logo"></img>
                    </Link>
                </div>
            </nav>
        </div>
    );
}
