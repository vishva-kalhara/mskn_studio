/* eslint-disable no-unused-vars */
import { useTranslation } from "react-i18next";
import shop_img from "../assets/shop_img.png";
import technition from "../assets/technition.png";
import rate1 from "../assets/ratings/4.5.svg";
import { useState } from "react";
import axios from "axios";

const Home = () => {
    const { t } = useTranslation();

    const [searchText, setSearchText] = useState("");
    const [currentLi, setCurrentLi] = useState(1);
    const [data, setData] = useState({ body: "" });
    const [error, setError] = useState(null);
    // const [itemCount, setItemCount] = useState(0);

    let itemCount = 0;

    const fetchQA = async () => {
        try {
            itemCount = 0;
            // Make a GET request using Axios
            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}QA?question=${searchText}`,
                {
                    headers: {
                        Accept: "application/json",
                        // other headers if needed
                    },
                }
            );
            console.log(response.data);
            // Handle the response data
            setData(response.data);
        } catch (error) {
            // Handle errors
            setError(error.message);
            // console.log(error.message);
        }
    };

    return (
        <>
            {/* <section style={{ margin: 0 }}> */}
            <div className="hero">
                <div className="search_bar">
                    <input
                        type="text"
                        className="txtInput"
                        onChange={(e) => setSearchText(e.target.value)}
                        value={searchText}
                        placeholder={t("inputPlacceholder")}
                    />
                    <button
                        className="btn_primary"
                        onClick={() => {
                            fetchQA();
                        }}
                    >
                        {t("searchBtn")}
                    </button>
                </div>

                {data.body ? (
                    <div className="instruction__card">
                        <div>{t("instructions.heading")}</div>
                        {data.body.map((item) => {
                            const currentItemCount = itemCount;
                            itemCount++;
                            return (
                                <div key={item.id}>
                                    {currentItemCount}. {item.answer}
                                </div>
                            );
                        })}
                        <div>{t("instructions.final")}</div>
                    </div>
                ) : (
                    <div
                        style={{
                            width: "100vw",
                            display: "flex",
                            justifyContent: "center",
                            marginTop: 24,
                        }}
                    >
                        {data.error}
                    </div>
                )}

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
