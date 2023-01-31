import React from 'react';
import './styles.css';

const DefaultLayout = ({ children, fluid }) => {
  return (
    <div className={`d-flex justify-content-center align-items-center w-100 ${fluid ? "container-fluid" : "container"}`}>
      {children}
    </div>
  )
};

export default DefaultLayout;