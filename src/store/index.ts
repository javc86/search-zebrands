import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import repositories from '../features/repositories/reducer';
import users from '../features/users/reducer';
import {connectRouter} from 'connected-react-router';

export const history = createBrowserHistory();

export const store = configureStore({
  reducer: {
    router: connectRouter(history),
    repositories,
    users,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
