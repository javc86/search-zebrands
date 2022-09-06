import React from 'react';
import { Search, Content } from '../../../components';
import { useAppDispatch, useAppSelector } from '../../../hook';
import { fetchRepositories } from '../actions';
import { RootState } from '../../../store';

export default function RepositoriesScreen() {
  const dispatch = useAppDispatch();
  const list = useAppSelector((state: RootState) => state.repositories.list);
  const [loading, setLoading] = React.useState<boolean>(false);

  const onSearch = async (q: string) => {
    if (!!q) {
      setLoading(true);
      await dispatch(fetchRepositories(q));
      setLoading(false);
    }
  };

  return (
    <>
      <Search
        placeholder='Put a repository name'
        onSearch={onSearch}
      />
      <Content loader={loading}>
      </Content>
    </>
  )
};