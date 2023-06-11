import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import Instructors from "../Pages/Instructors/Instructors";
import ClassesPage from "../Pages/ClassesPage/ClassesPage";
import MySelectedClasses from "../Pages/Dashboard/StudentDashboard/MySelectedClasses";
import DashboardLayout from "../Layout/DashboardLayout";
import AddAClass from "../Pages/Dashboard/InstructorDashboard/AddAClass";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import MyClasses from "../Pages/Dashboard/InstructorDashboard/MyClasses";
import ManageClasses from "../Pages/Dashboard/AdminDashboard/ManageClasses/ManageClasses";
import MyEnrolledClasses from "../Pages/Dashboard/StudentDashboard/MyEnrolledClasses";
import Payment from "../Pages/Dashboard/StudentDashboard/Payment";
import PaymentHistory from "../Pages/Dashboard/StudentDashboard/PaymentHistory";
import InstructorOnlyRoutes from "../PrivetRoute/InstructorOnlyRoutes";
import AdminOlyRouts from "../PrivetRoute/AdminOlyRouts";
import ManageUsers from "../Pages/Dashboard/AdminDashboard/ManageUsers/ManageUsers";
import AdminHome from "../Pages/Dashboard/AdminDashboard/AdminHome";
import InstructorHome from "../Pages/Dashboard/InstructorDashboard/InstructorHome";
import StudentHme from "../Pages/Dashboard/StudentDashboard/StudentHme";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import MusicalInstruments from "../Pages/MusicalInstruments/MusicalInstruments";

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
                path:'musicalInstruments',
                element: <MusicalInstruments></MusicalInstruments>
            }
        ]
       },
       {
        path: 'dashboard',
       element:<PrivetRoute><DashboardLayout></DashboardLayout></PrivetRoute>,
       children: [ 
        {
            path:'adminHome',
            element:<AdminOlyRouts><AdminHome></AdminHome></AdminOlyRouts>
        },
        {
            path:'allUsers',
            element: <AdminOlyRouts><ManageUsers></ManageUsers></AdminOlyRouts>
        },
        {
            path:'manageClasses',
            element: <AdminOlyRouts><ManageClasses></ManageClasses></AdminOlyRouts>
        },
        {
            path: 'instructorHome',
            element: <InstructorOnlyRoutes><InstructorHome ></InstructorHome></InstructorOnlyRoutes>
        },
        {
            path:'addClass',
            element:<InstructorOnlyRoutes><AddAClass></AddAClass></InstructorOnlyRoutes>
        },
        {
            path: 'myClasses',
            element: <InstructorOnlyRoutes><MyClasses></MyClasses></InstructorOnlyRoutes>
        },
        {
            path:'studentHome',
            element:<StudentHme></StudentHme>
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
        
       },
       {
        path:'*',
        element: <ErrorPage></ErrorPage>
       }

      
])