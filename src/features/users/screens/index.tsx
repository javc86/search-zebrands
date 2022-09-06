import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Content } from '../../../components';
import { useAppDispatch, useAppSelector } from '../../../hook';
import { fetchUsers } from '../actions';
import { RootState } from '../../../store';

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

  return (
    <>
      <Search
        placeholder='Put a user name'
        onSearch={onSearch}
      />
      <Content loader={loading}>
      </Content>
    </>
  )
};
