import React from "react";
import "./cards.scss";
import { Link } from "react-router-dom";
import CardM from "../../assets/images/Cards/torta_pascua.jpg";
import CardR from "../../assets/images/Cards/bocaditos.jpg";
import CardT from "../../assets/images/Cards/tres_leches.jpg";
import CardC from "../../assets/images/Cards/chocolate.jpg";

export default function Cards() {
    return (
        <div className="cards_style">
            <div className="card-group">
                <div className="card">
                    <img
                        src={CardM}
                        className="card-img-top img-thumbnail"
                        alt="tortas"
                    />
                    <div className="card-body text-center">
                        <h5 classNameName="card-title">Tortas</h5>
                        <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                        </p>
                    </div>
                    <Link to="/cakes" className="btn btn-access">
                        Cootiza
                    </Link>
                </div>
                <div className="card">
                    <img
                        src={CardR}
                        className="card-img-top img-thumbnail"
                        alt="bocaditos"
                    />
                    <div className="card-body text-center">
                        <h5 className="card-title">Bocaditos</h5>
                        <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                        </p>
                    </div>
                    <Link to="/sweetmeats" className="btn btn-access">
                        Cootiza
                    </Link>
                </div>
                {/* <div className="card">
                    <img
                        src={CardT}
                        className="card-img-top img-thumbnail"
                        alt="cootiaza"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Fraps</h5>
                        <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                        </p>
                    </div>
                    <Link to="/fraps" className="btn btn-access">
                        Disponible
                    </Link>
                </div>
                <div className="card">
                    <img
                        src={CardC}
                        className="card-img-top img-thumbnail"
                        alt="blog"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Café</h5>
                        <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                        </p>
                    </div>
                    <Link to="/cofee" className="btn btn-access">
                        Disponible
                    </Link>
                </div> */}
            </div>
        </div>
    );
}
