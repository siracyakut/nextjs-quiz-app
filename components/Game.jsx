import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import QuestionArea from "./QuestionArea";
import AnswerArea from "./AnswerArea";
import shuffle from "@/utils/shuffle";
import UtilsArea from "./UtilsArea";
import { actions } from "@/store/questions";
import useEnd from "@/hooks/useEnd";
import { useRouter } from "next/navigation";

const Game = () => {
  const dispatch = useDispatch();
  const { questions, currentQuestion, time } = useSelector(
    (state) => state.questions
  );
  const answers = useMemo(
    () =>
      shuffle([
        questions[currentQuestion].correctAnswer,
        ...questions[currentQuestion].incorrectAnswers,
      ]),
    [currentQuestion]
  );
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) {
        dispatch(actions.setTime(time - 1));
      } else {
        dispatch(
          actions.setResult({
            id: currentQuestion,
            status: false,
          })
        );

        if (currentQuestion < process.env.NEXT_PUBLIC_MAX_QUESTIONS - 1) {
          dispatch(actions.setQuestion(currentQuestion + 1));
          dispatch(
            actions.setTime(process.env.NEXT_PUBLIC_SECONDS_PER_QUESTION)
          );
        } else {
          useEnd(router, currentQuestion);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className="w-full h-full flex items-center justify-center flex-col gap-3">
      <UtilsArea time={time} />
      <QuestionArea question={questions[currentQuestion]} />
      <AnswerArea answers={answers} question={questions[currentQuestion]} />
    </div>
  );
};

export default Game;
