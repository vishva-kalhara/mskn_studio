/* eslint-disable no-unused-vars */
import { useState } from "react";
import AdminSideNav from "../components/AdminSideNav";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NewQuestion = () => {
    const navigate = useNavigate();
    const [questionTxt, setQuestionTxt] = useState();
    const [answerTxt, setAnswerTxt] = useState();

    const onAddNewQA = async () => {
        try {
            // Make a GET request using Axios
            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}QA`,
                {
                    question: questionTxt,
                    answer: [answerTxt],
                }
            );
            console.log(response.data);

            if (response.data.status == "success")
                navigate(`/answers?q=${response.data.output.insertId}`);
            else alert(response.data.error);
            // Handle the response data
            // setData(response.data);
        } catch (error) {
            // Handle errors
            alert(error.message);
            // console.log(error.message);
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
                    New Question
                </h4>

                <div
                    style={{
                        display: "flex",
                        gap: 10,
                        marginTop: 16,
                        flexDirection: "column",
                    }}
                >
                    <input
                        style={{ width: "100%" }}
                        type="email"
                        className="txtInput"
                        onChange={(e) => setQuestionTxt(e.target.value)}
                        value={questionTxt}
                        placeholder="Question??"
                    />
                    <input
                        style={{ width: "100%" }}
                        type="email"
                        className="txtInput"
                        onChange={(e) => setAnswerTxt(e.target.value)}
                        value={answerTxt}
                        placeholder="Answer"
                    />
                    <button className="btn_primary" onClick={onAddNewQA}>
                        Add Q & A
                    </button>
                </div>
            </div>
        </section>
    );
};

export default NewQuestion;
