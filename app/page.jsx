import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col text-center gap-5 font-medium">
      <div className="text-4xl bg-blue-300 p-4 rounded-lg">
        Welcome to the Quiz App!
      </div>
      <div className="bg-blue-300 p-4 rounded-lg">
        <ul>
          <li className="border-b-2 py-2">
            » The quiz consists of {process.env.NEXT_PUBLIC_MAX_QUESTIONS}{" "}
            questions.
          </li>
          <li className="border-b-2 py-2">
            » You have {process.env.NEXT_PUBLIC_SECONDS_PER_QUESTION} seconds
            for each question.
          </li>
          <li className="border-b-2 py-2">
            » You earn {process.env.NEXT_PUBLIC_POINTS_PER_QUESTION} points for
            each correct question.
          </li>
        </ul>
      </div>
      <Link
        className="bg-blue-300 p-4 rounded-lg hover:bg-blue-700 hover:text-white transition-all duration-150"
        href="/game"
      >
        Start Game
      </Link>
    </div>
  );
};

export default Home;
