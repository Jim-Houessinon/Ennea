import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Answer {
  questionId: number;
  value: number;
}

interface TestState {
  currentTest: string | null;
  answers: Answer[];
  currentQuestionIndex: number;
  testCompleted: boolean;
  results: {
    type: number;
    score: number;
  }[];
}

const initialState: TestState = {
  currentTest: null,
  answers: [],
  currentQuestionIndex: 0,
  testCompleted: false,
  results: [],
};

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    startTest: (state, action: PayloadAction<string>) => {
      state.currentTest = action.payload;
      state.answers = [];
      state.currentQuestionIndex = 0;
      state.testCompleted = false;
      state.results = [];
    },
    answerQuestion: (state, action: PayloadAction<Answer>) => {
      const existingAnswerIndex = state.answers.findIndex(
        answer => answer.questionId === action.payload.questionId
      );
      
      if (existingAnswerIndex >= 0) {
        state.answers[existingAnswerIndex] = action.payload;
      } else {
        state.answers.push(action.payload);
      }
    },
    nextQuestion: (state) => {
      state.currentQuestionIndex += 1;
    },
    previousQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
      }
    },
    completeTest: (state, action: PayloadAction<{ type: number; score: number }[]>) => {
      state.testCompleted = true;
      state.results = action.payload;
    },
    resetTest: (state) => {
      return initialState;
    },
  },
});

export const { 
  startTest, 
  answerQuestion, 
  nextQuestion, 
  previousQuestion, 
  completeTest, 
  resetTest 
} = testSlice.actions;

export default testSlice.reducer;