import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import QuestionArea from "./QuestionArea";
import AnswerArea from "./AnswerArea";
import shuffle from "@/_ui/utils/shuffle";
import UtilsArea from "./UtilsArea";
import { setQuestion, setTime } from "@/_ui/store/questions";

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

  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) {
        dispatch(setTime(time - 1));
      } else {
        if (currentQuestion < 9) {
          dispatch(setQuestion(currentQuestion + 1));
          dispatch(setTime(30));
        } else {
          alert("end");
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className="w-full h-full flex items-center justify-center flex-col gap-3">
      <UtilsArea time={time} questCount={currentQuestion} />
      <QuestionArea question={questions[currentQuestion]} />
      <AnswerArea answers={answers} question={questions[currentQuestion]} />
    </div>
  );
};

export default Game;
