import React from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from './features/routes';

export default function Nav() {
  return (
    <Routes>
      {routes.map(({ Component, ...props }, index) => (
        <Route
          key={`route-${index}`}
          {...props}
          element={<Component />}
        />
      ))}
    </Routes>
  )
}

