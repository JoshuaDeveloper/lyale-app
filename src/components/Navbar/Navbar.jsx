import React from "react";
import "./navbar.scss";
import Logo from "../../assets/images/logo_sin_fondo.png";

export default function Navbar() {
    return (
        <div className="navbar-style">
            <nav className="navbar navbar-expand-lg navbar-light bg-tranparent">
                <div className="container flex justify-content-center">
                    <a href="#">
                        <img src={Logo} alt="logo"></img>
                    </a>
                </div>
            </nav>
        </div>
    );
}
