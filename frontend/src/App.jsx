/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./styles/index.scss";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
