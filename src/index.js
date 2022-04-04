import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Cake from "./pages/Home/Cakes";
import Frap from "./pages/Home/Fraps";
import Cofee from "./pages/Home/Cofee";
import Sweetmeats from "./pages/Home/Sweetmeats";
import reportWebVitals from "./reportWebVitals";
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../src/components/Navbar/Navbar.jsx";

// or get all of the named exports for further usage
// Put any other imports below so that CSS from your
// components takes precedence over default styles

ReactDOM.render(
    <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/cakes" element={<Cake />} />
            <Route path="/fraps" element={<Frap />} />
            <Route path="/sweetmeats" element={<Sweetmeats />} />
            <Route path="/cofee" element={<Cofee />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
