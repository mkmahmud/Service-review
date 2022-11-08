import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";
import AddService from '../../AddService/AddService';
import Main from '../../Layout/Main';
import Login from '../../Login/Login';
import Home from '../../pages/Home/Home';
import Services from '../../pages/Services/Services';
import SignUp from '../../SignUp/SignUp';
import PrivateRoute from '../PrivateRoute.js/PrivateRoute';

const Routes = () => {

    const router = createBrowserRouter([
        {
          path: "/",
          element: <Main></Main>,
          children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/services',
                element: <Services></Services>
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/addservice',
                element:<PrivateRoute><AddService></AddService></PrivateRoute>
            }
          ]
        },
      ]);

    return (
            <RouterProvider router={router} />
    );
};

export default Routes;