import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Home/Login/Login";
import Register from "../Pages/Home/Register/Register";
import Addmission from "../Pages/Admission/Addmission";
import College from "../Pages/College/College";
import CollegeDetails from "../Pages/College/CollegeDetails";

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
                path: '/college',
                element: <College/>
            },
            {
                path: '/college/:id',
                element: <CollegeDetails/>,
                loader: ({params}) => fetch(`http://localhost:5000/college/${params.id}`)
            }
        ]
    }
])
export default router;