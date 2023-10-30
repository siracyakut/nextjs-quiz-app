import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useQuestions } from "@/store/questions/hooks";
import { setQuestion, setResult, setTime } from "@/store/questions/actions";
import useEnd from "@/hooks/useEnd";
import shuffle from "@/utils/shuffle";

import QuestionArea from "@/components/question-area";
import AnswerArea from "@/components/answer-area";
import UtilsArea from "@/components/utils-area";

export default function Game() {
  const { questions, currentQuestion, time } = useQuestions();
  const answers = useMemo(
    () =>
      shuffle([
        questions[currentQuestion].correctAnswer,
        ...questions[currentQuestion].incorrectAnswers,
      ]),
    [currentQuestion],
  );
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        setResult({
          id: currentQuestion,
          status: false,
        });

        if (currentQuestion < process.env.NEXT_PUBLIC_MAX_QUESTIONS - 1) {
          setQuestion(currentQuestion + 1);
          setTime(process.env.NEXT_PUBLIC_SECONDS_PER_QUESTION);
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
}
