import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './app/store/store';
import ErrorPage from './pages/ErrorPage'
import HousesForSale from './pages/HousesForSale'
import HousesForRent from './pages/HousesForRent'
import HouseDatailes from './pages/HouseDatailes'
import PropertiesArea from './pages/PropertiesArea';
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
    path: '/houses-for-sale',
    element: <HousesForSale />
  },
  {
    path: "/properties-area/:area",
    element: <PropertiesArea />,
  
  },
  {
    path: '/houses-for-rent',
    element: <HousesForRent />
  },
  {
    path: 'houses-for-rent/:HouseId',
    element: <HouseDatailes />
  },
  {
    path: "houses-for-sale/:HouseId",
    element: <HouseDatailes />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
 
      <RouterProvider router={router} />
   
      </Provider> 
);


