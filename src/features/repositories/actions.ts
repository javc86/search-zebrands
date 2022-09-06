import { createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { IRepostory } from './models';
import { AppDispatch } from '../../store';

export const getRepositories = createAction<IRepostory[] | []>('repositories/list');

export const fetchRepositories = (q: string) => async (dispatch: AppDispatch) => {
  const response = await axios.get(`/api/repositories/search?q=${q}`);
  const repositories = response.data?.repositories?.items || [];
  dispatch(getRepositories(repositories));
}