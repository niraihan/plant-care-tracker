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
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import SupportPage from "../pages/SupportPage";
import CategoryPlants from "../pages/Home/CategoryPlants";
import DashboardLayout from "../pages/Dashboard/DashboardLayout";
import NewsletterSubscribers from "../pages/Dashboard/NewsletterSubscribers";

export const router = createBrowserRouter([
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
                path: "/about",
                element: <AboutPage></AboutPage>,
            },
            {
                path: "/contact",
                element: <ContactPage />,
            },
            {
                path: "/support",
                element: <SupportPage />,
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
                path: "/category/:name",
                element: <CategoryPlants />
            },
            {
                path: "/dashboard",
                element: (
                    <PrivateRoute>
                        <DashboardLayout />
                    </PrivateRoute>
                ),
                children: [
                    {
                        index: true, // 🟢 this makes AddPlant the default page
                        element: <AddPlant />
                    },
                    {
                        path: "newsletter",
                        element: <NewsletterSubscribers />,
                    },
                    {
                        path: "add-plant",
                        element: <AddPlant />
                    },
                    {
                        path: "my-plants",
                        element: <MyPlants />
                    },
                    // অন্য ড্যাশবোর্ড সাবপেজ এখানে যোগ করতে পারো
                ],
            },

            // {
            //     path: "/add-plant",
            //     element: (
            //         <PrivateRoute>
            //             <AddPlant></AddPlant>
            //         </PrivateRoute>
            //     ),
            // },
            // {
            //     path: "/my-plants",
            //     element: (
            //         <PrivateRoute>
            //             <MyPlants></MyPlants>
            //         </PrivateRoute>
            //     ),
            // },
            {
                path: "/plants/:id",
                element: (
                        <PlantDetails></PlantDetails>
                    // <PrivateRoute>

                    // </PrivateRoute>

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

