import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialLink from "../Share/SocialLink";
import "./Register.modules.css";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const [check, setCheck] = useState(true);
  const [passwordError, setPasswordError] = useState("");
  const { createUser,updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleCheck = () => {
    setCheck(!check);
  };

  const onSubmit = (data) => {
    setPasswordError("");
    const { name, number, email, password, confirmPassword } = data;
    if (password !== confirmPassword) {
      setPasswordError("Password don't match");
      return;
    }
    createUser(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      navigate('/login')
      updateUser({displayName: name})
      .then(()=>{
        console.log("Update profile name");
        const userData = {
          name: user.displayName,
          email: user.email
          
        }
        saveUser(userData)
      })
    })
    .catch(err=> console.error(err))
    console.log(name, number, email, password, confirmPassword);
  };

  const saveUser = (userData) =>{
    fetch('http://localhost:5000/user',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err.message))
  }
  return (
    <div className="">
      <div className="lg:max-w-[1350px] mx-auto py-5">
        <div className="md:w-1/4 rounded-sm mx-auto text-center bg-white shadow-2xl py-5">
          <h2 className="text-gray-700 font-bold text-xl">Create an Account</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              name="name"
              className="input input-bordered bg-white text-xs w-4/5 py-2 px-4 rounded mt-2"
              placeholder="Full Name"
              required
              {...register("name")}
            />
            {/* <input
              type="number"
              name="number"
              className="input text-xs input-bordered w-4/5 py-2 px-4 rounded mt-3 m-0 -webkit-appearance-none"
              placeholder="Phone"
              required
              {...register("number")}
            /> */}
            <input
              type="email"
              name="email"
              className="input text-xs bg-white input-bordered w-4/5 py-2 px-4 rounded mt-3"
              placeholder="email"
              required
              {...register("email")}
            />
            <input
              type="password"
              name="password"
              className="input text-xs bg-white input-bordered w-4/5 py-2 px-4 rounded mt-3"
              placeholder="Password"
              required
              {...register("password")}
            />
            <input
              type="password"
              name="confirmPassword"
              className="input text-xs bg-white input-bordered w-4/5 py-2 px-4 rounded mt-3"
              placeholder="confirm password"
              required
              {...register("confirmPassword")}
            />
            <div>
              <span className="text-red-500">{passwordError}</span>
            </div>
            <div className="border-t-2 mt-5 w-4/5 mx-auto"></div>
            <div className="flex w-4/5 items-center mt-2 mx-auto">
              <input
                type="checkbox"
                name="check"
                id="purmition"
                className="mr-1 w-5"
                onClick={handleCheck}
              />
              <label
                htmlFor="purmition"
                className="text-start text-xs font-bold"
              >
                <small>
                  By signing up you agree to our terms and conditions.
                </small>
              </label>
            </div>
            <button
              type="submit"
              href="#_"
              className="px-5 py-2 mt-2 relative rounded group text-white font-medium inline-block w-4/5"
              disabled={check}
            >
              <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
              <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
              <span className="relative">
                {check ? "Disabled" : "Register"}
              </span>
            </button>
          </form>
          <div className="flex items-center justify-center mt-5">
            <div className="w-1/5 h-[2px] bg-gray-400"></div>
            <div className="mx-5">Or Join With</div>
            <div className="w-1/5 h-[2px] bg-gray-400"></div>
          </div>
          <div className="mt-3">
            <SocialLink></SocialLink>
          </div>
          <div className="mt-2">
            <p className="inline mr-2">Already have an Account</p>
            <Link to="/login" className="text-blue-600 underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
