import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashborad from "../Layout/Dashborad";
import ClassesAdd from "../Pages/DashBoard/ClassesAdd/ClassesAdd";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import PrivateRoute from "./PrivateRoute";
import AskClasses from "../Pages/DashBoard/AskClasses/AskClasses";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";
import AllClasses from "../Pages/DashBoard/AllClasses/AllClasses";
import UpdateClass from "../Pages/DashBoard/UpdateClass/UpdateClass";
import InstructorPages from "../Pages/InstructorPages/InstructorPages";
import ErrorPage from "../ErrorPage/ErrorPage";
import ApprovedClass from "../Pages/ApprovedClass/ApprovedClass";
import StudentClass from "../Pages/DashBoard/StudentClass/StudentClass";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/instructor',
          element:<InstructorPages></InstructorPages>
        },
        {
          path:'approvedclass',
          element:<ApprovedClass></ApprovedClass>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        }


      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashborad></Dashborad></PrivateRoute>,
      children:[
        {
          path:'classadd',
          element:<ClassesAdd></ClassesAdd>
        },
        {
          path:'allusers',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path:'askclasses',
          element: <InstructorRoute><AskClasses></AskClasses></InstructorRoute>
        },
        {
          path:'allclasses',
          element:<AdminRoute><AllClasses></AllClasses></AdminRoute>
        },
        {
          path:'updateclass',
          element:<AdminRoute><UpdateClass></UpdateClass></AdminRoute>
        },
        {
          path:'myselect',
          element:<PrivateRoute><StudentClass></StudentClass></PrivateRoute>
        }
      ]
    },
  ]);