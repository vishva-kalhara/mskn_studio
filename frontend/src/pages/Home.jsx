/* eslint-disable no-unused-vars */
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            {/* <section style={{ margin: 0 }}> */}
            <div className="hero">
                <div className="search_bar">
                    <input
                        type="text"
                        className="txtInput"
                        placeholder={t("inputPlacceholder")}
                    />
                    <button className="btn_primary">{t("searchBtn")}</button>
                </div>
                <div className="instruction__card">
                    <div>{t("instructions.heading")}</div>
                    <div>{t("instructions.line1")}</div>
                    <div>{t("instructions.line2")}</div>
                    <div>{t("instructions.line3")}</div>
                    <div>{t("instructions.line4")}</div>
                    <div>{t("instructions.line5")}</div>
                    <div>{t("instructions.final")}</div>
                </div>
            </div>
            {/* </section> */}
        </>
    );
};

export default Home;
