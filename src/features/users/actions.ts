import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUser } from './models';
import { AppDispatch } from '../../store';

export const getUsers = createAction<IUser[] | []>('users/list');

export const fetchUsers = (q: string) => async (dispatch: AppDispatch) => {
  const response = await axios.get(`/api/users/search?q=${q}`);
  const users = response.data?.users?.items || [];
  dispatch(getUsers(users));
}