import React from "react";
import "./navbar.scss";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-tranparent">
                <div className="container">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse flex justify-content-center"
                        id="navbarNavAltMarkup"
                    >
                        <div className="navbar-nav navbar-a">
                            <a
                                className="nav-link"
                                aria-current="page"
                                href="#"
                            >
                                Tortas
                            </a>
                            <a className="nav-link" href="#">
                                Cootiza
                            </a>
                            <a className="nav-link" href="#">
                                Bocaditos
                            </a>
                            <a className="nav-link" href="#">
                                Blog
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
