import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "@/store/questions";
import classNames from "classnames";
import useEnd from "@/hooks/useEnd";
import { useRouter } from "next/navigation";

const SingleAnswer = ({ question, answer }) => {
  const { currentQuestion, clicked } = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAnswerClick = () => {
    if (!clicked) {
      dispatch(actions.setClicked(true));
      setTimeout(() => {
        dispatch(actions.setClicked(false));
        setTimeout(() => {
          dispatch(
            actions.setResult({
              id: currentQuestion,
              status: question.correctAnswer === answer,
            })
          );

          if (currentQuestion < process.env.NEXT_PUBLIC_MAX_QUESTIONS - 1) {
            dispatch(
              actions.setTime(process.env.NEXT_PUBLIC_SECONDS_PER_QUESTION)
            );
            dispatch(actions.setQuestion(currentQuestion + 1));
          } else {
            useEnd(router, currentQuestion);
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
