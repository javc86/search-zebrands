import React from 'react';
import { Search, Content, List } from '../../../components';
import { useAppDispatch, useAppSelector } from '../../../hook';
import { fetchUsers } from '../actions';
import { RootState } from '../../../store';
import UserItem from '../components/UserItem';
import { IUser } from '../models';

export default function UsersScreen() {
  const dispatch = useAppDispatch();
  const list = useAppSelector((state: RootState) => state.users.list);
  const [loading, setLoading] = React.useState<boolean>(false);

  const onSearch = async (q: string) => {
    if (!!q) {
      setLoading(true);
      await dispatch(fetchUsers(q));
      setLoading(false);
    }
  };

  const renderItem = (user: IUser) => (
    <UserItem user={user} />
  );

  return (
    <>
      <Search
        placeholder='Put a user name'
        onSearch={onSearch}
      />
      <Content loader={loading}>
        {!loading && (
          <List
            listName="users-list"
            items={list}
            renderItem={renderItem}
          />
        )}
      </Content>
    </>
  )
};
