import React from "react";
import "./cards.scss";
import CardM from "../../assets/images/Cards/pie_de_manzana.jpg";
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
                    <div className="card-body">
                        <h5 classNameName="card-title">Tortas</h5>
                        <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                        </p>
                    </div>
                    <a href="#" className="btn btn-success">
                        Disponible
                    </a>
                </div>
                <div className="card">
                    <img
                        src={CardR}
                        className="card-img-top img-thumbnail"
                        alt="bocaditos"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Bocaditos</h5>
                        <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                        </p>
                    </div>
                    <a href="#" className="btn btn-dark">
                        Disponible
                    </a>
                </div>
                <div className="card">
                    <img
                        src={CardT}
                        className="card-img-top img-thumbnail"
                        alt="cootiaza"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Cootiza</h5>
                        <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                        </p>
                    </div>
                    <a href="#" className="btn btn-danger">
                        Acabado
                    </a>
                </div>
                <div className="card">
                    <img
                        src={CardC}
                        className="card-img-top img-thumbnail"
                        alt="blog"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Blog</h5>
                        <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                        </p>
                    </div>
                    <a href="#" className="btn btn-danger">
                        Acabado
                    </a>
                </div>
            </div>
        </div>
    );
}
