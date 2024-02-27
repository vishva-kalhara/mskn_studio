/* eslint-disable no-unused-vars */
// import {MSKNStudio} from '../assets/'

import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

const Nav = ({ handleSelectedLang }) => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    const routeToSignIn = () => {
        navigate("/signin"); // Redirects user to "movies" page
    };

    return (
        <div className="nav">
            <div className="right_div"></div>
            <Link to="/">
                <div className="logo"></div>
            </Link>
            <div className="left_div">
                <button className="btn_secondary" onClick={handleSelectedLang}>
                    {i18n.language == "en" ? "ar" : "en"}
                </button>

                <button className="btn_primary" onClick={routeToSignIn}>
                    {t("signIn")}
                </button>
            </div>
        </div>
    );
};

export default Nav;
