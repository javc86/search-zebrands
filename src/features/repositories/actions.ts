import { createAction } from '@reduxjs/toolkit';
import { IRepostory } from './models';
import { AppDispatch } from '../../store';

export const getRepositories = createAction<IRepostory[] | []>('repositories/list');

export const fetchRepositories = (search: string) => (dispatch: AppDispatch) => {
  dispatch(getRepositories([]));
}