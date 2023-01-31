import React, { Fragment } from 'react';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Fragment>
      <ToastContainer autoClose={3000} />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Fragment>
  )
};

export default App;
