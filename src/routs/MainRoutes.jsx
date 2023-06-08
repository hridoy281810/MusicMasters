import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import Instructors from "../Pages/Instructors/Instructors";
import ClassesPage from "../Pages/ClassesPage/ClassesPage";
import MySelectedClasses from "../Pages/Dashboard/StudentDashboard/MySelectedClasses";
import DashboardLayout from "../Layout/DashboardLayout";
import PrivetRoute from "../Provider/PrivetRoute";
import ManageUsers from "../Pages/Dashboard/AdminDashboard/ManageUsers/manageUsers";

export const router = createBrowserRouter([
       {
        path: '/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: 'registration',
                element: <Registration></Registration>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'instructors',
                element:<Instructors></Instructors>
            },
            {
                path:'classes',
                element:<ClassesPage></ClassesPage>
            },
            {
         path:'selected',
         element:<MySelectedClasses></MySelectedClasses>
            },
            {
                path: 'dashboard',
               element:<PrivetRoute><DashboardLayout></DashboardLayout></PrivetRoute>,
               children: [
                {
                    path: 'mySelected',
                    element:<MySelectedClasses></MySelectedClasses>
                },
                {
                    path:'allUsers',
                    element: <ManageUsers></ManageUsers>
                }

               ]
                
               }

        ]
       },
      
])