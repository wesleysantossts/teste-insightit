import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';

const RoutesComponent = (props) => {
  return (
    <Routes>
      <Route path={'/'} element={<Login />} exact />
    </Routes>
  )
};

export default RoutesComponent;