import React from "react";
import "./cakes.scss";

export default function Cakes() {
    return (
        <div className="cakes-style">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>CARACTERÍSTICAS DE TU TORTA</h1>
                    </div>
                </div>
                <div className="container">
                    <form>
                        <div className="mb-3">
                            <label for="lyaleInputName" className="form-label">
                                Nombre Completo
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="lyaleinputName"
                            ></input>
                        </div>
                        <div className="mb-3">
                            <label
                                for="exampleInputEmail1"
                                className="form-label"
                            >
                                Correo Electrónico
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            />
                            <div id="emailHelp" className="form-text">
                                Ingrese su correo electrónico.
                            </div>
                        </div>
                        <select
                            class="form-select form-select-sm mb-3"
                            aria-label=".form-select-sm example"
                        >
                            <option selected>
                                Número de Porciones Aproximadas
                            </option>
                            <option value="15">15</option>
                            <option value="30">30</option>
                            <option value="60">60+</option>
                        </select>
                        <div>
                            <label for="inputTypeOfCake" className="form-label">
                                Tipo de Torta
                            </label>
                            <div className="mb-2 form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="exampleCheck1"
                                />
                                <label
                                    className="form-check-label"
                                    for="exampleCheck1"
                                >
                                    Torta Clásica
                                </label>
                            </div>
                            <div className="mb-2 form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="exampleCheck2"
                                />
                                <label
                                    className="form-check-label"
                                    for="exampleCheck2"
                                >
                                    Torta Temática
                                </label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
