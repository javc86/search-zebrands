import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hook';
// import { fetchUsers } from '../actions';
import { RootState } from '../../../store';

export default function UsersScreen() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const list = useAppSelector((state: RootState) => state.users.list);

  return (
    <>
      <h1>Users list</h1>
    </>
  )
};
