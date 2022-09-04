import { createReducer,  } from '@reduxjs/toolkit';
import { RepositoriesState } from './models';
import { getRepositories } from './actions';

const initialState = { list: [] } as RepositoriesState;

export default createReducer(initialState, (builder) => {
  builder
    .addCase(getRepositories, (state, action) => {
      state.list = action.payload;
    })
})