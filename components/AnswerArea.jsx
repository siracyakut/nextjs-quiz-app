import React from "react";
import SingleAnswer from "./SingleAnswer";

const AnswerArea = ({ question, answers }) => {
  return (
    <div className="w-[308px] lg:w-[908px] flex items-center justify-between flex-wrap gap-2">
      {answers.map((answer, idx) => (
        <SingleAnswer key={idx} question={question} answer={answer} />
      ))}
    </div>
  );
};

export default AnswerArea;
