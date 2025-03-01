import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  isAuthenticated: boolean;
  userId: string | null;
  email: string | null;
  personalityType: number | null;
  testResults: any[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  isAuthenticated: false,
  userId: null,
  email: null,
  personalityType: null,
  testResults: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setUser: (state, action: PayloadAction<{ userId: string; email: string }>) => {
      state.isAuthenticated = true;
      state.userId = action.payload.userId;
      state.email = action.payload.email;
    },
    setPersonalityType: (state, action: PayloadAction<number>) => {
      state.personalityType = action.payload;
    },
    addTestResult: (state, action: PayloadAction<any>) => {
      state.testResults.push(action.payload);
    },
    clearUser: (state) => {
      return initialState;
    },
  },
});

export const { 
  setLoading, 
  setError, 
  setUser, 
  setPersonalityType, 
  addTestResult, 
  clearUser 
} = userSlice.actions;

export default userSlice.reducer;