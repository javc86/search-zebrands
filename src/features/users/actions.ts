import { createAction } from '@reduxjs/toolkit';
import { IUser } from './models';
import { AppDispatch } from '../../store';

export const getUsers = createAction<IUser[] | []>('users/list');

export const fetchUsers = (search: string) => (dispatch: AppDispatch) => {
  dispatch(getUsers([]));
}