// src/routes/Router.jsx
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import AllPlants from "../pages/AllPlants";

import UpdatePlant from "../pages/UpdatePlant";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";

import MyPlants from "../pages/MyPlants";
import AddPlant from "../pages/Home/Addplant";
import PlantDetails from "../pages/PlantDetails";
import MyProfile from "../pages/myProfile/MyProfile";
import UpdateProfile from "../pages/myProfile/UpdateProfile";

export  const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/all-plants",
                element: <AllPlants />
            },

            {
                path: "/add-plant",
                element: (
                    <PrivateRoute>
                        <AddPlant></AddPlant>
                    </PrivateRoute>
                ),
            },
            {
                path: "/my-plants",
                element: (
                    <PrivateRoute>
                       <MyPlants></MyPlants>
                    </PrivateRoute>
                ),
            },
            {
                path: "/plants/:id",
                element: (
                    <PrivateRoute>
                        <PlantDetails></PlantDetails>
                    </PrivateRoute>
                ),
            },
            {
                path: "/update/:id",
                element: (
                    <PrivateRoute>
                        <UpdatePlant />
                    </PrivateRoute>
                ),
            },
            {
                path: "/my-profile",
                element: (
                    <PrivateRoute>
                        <MyProfile></MyProfile>
                    </PrivateRoute>
                ),
            },
            {
                path: "/update-profile",
                element: (
                    <PrivateRoute>
                      <UpdateProfile></UpdateProfile>
                    </PrivateRoute>
                ),
            },
        ],
    },
]);

