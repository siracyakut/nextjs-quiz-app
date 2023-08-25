"use client";

import { configureStore } from "@reduxjs/toolkit";
import questions from "./questions";

const store = configureStore({
  reducer: {
    questions,
  },
});

export default store;
