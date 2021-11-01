// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import Reactor from './core/reactor'

// Grab all service Providers from all Modules
import UsersServiceProvider from './modules/users/serviceProvider'
import CategoriesServiceProvider from './modules/categories/serviceProvider'

const reactor = new Reactor()

reactor.registerServiceProviders([
  //Register all service providers List
  UsersServiceProvider,
  CategoriesServiceProvider,
])

// Start the Application
reactor.react()
