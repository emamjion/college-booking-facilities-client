import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Home/Login/Login";
import Register from "../Pages/Home/Register/Register";
import Addmission from "../Pages/Admission/Addmission";
import College from "../Pages/College/College";
import CollegeDetails from "../Pages/College/CollegeDetails";
import AddmissionForm from "../Pages/Admission/AddmissionForm";
import MyCollege from "../Pages/MyCollege/MyCollege";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/admission',
                element: <Addmission/>
            },
            {
                path: '/admission-form/:id',
                element: <AddmissionForm/>
            },
            {
                path: '/college',
                element: <College/>
            },
            {
                path: '/my-college',
                element: <MyCollege/>
            },
            {
                path: '/college/:id',
                element: <CollegeDetails/>,
                loader: ({params}) => fetch(`https://college-booking-server-eta.vercel.app/college/${params.id}`)
            }
        ]
    }, 
    {
        path: '*',
        element: <ErrorPage/>
    }
])
export default router;