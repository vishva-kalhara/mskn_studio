/* eslint-disable no-unused-vars */
// import {MSKNStudio} from '../assets/'

import { useTranslation } from "react-i18next";

const Nav = ({ handleSelectedLang }) => {
    const { t, i18n } = useTranslation();

    return (
        <div className="nav">
            <div className="right_div"></div>
            <div className="logo"></div>
            <div className="left_div">
                <button className="btn_secondary" onClick={handleSelectedLang}>
                    {i18n.language == "en" ? "ar" : "en"}
                </button>
                <button className="btn_primary">{t("signIn")}</button>
            </div>
        </div>
    );
};

export default Nav;
