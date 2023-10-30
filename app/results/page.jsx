"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ResultItem from "@/components/result-item";
import { useQuestions } from "@/store/questions/hooks";

export default function ResultsPage() {
  const { push } = useRouter();
  const { results } = useQuestions();
  const sum = results.filter((result) => result === true).length;

  useEffect(() => {
    if (results.length < 1) {
      push("/");
    }
  }, []);

  return (
    results.length > 1 && (
      <div className="w-full h-full flex flex-col gap-3 items-center justify-center">
        <div className="flex flex-col gap-1 items-center justify-center text-center bg-blue-200 rounded-lg p-3 w-96">
          <p className="text-xl font-medium">YOUR RESULTS</p>
          <p className="text-sm">
            You have earned a total of{" "}
            <span className="font-medium">
              {sum * process.env.NEXT_PUBLIC_POINTS_PER_QUESTION}/
              {process.env.NEXT_PUBLIC_POINTS_PER_QUESTION *
                process.env.NEXT_PUBLIC_MAX_QUESTIONS}
            </span>{" "}
            points!
          </p>
        </div>
        <div className="flex flex-col items-center gap-5 bg-blue-200 w-96 h-96 rounded-lg overflow-auto scrollbar scrollbar-thumb-blue-900 scrollbar-track-blue-100 scrollbar-thin">
          {results.map((result, idx) => (
            <ResultItem key={idx} idx={idx} result={result} />
          ))}
        </div>
        <button
          type="button"
          onClick={() => (window.location.href = "/")}
          className="bg-blue-200 p-4 font-bold text-lg rounded-lg hover:bg-blue-700 hover:text-white transition-all duration-150"
        >
          PLAY AGAIN!
        </button>
      </div>
    )
  );
}
