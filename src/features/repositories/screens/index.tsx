import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hook';
// import { fetchRepositories } from '../actions';
import { RootState } from '../../../store';

export default function RepositoriesScreen() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const list = useAppSelector((state: RootState) => state.repositories.list);

  return (
    <>
      <h1>Repositories list</h1>
    </>
  )
};