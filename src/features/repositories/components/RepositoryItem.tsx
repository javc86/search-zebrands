import React from 'react';
import { IRepostory } from '../models';

interface Props {
  repository: IRepostory;
}

export default function RepositoryItem({ repository }: Props) {
  let descripton = repository.description;

  if (repository.description?.length > 100) {
    descripton = `${repository.description.slice(0, 100)}...`;
  }

  return (
    <>
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">
          <a href={repository.html_url} target="_blank">
            {repository.full_name}
          </a>
        </h5>
      </div>
      {!!descripton && (
        <p className="mb-1">
          {descripton}
        </p>
      )}
    </>
  )
}
