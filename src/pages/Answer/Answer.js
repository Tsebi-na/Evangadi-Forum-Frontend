import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Answer.css";
import { AppState } from "../../App";
import axiosBase from "../../axiosConfig";

const Answer = () => {
  const navigate = useNavigate()
  const { user} = useContext(AppState);
  console.log(user);
  const { questionid } = useParams();
  const [form, setForm] = useState({
    userid: user?.userid,
    questionid: questionid,
    answer: "",
  });
  // Handle change value
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosBase.post(`/answers/${questionid}`, form);
      console.log("answer posted succesfullly");
      navigate('/all-questions')

    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <section className="container">
   
      <div>
        <div className="container" style={{ width: "80%" }}>
          <div
            className="container"
            style={{
              paddingTop: "50px",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            <h2>Answer The Top Question</h2>
            <Link to="/all-questions">Go to Question Page</Link>
          </div>
          <form onSubmit={handleSubmit}>
            <div style={{ width: "100%" }}>
              <div>
                <textarea
                  style={{
                    marginTop: "10px",
                    height: "150px",
                    width: "100%",
                    borderRadius: "10px",
                    padding: "10px 15px",
                  }}
                  maxLength="200"
                  type="text"
                  name="answer"
                  placeholder="Your Answer . . . "
                  value={form.value}
                  onChange={handleChange}
                  required
                />
              </div>
              <div
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                <button
                  style={{
                    padding: "10px 5px",
                    borderRadius: "5px",
                  }}
                  className="btn btn-lg btn-primary"
                  type="submit"
                >
                  Post Your Answer
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Answer;