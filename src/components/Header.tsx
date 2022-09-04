import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      {location.pathname !== '/' ? (
        <Button variant="primary" onClick={() => navigate('/')}>Repositories</Button>
      ) : <div/>}
      {location.pathname !== '/users' ? (
        <Button variant="primary" onClick={() => navigate('/users')}>Users</Button>
      ) : <div/>}
    </div>
  )
}
