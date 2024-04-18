import React, { useState } from "react";
import AnswerDetail from "./AnswerDetail";
import { useEffect } from "react";
import axiosBase from "../../axiosConfig";

function AllAnswers({ questionid }) {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const {data} = await axiosBase?.get(`/answers/allanswer/${questionid}`);
        console.log(data);
        console.log(questionid);
        setAnswers(data);
      } catch (error) {
        console.log(error.response);
      }
    })();
  }, [questionid]);
  return (
    <>
      <div>
        <h2 className="community_title">Answer From The Community</h2>
      {answers.length < 1 && (
        <p>no answer</p>
      )}
     <div>
        {answers?.map((answer, index) => (
          <AnswerDetail answer={answer} key={index} />
        ))}
      </div>
    </div>
    </>
  );
}

export default AllAnswers;