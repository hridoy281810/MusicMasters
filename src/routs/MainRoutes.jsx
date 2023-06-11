import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import Instructors from "../Pages/Instructors/Instructors";
import ClassesPage from "../Pages/ClassesPage/ClassesPage";
import MySelectedClasses from "../Pages/Dashboard/StudentDashboard/MySelectedClasses";
import DashboardLayout from "../Layout/DashboardLayout";

import ManageUsers from "../Pages/Dashboard/AdminDashboard/ManageUsers/manageUsers";

import AddAClass from "../Pages/Dashboard/InstructorDashboard/AddAClass";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import MyClasses from "../Pages/Dashboard/InstructorDashboard/MyClasses";
import ManageClasses from "../Pages/Dashboard/AdminDashboard/ManageClasses/ManageClasses";
import MyEnrolledClasses from "../Pages/Dashboard/StudentDashboard/MyEnrolledClasses";
import Payment from "../Pages/Dashboard/StudentDashboard/Payment";
import SectionTitle from "../components/Dashboard/SectionTitle";
import PaymentHistory from "../Pages/Dashboard/StudentDashboard/PaymentHistory";

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
            }
        ]
       },
       {
        path: 'dashboard',
       element:<PrivetRoute><DashboardLayout></DashboardLayout></PrivetRoute>,
       children: [
        
        {
            path:'allUsers',
            element: <ManageUsers></ManageUsers>
        },
        {
            path:'manageClasses',
            element: <ManageClasses></ManageClasses>
        },
        {
            path:'addClass',
            element:<AddAClass></AddAClass>
        },
        {
            path: 'myClasses',
            element: <MyClasses></MyClasses>
        },
        {
            path: 'mySelected',
            element:<MySelectedClasses></MySelectedClasses>
        },
        {
            path: 'myEnrolled',
            element: <MyEnrolledClasses></MyEnrolledClasses>
        },
        {
            path: 'selected/:id',
            element: <Payment></Payment>
        },
        {
            path: 'paymentHistory',
            element: <PaymentHistory></PaymentHistory>
        }
       

       ]
        
       }
      
])