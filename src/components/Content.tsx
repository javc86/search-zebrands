import React from 'react';
import { Container, Spinner } from 'react-bootstrap';

interface Props {
  loader?: boolean;
  children: React.ReactNode;
}

export default function Content({ children, loader }: Props) {
  return (
    <Container>
      {loader && (
        <div className="d-flex justify-content-center" >
          <Spinner animation="border" />
        </div>
      )}
      {children}
    </Container>
  )
};