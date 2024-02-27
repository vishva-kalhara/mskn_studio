import { Link } from "react-router-dom";

const LoginSuccess = () => {
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
                    <h5>Login Success</h5>
                </div>
                <Link to="/">
                    <button className="btn_primary">Back to Home</button>
                </Link>
            </div>
        </section>
    );
};

export default LoginSuccess;
