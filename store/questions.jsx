"use client";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: false,
  clicked: false,
  currentQuestion: 0,
  time: 30,
};

export const getQuestions = createAsyncThunk("getQuestions", async () => {
  const response = await fetch("https://the-trivia-api.com/v2/questions");
  const data = await response.json();
  return data;
});

const questions = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestion: (state, action) => {
      state.currentQuestion = action.payload;
    },
    setTime: (state, action) => {
      if (!state.clicked) {
        state.time = action.payload;
      }
    },
    setClicked: (state, action) => {
      state.clicked = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getQuestions.fulfilled, (state, action) => {
        state.questions = action.payload;
      })
      .addCase(getQuestions.rejected, (state) => {
        state.questions = false;
      });
  },
});

export const { setQuestion, setTime, setClicked } = questions.actions;
export default questions.reducer;
