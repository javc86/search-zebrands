import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Spinner } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../hook';
import { RootState } from '../store';

interface Props {
  loader?: boolean;
  children: React.ReactNode;
}

export default function Content({ children, loader }: Props) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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