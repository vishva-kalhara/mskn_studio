import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (
            !localStorage.getItem("role_id") ||
            !localStorage.getItem("role_id") > 0
        )
            navigate("/");
    }, [navigate]);

    return (
        <section style={{ display: "flex", minHeight: "60vh" }}>
            <div
                style={{
                    minWidth: 200,
                    display: "flex",
                    flexDirection: "column",
                    padding: 36,
                    gap: 36,
                }}
            >
                <button className="btn_primary">Q & A</button>
            </div>
        </section>
    );
};

export default MyProfile;
