import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as employeeService from './employeeService';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

employeeService.apply();
