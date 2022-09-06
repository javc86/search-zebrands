import React from 'react';
import { ListGroup } from 'react-bootstrap';

interface Props {
  listName: string;
  items: any[] | [];
  renderItem: (item: any) => React.ReactNode;
}

export default function List({ items, listName, renderItem }: Props) {
  const item = (item: any, index: number) => (
    <ListGroup.Item key={`${listName}-${index}`}>
      {renderItem(item)}
    </ListGroup.Item>
  );
  return (
    <>
      {items.length > 0 ? (
        <ListGroup className="mb-3">
          {items.map(item)}
        </ListGroup>
      ) : (
        <div className="p-3 mb-2 bg-light text-dark">
          No Results
        </div>
      )}
    </>
  )
}
