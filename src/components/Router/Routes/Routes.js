import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";
import Main from '../../Layout/Main';
import Login from '../../Login/Login';
import Home from '../../pages/Home/Home';
import Services from '../../pages/Services/Services';

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
                path:'/login',
                element:<Login></Login>
            }
          ]
        },
      ]);

    return (
            <RouterProvider router={router} />
    );
};

export default Routes;