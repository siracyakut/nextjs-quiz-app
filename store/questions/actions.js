import store from "@/store";
import {
  _getQuestions,
  _setClicked,
  _setQuestion,
  _setResult,
  _setTime,
} from "@/store/questions";

export const setQuestion = (data) => store.dispatch(_setQuestion(data));
export const setTime = (data) => store.dispatch(_setTime(data));
export const setClicked = (data) => store.dispatch(_setClicked(data));
export const setResult = (data) => store.dispatch(_setResult(data));
export const getQuestions = () => store.dispatch(_getQuestions());
