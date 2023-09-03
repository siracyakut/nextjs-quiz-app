import classNames from "classnames";
import React from "react";
import { useSelector } from "react-redux";

const UtilsArea = ({ time }) => {
  const { currentQuestion } = useSelector((state) => state.questions);

  var calc;
  if (window.innerWidth >= 1024) {
    calc = (time * 908) / process.env.NEXT_PUBLIC_SECONDS_PER_QUESTION;
  } else {
    calc = (time * 308) / process.env.NEXT_PUBLIC_SECONDS_PER_QUESTION;
  }

  return (
    <>
      <div className="flex items-center flex-start p-4 h-5 bg-black text-white rounded-lg text-md transition-all">
        QUESTION {currentQuestion + 1}
      </div>
      <div
        style={{ width: `${calc}px` }}
        className={classNames(
          "flex items-center justify-center p-2 h-5 rounded-lg font-bold text-sm transition-all",
          {
            "bg-green-500 text-black": time >= 20,
            "bg-orange-400 text-black": time >= 10 && time < 20,
            "bg-red-500 text-white": time < 10,
          }
        )}
      >
        {time}
      </div>
    </>
  );
};

export default UtilsArea;
