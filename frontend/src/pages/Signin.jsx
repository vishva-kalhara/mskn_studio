import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorTxt, setError] = useState("");

    const routeToLoginSuccess = () => {
        navigate("/loginSuccess"); // Redirects user to "movies" page
    };

    const onSignIn = async () => {
        try {
            // Make a GET request using Axios
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}auth/login`,
                {
                    email,
                    password,
                }
            );

            if (response.data.status == "fail") setError(response.data.message);
            else if (response.data.status == "success") {
                localStorage.setItem("role_id", response.data.roleId);
                localStorage.setItem("email", response.data.email);
                routeToLoginSuccess();
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <section
            style={{
                minHeight: "70vh",
                padding: 24,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                    }}
                >
                    <h5
                        style={{
                            justifyContent: "center",
                            display: "flex",
                            marginBottom: 20,
                        }}
                    >
                        {t("signInToYourAccount")}
                    </h5>
                    <input
                        type="email"
                        className="txtInput"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder={t("email")}
                    />
                    <input
                        type="password"
                        className="txtInput"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder={t("password")}
                    />
                    {errorTxt ? (
                        <h6 style={{ fontSize: 14, color: "red" }}>
                            {errorTxt}
                        </h6>
                    ) : (
                        ""
                    )}
                    <button
                        className="btn_primary"
                        onClick={() => {
                            onSignIn();
                        }}
                    >
                        {t("signIn")}
                    </button>
                    <Link to="/signup">
                        <h6
                            style={{
                                textAlign: "center",
                                fontSize: 14,
                                marginTop: 16,
                            }}
                        >
                            {t("dontHaveAnAccount")}
                        </h6>
                    </Link>
                </div>
            </form>
        </section>
    );
};

export default Signin;
