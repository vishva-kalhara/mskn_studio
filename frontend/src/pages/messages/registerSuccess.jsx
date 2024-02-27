import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const RegisterSuccess = () => {
    const { t } = useTranslation();

    return (
        <section
            style={{
                minHeight: "65vh",
                padding: 36,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: 24,
                }}
            >
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div className="successImg"></div>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <h5>{t("accountCreatedSuccess")}</h5>
                </div>
                {/* <Link to="/">
                    <button className="btn_primary">Back to Home</button>
                </Link> */}
                <Link to="/signin">
                    <h6
                        style={{
                            textAlign: "center",
                            fontSize: 14,
                            marginTop: 16,
                        }}
                    >
                        {t("signIn")}
                    </h6>
                </Link>
            </div>
        </section>
    );
};

export default RegisterSuccess;
