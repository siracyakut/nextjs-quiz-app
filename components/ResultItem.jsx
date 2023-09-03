import classNames from "classnames";
import React from "react";

const ResultItem = ({ result, idx }) => {
  return (
    <div
      key={idx}
      className="flex items-center w-full h-10 bg-blue-300 p-4 overflow-hidden"
    >
      <span>Question {idx + 1} -</span>
      <span
        className={classNames("ml-2 font-bold", {
          "text-green-700": result,
          "text-red-500": !result,
        })}
      >
        {result
          ? `TRUE - ${process.env.NEXT_PUBLIC_POINTS_PER_QUESTION} points`
          : "FALSE - 0 points"}
      </span>
    </div>
  );
};

export default ResultItem;
