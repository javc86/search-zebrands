import React from 'react';
import { Image } from 'react-bootstrap';
import { IUser } from '../models';

interface Props {
  user: IUser;
}

export default function RepositoryItem({ user }: Props) {
  return (
    <div className="d-flex w-100 align-items-center">
      <Image width="50" src={user.avatar_url} roundedCircle />
      <a href={user.html_url} target="_blank">
        <h5 className="ml-2">
          {user.login}
        </h5>
      </a>
    </div>
  )
}
