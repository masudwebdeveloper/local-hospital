import AllAppointments from "../components/AllAppointments/AllAppointments";
import Allusers from "../components/AllUsers/Allusers";
import CheckOutForm from "../components/CheckOutForm/CheckOutForm";
import Doctors from "../components/Doctors/Doctors";
import MyAppointment from "../components/MyAppointment/MyAppointment";
import UpdateAppointment from "../components/MyAppointment/UpdateAppointment";
import Home from "../Home/Home";
import Login from "../Home/Others/Login";
import Register from "../Home/Others/Register";
import ErrorPage from "../Home/Share/ErrorPage/ErrorPage";
import Main from "../layout/Main/Main";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/doctors",
        element: <Doctors></Doctors>,
      },
      {
        path: "/checkoutform/:id",
        element: (
          <PrivateRoute>
            <CheckOutForm></CheckOutForm>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://local-hospital-server.vercel.app/doctors/${params.id}`
          ),
      },
      {
        path: "/myappointments",
        element: <MyAppointment></MyAppointment>,
      },
      {
        path: "/updateappointment/:id",
        element: <UpdateAppointment></UpdateAppointment>,
        loader: ({ params }) =>
          fetch(
            `https://local-hospital-server.vercel.app/myappointment/${params.id}`
          ),
      },
      {
        path: "/allusers",
        element: <Allusers></Allusers>,
      },
      {
        path: "/allappointments",
        element: <AllAppointments></AllAppointments>,
      },
    ],
  },
]);

export default router;
