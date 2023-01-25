import CheckOutForm from "../components/CheckOutForm/CheckOutForm";
import Doctors from "../components/Doctors/Doctors";
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
                element: <></>
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
                path: '/checkoutform',
                element: <CheckOutForm></CheckOutForm>
            }
        ]
    }
])

export default router;