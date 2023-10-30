import PropTypes from "prop-types";

export default function QuestionArea({ question }) {
  return (
    <div className="flex items-center justify-center text-center w-[308px] lg:w-[908px] p-10 rounded-lg text-lg lg:text-2xl bg-blue-200">
      {question.question.text}
    </div>
  );
}

QuestionArea.propTypes = {
  question: PropTypes.object.isRequired,
};
