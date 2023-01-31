import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';

const routes = [
  {
    path: '/',
    element: <Login />,
    exact: true
  }
];

const RoutesComponent = (props) => {
  const routesComponent = routes.map((rota, index) => (<Route key={index} path={rota.path} element={rota.element} />))
  return (
    <Routes>
      {routesComponent}
    </Routes>
  )
};

export default RoutesComponent;