import Allusers from "../components/AllUsers/Allusers";
import CheckOutForm from "../components/CheckOutForm/CheckOutForm";
import Doctors from "../components/Doctors/Doctors";
import MyAppointment from "../components/MyAppointment/MyAppointment";
import UpdateAppointment from "../components/MyAppointment/UpdateAppointment";
import Home from "../Home/Home";
import Login from "../Home/Others/Login";
import Register from "../Home/Others/Register";
import Main from "../layout/Main/Main";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/doctors',
                element: <Doctors></Doctors>
            },
            {
                path: '/checkoutform/:id',
                element: <CheckOutForm></CheckOutForm>,
                loader: ({params}) => fetch(`http://localhost:5000/doctors/${params.id}`)
            },
            {
                path: '/myappointments',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/updateappointment/:id',
                element: <UpdateAppointment></UpdateAppointment>,
                loader: ({params}) => fetch(`http://localhost:5000/myappointment/${params.id}`)
            },
            {
                path: '/allusers',
                element: <Allusers></Allusers>
            }
        ]
    }
])

export default router;