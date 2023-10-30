import classNames from "classnames";
import useEnd from "@/hooks/useEnd";
import { useRouter } from "next/navigation";
import { useQuestions } from "@/store/questions/hooks";
import {
  setClicked,
  setQuestion,
  setResult,
  setTime,
} from "@/store/questions/actions";
import PropTypes from "prop-types";

export default function SingleAnswer({ question, answer }) {
  const { currentQuestion, clicked } = useQuestions();
  const router = useRouter();

  const handleAnswerClick = () => {
    if (!clicked) {
      setClicked(true);
      setTimeout(() => {
        setClicked(false);
        setTimeout(() => {
          setResult({
            id: currentQuestion,
            status: question.correctAnswer === answer,
          });

          if (currentQuestion < process.env.NEXT_PUBLIC_MAX_QUESTIONS - 1) {
            setTime(process.env.NEXT_PUBLIC_SECONDS_PER_QUESTION);
            setQuestion(currentQuestion + 1);
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
        },
      )}
    >
      {answer}
    </div>
  );
}

SingleAnswer.propTypes = {
  question: PropTypes.object.isRequired,
  answer: PropTypes.string.isRequired,
};
