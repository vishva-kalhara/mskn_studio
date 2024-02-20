/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./styles/index.scss";
import { useTranslation } from "react-i18next";

function App() {
    const { i18n } = useTranslation();

    const changeLang = () => {
        const lang = i18n.language == "en" ? "ar" : "en";
        i18n.changeLanguage(lang);
    };

    useEffect(() => {
        console.log(i18n.dir());
        document.body.style.direction = i18n.dir();
        document.querySelector(".instruction__card").style.textAlign =
            i18n.language == "en" ? "left" : "right";
    }, [i18n, i18n.language]);

    return (
        <>
            <Nav handleSelectedLang={changeLang} />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
