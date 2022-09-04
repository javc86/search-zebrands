import { configureStore } from '@reduxjs/toolkit';
import repositories from '../features/repositories/reducer';
import users from '../features/users/reducer';

export const store = configureStore({
  reducer: {
    repositories,
    users,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
