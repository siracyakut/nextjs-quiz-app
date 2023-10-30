import SingleAnswer from "@/components/answer-area/single-answer";
import PropTypes from "prop-types";

export default function AnswerArea({ question, answers }) {
  return (
    <div className="w-[308px] lg:w-[908px] flex items-center justify-between flex-wrap gap-2">
      {answers.map((answer, idx) => (
        <SingleAnswer key={idx} question={question} answer={answer} />
      ))}
    </div>
  );
}

AnswerArea.propTypes = {
  question: PropTypes.object.isRequired,
  answers: PropTypes.array.isRequired,
};
