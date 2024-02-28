/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AdminSideNav from "../components/AdminSideNav";

const EditAnswer = () => {
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
                {/* {data.body?.map((item) => (
            <button
                className="btn_secondary"
                key={item.id}
                style={{ justifyContent: "start", display: "flex" }}
            >
                {item.answer}
            </button>
        ))} */}
                <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
                    <input
                        style={{ width: "100%" }}
                        type="email"
                        className="txtInput"
                        // onChange={(e) => setNewAnswer(e.target.value)}
                        // value={newAnswer}
                        placeholder="Add New Answer"
                    />
                    <button className="btn_primary">Add</button>
                </div>
            </div>
        </section>
    );
};

export default EditAnswer;
