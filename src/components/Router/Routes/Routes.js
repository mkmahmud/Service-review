import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";
import AddService from '../../AddService/AddService';
import Main from '../../Layout/Main';
import Login from '../../Login/Login';
import Blog from '../../pages/Blog/Blog';
import Home from '../../pages/Home/Home';
import Myreviews from '../../pages/Myreviews/Myreviews';
import NotFound from '../../pages/NotFound/NotFound';
import Services from '../../pages/Services/Services';
import ServiceDetails from '../../pages/ServicesDetails/ServiceDetails';
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
            },
            {
                path:'/services/:id',
                loader:({params}) => {
                   const id = params.id;
                   return fetch(`https://mk-server-mkmahmud.vercel.app/services/${id}`)
                },
                element:<ServiceDetails></ServiceDetails>
            },
            {
                path:'/myreviews',
                element:<PrivateRoute> <Myreviews></Myreviews></PrivateRoute>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
          ]
        },
        {
            path:'*',
            element:<NotFound></NotFound>
        }
      ]);

    return (
            <RouterProvider router={router} />
    );
};

export default Routes;