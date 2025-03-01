import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import testReducer from './slices/testSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    test: testReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;