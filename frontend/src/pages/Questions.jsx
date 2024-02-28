/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdminSideNav from "../components/AdminSideNav";

const Questions = () => {
    const navigate = useNavigate();
    const [questions, setQuestions] = useState();

    const fetchQuestions = async () => {
        try {
            // Make a GET request using Axios
            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}QA`
            );
            setQuestions(response.data);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        if (
            !localStorage.getItem("role_id") ||
            !localStorage.getItem("role_id") > 0
        ) {
            navigate("/");
        }

        fetchQuestions();
    }, [navigate]);

    const routeToMyProfle = () => {
        navigate("/myProfile"); // Redirects user to "movies" page
    };

    const routeToQuestions = () => {
        navigate("/questions"); // Redirects user to "movies" page
    };

    const routeToAnswers = (id) => {
        navigate(`/answers?q=${id}`); // Redirects user to "movies" page
    };

    return (
        <section style={{ display: "flex", minHeight: "60vh" }}>
            <AdminSideNav />

            <div
                style={{
                    width: "100%",
                    // backgroundColor: "antiquewhite",
                    height: 100,
                    display: "flex",
                    flexDirection: "column",
                    padding: 36,
                    gap: 10,
                }}
            >
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "end",
                    }}
                >
                    <button
                        className="btn_secondary"
                        style={{ justifyContent: "start", display: "flex" }}
                        onClick={() => {
                            navigate("/newQuestion");
                        }}
                    >
                        New Question
                    </button>
                </div>
                {questions?.body.map((item) => (
                    <button
                        className="btn_secondary"
                        style={{ justifyContent: "start", display: "flex" }}
                        key={item.id}
                        onClick={() => routeToAnswers(item.id)}
                    >
                        {item.question_val}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default Questions;
