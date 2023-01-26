import userEvent from "@testing-library/user-event";
import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useAdmin from "../../hooks/useAdmin/useAdmin";

const Navber = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate('/')
        window.location.reload();
      })
      .catch((err) => console.error(err.message));
  };
  return (
    <div className="bg-blue-800 sticky top-0 z-50">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <NavLink
            href="/"
            ariaLabel="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <svg
              className="w-8 text-teal-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
              Doctors Portal
            </span>
          </NavLink>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <NavLink
                to="/"
                ariaLabel="Our product"
                title="Home"
                className={({isActive})=> isActive ? 'font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 border-b-2 pb-2' : "hover:border-b-2 pb-2 font-medium tracking-wide text-gray-200 transition-colors duration-200 hover:text-teal-accent-400"}
              >
                Home
              </NavLink>
            </li>

            {isAdmin && (
              <li>
                <NavLink
                  to="/allusers"
                  ariaLabel="allusers"
                  title="Allusers"
                  className={({isActive})=> isActive ? 'font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 border-b-2 pb-2' : "hover:border-b-2 pb-2 font-medium tracking-wide text-gray-200 transition-colors duration-200 hover:text-teal-accent-400"}
                >
                  All Users
                </NavLink>
              </li>
            )}
            <li>
              <NavLink
                to="/doctors"
                ariaLabel="About us"
                title="Doctors"
                className={({isActive})=> isActive ? 'font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 border-b-2 pb-2' : "hover:border-b-2 pb-2 font-medium tracking-wide text-gray-200 transition-colors duration-200 hover:text-teal-accent-400"}
              >
                Doctors
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/myappointments"
                ariaLabel="About us"
                title="My Appointment"
                className={({isActive})=> isActive ? 'font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 border-b-2 pb-2' : "hover:border-b-2 pb-2 font-medium tracking-wide text-gray-200 transition-colors duration-200 hover:text-teal-accent-400"}
              >
                My Appointment
              </NavLink>
            </li>
            {isAdmin && (
              <li>
                <NavLink
                  to="/allappointments"
                  ariaLabel="About us"
                  title="My Appointment"
                  className={({isActive})=> isActive ? 'font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 border-b-2 pb-2' : "hover:border-b-2 pb-2 font-medium tracking-wide text-gray-200 transition-colors duration-200 hover:text-teal-accent-400"}
                >
                  All Appointments
                </NavLink>
              </li>
            )}
          </ul>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            {user ? (
              <li>
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  ariaLabel="Sign Out"
                  title="Sign Out"
                >
                  Sign Out
                </button>
              </li>
            ) : (
              <li>
                <NavLink
                  to="/register"
                  className="inline-flex items-center justify-center h-12 px-3 font-medium tracking-wide text-blue-800 transition duration-200 rounded shadow-md bg-white hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  ariaLabel="Sign up"
                  title="Sign up"
                >
                  Sign up
                </NavLink>
              </li>
            )}
          </ul>
          <div className="lg:hidden">
            <button
              ariaLabel="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <NavLink
                        href="/"
                        ariaLabel="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <svg
                          className="w-8 text-deep-purple-accent-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Doctors Portals
                        </span>
                      </NavLink>
                    </div>
                    <div>
                      <button
                        ariaLabel="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <NavLink
                          to="/"
                          ariaLabel="Our product"
                          title="home"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/"
                          ariaLabel="Our product"
                          title="contact"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Contact
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/doctors"
                          ariaLabel="Product pricing"
                          title="doctors"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Doctors
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/myappointments"
                          ariaLabel="About us"
                          title="my appointment"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          My Appointment
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/register"
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          ariaLabel="Sign up"
                          title="Sign up"
                        >
                          Sign up
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
