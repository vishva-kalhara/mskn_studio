/* eslint-disable no-unused-vars */
import { useTranslation } from "react-i18next";
import shop_img from "../assets/shop_img.png";
import technition from "../assets/technition.png";
import rate1 from "../assets/ratings/4.5.svg";

const Home = () => {
    const { t } = useTranslation();

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
                <div className="sub__heading">{t("subHeading1")}</div>
            </div>
            {/* </section> */}
            <div className="section__2">
                <div className="sub__heading">{t("shopHeading")}</div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4 mt-4">
                            <div className="card__shop">
                                <img src={shop_img} alt={t("shopName")} />
                                <div className="shop_content">
                                    <div className="shopName">
                                        {t("shopName")}
                                    </div>
                                    <div className="shopRating">
                                        <img src={rate1} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 mt-4">
                            <div className="card__shop">
                                <img src={shop_img} alt={t("shopName")} />
                                <div className="shop_content">
                                    <div className="shopName">
                                        {t("shopName")}
                                    </div>
                                    <div className="shopRating">
                                        <img src={rate1} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 mt-4">
                            <div className="card__shop">
                                <img src={shop_img} alt={t("shopName")} />
                                <div className="shop_content">
                                    <div className="shopName">
                                        {t("shopName")}
                                    </div>
                                    <div className="shopRating">
                                        <img src={rate1} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sub__heading" style={{ marginTop: 56 }}>
                    {t("shopHeading")}
                </div>
                <div className="container mb-4">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4 mt-4">
                            <div className="card__shop">
                                <img
                                    src={technition}
                                    alt={t("technitionName")}
                                />
                                <div className="shop_content">
                                    <div className="shopName">
                                        {t("technitionName")}
                                    </div>
                                    <div className="shopRating">
                                        <img src={rate1} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
