/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AdminSideNav from "../components/AdminSideNav";

const EditAnswer = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const answerId = queryParams.get("a");

    const [answerText, setAnswerText] = useState("ddd");

    const fetchAnswer = async () => {
        try {
            // Make a GET request using Axios
            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}answer/${answerId}`
            );
            console.log(response.data);
            // Handle the response data
            setAnswerText(response.data.answer);
        } catch (error) {
            // Handle errors
            // setError(error.message);
            alert(error.message);
        }
    };

    const patchAnswer = async () => {
        try {
            // Make a GET request using Axios
            const response = await axios.patch(
                `${import.meta.env.VITE_API_URL}answer/${answerId}`,
                {
                    answer: answerText,
                }
            );
            if (response.data.status == "fail") alert(response.data.error);
            else if (response.data.status == "success") navigate(-1);
            console.log(response.data);
            // Handle the response data
            setAnswerText(response.data.answer);
        } catch (error) {
            // Handle errors
            // setError(error.message);
            alert(error.message);
        }
    };

    const deleteAnswer = async () => {
        try {
            const response = await axios.delete(
                `${import.meta.env.VITE_API_URL}answer/${answerId}`
            );
            if (response.data.status == "fail") alert(response.data.error);
            else if (response.data.status == "success") navigate(-1);
            // console.log(response.data);
            // Handle the response data
            setAnswerText(response.data.answer);
        } catch (error) {
            // Handle errors
            // setError(error.message);
            alert(error.message);
        }
    };

    useEffect(() => {
        fetchAnswer();

        return () => {};
    }, []);

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
                    Edit Answer
                </h4>

                <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
                    <input
                        style={{ width: "100%" }}
                        type="email"
                        className="txtInput"
                        onChange={(e) => setAnswerText(e.target.value)}
                        value={answerText}
                        placeholder="Add New Answer"
                    />
                    <button className="btn_secondary" onClick={deleteAnswer}>
                        Delete
                    </button>
                    <button className="btn_primary" onClick={patchAnswer}>
                        Update
                    </button>
                </div>
            </div>
        </section>
    );
};

export default EditAnswer;
