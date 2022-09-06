import React from 'react';
import { Search, Content, List } from '../../../components';
import { useAppDispatch, useAppSelector } from '../../../hook';
import { fetchRepositories } from '../actions';
import { RootState } from '../../../store';
import RepositoryItem from '../components/RepositoryItem';
import { IRepostory } from '../models';

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

  const renderItem = (repository: IRepostory) => (
    <RepositoryItem repository={repository} />
  );

  return (
    <>
      <Search
        placeholder='Put a repository name'
        onSearch={onSearch}
      />
      <Content loader={loading}>
        {!loading && (
          <List
            listName="repositories-list"
            items={list}
            renderItem={renderItem}
          />
        )}
      </Content>
    </>
  )
};