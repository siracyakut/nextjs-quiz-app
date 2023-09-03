import { configureStore } from "@reduxjs/toolkit";
import { reducer as questions } from "./questions";

const store = configureStore({
  reducer: {
    questions,
  },
});

export default store;
