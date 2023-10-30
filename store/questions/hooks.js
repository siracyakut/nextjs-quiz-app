import { useSelector } from "react-redux";

export const useQuestions = () => useSelector((state) => state.questions);
