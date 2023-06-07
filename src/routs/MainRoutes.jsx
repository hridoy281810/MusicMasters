import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import Instructors from "../Pages/Instructors/Instructors";
import ClassesPage from "../Pages/ClassesPage/ClassesPage";
import MySelectedClasses from "../Pages/Dashboard/StudentDashboard/MySelectedClasses";

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
            }
        ]
       }
])