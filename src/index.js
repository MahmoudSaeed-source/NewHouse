import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './app/store/store';
import ErrorPage from './pages/ErrorPage'
import HousesForSale from './pages/HousesForSale'
import HouseDatailes from './pages/HouseDatailes'

import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorPage/>
  },
  {
    path: '/HousesForSale',
    element: <HousesForSale />
  },
  {
    path: "HousesForSale/:HouseId",
    element: <HouseDatailes />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
 
      <RouterProvider router={router} />
   
      </Provider> 
);


