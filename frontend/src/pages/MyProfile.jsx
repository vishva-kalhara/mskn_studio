import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminSideNav from "../components/AdminSideNav";

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
            <AdminSideNav />
        </section>
    );
};

export default MyProfile;
