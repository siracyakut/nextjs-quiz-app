import { configureStore } from "@reduxjs/toolkit";
import questions from "@/store/questions";

const store = configureStore({
  reducer: {
    questions,
  },
});

export default store;
