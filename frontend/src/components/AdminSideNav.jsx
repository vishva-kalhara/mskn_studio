import { useNavigate, useLocation } from "react-router-dom";

const AdminSideNav = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const routeToMyProfle = () => {
        navigate("/myProfile"); // Redirects user to "movies" page
    };

    const routeToQuestions = () => {
        navigate("/questions"); // Redirects user to "movies" page
    };

    // console.log(location);

    return (
        <div
            style={{
                minWidth: 200,
                display: "flex",
                flexDirection: "column",
                padding: 36,
                gap: 10,
            }}
        >
            <button
                className={
                    location.pathname == "/myProfile"
                        ? "btn_primary"
                        : "btn_secondary"
                }
                onClick={routeToMyProfle}
            >
                My Profile
            </button>
            <button
                className={
                    location.pathname == "/questions"
                        ? "btn_primary"
                        : "btn_secondary"
                }
                onClick={routeToQuestions}
            >
                Questions
            </button>
            <div
                style={{
                    width: "100%",
                    height: 2,
                    backgroundColor: "1e1e1e",
                    // margin: "10px 0",
                }}
            ></div>
            {location.pathname == "/answers" ? (
                <button
                    className={
                        location.pathname == "/answers"
                            ? "btn_primary"
                            : "btn_secondary"
                    }
                    onClick={routeToQuestions}
                >
                    Answers
                </button>
            ) : (
                ""
            )}
            {location.pathname == "/editAnswer" ? (
                <button
                    className={
                        location.pathname == "/editAnswer"
                            ? "btn_primary"
                            : "btn_secondary"
                    }
                    onClick={routeToQuestions}
                >
                    Edit Answer
                </button>
            ) : (
                ""
            )}
            {location.pathname == "/newQuestion" ? (
                <button
                    className={
                        location.pathname == "/newQuestion"
                            ? "btn_primary"
                            : "btn_secondary"
                    }
                    onClick={routeToQuestions}
                >
                    New Question
                </button>
            ) : (
                ""
            )}
        </div>
    );
};

export default AdminSideNav;
