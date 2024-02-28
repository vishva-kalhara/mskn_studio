/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AdminSideNav from "../components/AdminSideNav";

const Answers = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const [newAnswer, setNewAnswer] = useState("");

    const questionId = queryParams.get("q");

    const fetchAnswers = async () => {
        try {
            // Make a GET request using Axios
            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}QA/${questionId}`
            );

            if (response.data.status == "fail") navigate("/questions");

            setData(response.data);
            // console.log(response.data);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        if (
            !localStorage.getItem("role_id") ||
            localStorage.getItem("role_id") != 1
        ) {
            navigate("/");
        }

        fetchAnswers();
    }, [navigate]);

    const addAnswer = async () => {
        try {
            // Make a POST request using Axios
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}QA/${questionId}`,
                {
                    answer: newAnswer,
                }
            );

            if (response.data.status == "fail") alert(response.data.error);

            // setData(response.data);
            setNewAnswer("");
            fetchAnswers();
            console.log(response.data);
        } catch (error) {
            console.log(error.message);
        }
    };

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
                    {data.question}
                </h4>
                {data.body?.map((item) => (
                    <button
                        className="btn_secondary"
                        key={item.id}
                        style={{ justifyContent: "start", display: "flex" }}
                        onClick={() => {
                            navigate(`/editAnswer?a=${item.id}`);
                        }}
                    >
                        {item.answer}
                    </button>
                ))}
                <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
                    <input
                        style={{ width: "100%" }}
                        type="email"
                        className="txtInput"
                        onChange={(e) => setNewAnswer(e.target.value)}
                        value={newAnswer}
                        placeholder="Add New Answer"
                    />
                    <button className="btn_primary" onClick={addAnswer}>
                        Add
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Answers;
