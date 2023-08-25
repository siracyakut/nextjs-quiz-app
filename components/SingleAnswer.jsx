import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setClicked, setQuestion, setTime } from "@/store/questions";
import classNames from "classnames";

const SingleAnswer = ({ question, answer }) => {
  const { currentQuestion, clicked } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  const handleAnswerClick = () => {
    if (!clicked) {
      dispatch(setClicked(true));
      setTimeout(() => {
        dispatch(setClicked(false));
        setTimeout(() => {
          if (currentQuestion < 9) {
            dispatch(setTime(30));
            dispatch(setQuestion(currentQuestion + 1));
          } else {
            alert("end 2");
          }
        }, 175);
      }, 2000);
    }
  };

  return (
    <div
      onClick={() => handleAnswerClick()}
      className={classNames(
        "overflow-hidden w-[150px] lg:w-[450px] h-[50px] cursor-pointer text-center text-md rounded-lg flex items-center justify-center hover:scale-105 hover:font-bold transition-all duration-150",
        {
          "bg-blue-200 hover:bg-blue-600 hover:text-white": !clicked,
          "bg-green-700 text-white":
            clicked && question.correctAnswer === answer,
          "bg-red-700 text-white": clicked && question.correctAnswer !== answer,
        }
      )}
    >
      {answer}
    </div>
  );
};

export default SingleAnswer;
