import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  results: [],
  clicked: false,
  currentQuestion: 0,
  time: 30,
};

export const _getQuestions = createAsyncThunk(
  "questions/getQuestions",
  async () => {
    const response = await fetch("https://the-trivia-api.com/v2/questions");
    return await response.json();
  },
);

const questions = createSlice({
  name: "questions",
  initialState,
  reducers: {
    _setQuestion: (state, action) => {
      state.currentQuestion = action.payload;
    },
    _setTime: (state, action) => {
      if (!state.clicked) {
        state.time = action.payload;
      }
    },
    _setClicked: (state, action) => {
      state.clicked = action.payload;
    },
    _setResult: (state, action) => {
      state.results[action.payload.id] = action.payload.status;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(_getQuestions.fulfilled, (state, action) => {
        state.questions = action.payload;
      })
      .addCase(_getQuestions.rejected, (state) => {
        state.questions = false;
      });
  },
});

export const { _setClicked, _setQuestion, _setResult, _setTime } =
  questions.actions;
export default questions.reducer;
