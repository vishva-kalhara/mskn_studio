/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminSideNav from "../components/AdminSideNav";
import axios from "axios";

const MyProfile = () => {
    const navigate = useNavigate();
    const [passwordTxt, setPasswordTxt] = useState();

    const onUpdatePassword = async () => {
        try {
            // Make a GET request using Axios
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}auth/resetPassword`,
                {
                    email: localStorage.getItem("email"),
                    password: passwordTxt,
                }
            );
            // setQuestions(response.data);
            alert(response.data.message);
            console.log(response.data);
        } catch (error) {
            alert(error.message);
        }
    };

    useEffect(() => {
        if (
            !localStorage.getItem("role_id") ||
            !localStorage.getItem("role_id") > 0
        )
            navigate("/");
    }, [navigate]);

    return (
        <section style={{ display: "flex", minHeight: "60vh" }}>
            <AdminSideNav />
            <div
                style={{
                    width: "100%",
                    // backgroundColor: "antiquewhite",
                    // height: 100,
                    display: "flex",
                    flexDirection: "column",
                    padding: 36,
                    gap: 10,
                }}
            >
                <h4 style={{ textAlign: "center", marginBottom: 24 }}>
                    Reset Password
                </h4>

                <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
                    <input
                        style={{ width: "100%" }}
                        type="password"
                        className="txtInput"
                        onChange={(e) => setPasswordTxt(e.target.value)}
                        value={passwordTxt}
                        placeholder="New Password"
                    />
                    <button
                        className="btn_primary"
                        style={{ minWidth: 180 }}
                        onClick={onUpdatePassword}
                    >
                        Update Password
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MyProfile;
