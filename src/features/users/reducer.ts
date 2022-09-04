import { createReducer,  } from '@reduxjs/toolkit';
import { UsersState } from './models';
import { getUsers } from './actions';

const initialState = { list: [] } as UsersState;

export default createReducer(initialState, (builder) => {
  builder
    .addCase(getUsers, (state, action) => {
      state.list = action.payload;
    })
})