import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const CheckOutForm = () => {
  const doctor = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(doctor, user);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const {
      name,
      number,
      email,
      specialty,
      doctorName,
      gender,
      month,
      day,
      year,
      hour,
      minute,
      ampm,
    } = data;
    console.log(minute);
    const date = `${day} ${month}, ${year}`;
    const time = `${hour}:${minute} ${ampm}`;
    const appointmentData = {
      name,
      phone: number,
      email,
      doctorName,
      gender,
      specialty,
      date,
      time,
    };

    fetch("https://local-hospital-server.vercel.app/appointments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointmentData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          navigate("/myappointments");
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="w-3/5 mx-auto bg-gray-300 p-10 text-center mt-10 rounded">
      <h1 className="text-5xl text-gray-800 mb-10">Make Appointment</h1>
      <form onSubmit={handleSubmit(onSubmit)} action="">
        <div className="flex justify-center gap-5">
          <div className="w-1/2">
            <label htmlFor="" className="mt-5">
              Patient's Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              className="input input-bordered bg-white text-xs w-full py-1 px-4 rounded mt-2 mb-3"
              placeholder="Full Name"
              required
              {...register("name")}
            />
            <label htmlFor="" className="mt-5">
              Mobile <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="number"
              className="input input-bordered bg-white text-xs w-full py-1 px-4 rounded mt-2 mb-3"
              placeholder="number"
              required
              {...register("number")}
            />
            <label htmlFor="" className="mt-5">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              className="input input-bordered bg-white text-xs w-full py-1 px-4 rounded mt-2 mb-3"
              placeholder="email"
              required
              readOnly
              {...register("email")}
            />
            <label htmlFor="" className="mt-5">
              Specialty for consultation <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="specialty"
              defaultValue={doctor.department}
              readOnly
              className="input input-bordered bg-white text-xs w-full py-1 px-4 rounded mt-2 mb-3"
              placeholder="Full Name"
              required
              {...register("specialty")}
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="">
              Doctor <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="doctorName"
              defaultValue={doctor.name}
              className="input input-bordered bg-white text-xs w-full py-1 px-4 rounded mt-2 mb-3"
              placeholder="Full Name"
              required
              readOnly
              {...register("doctorName")}
            />
            <label htmlFor="">
              Gender <span className="text-red-500">*</span>
            </label>
            <select
              {...register("gender", { required: true })}
              name="gender"
              required="required"
              className="select select-bordered mt-2 w-full mb-3"
            >
              <option value="" disabled selected>
                Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <label htmlFor="">
              Date <span className="text-red-500">*</span>
            </label>
            <div className="flex mb-3">
              <select
                name="month"
                required="required"
                {...register("month", { required: true })}
                className="select select-bordered mt-2"
              >
                <option value="" disabled selected>
                  Month
                </option>
                <option value="Jan">Jan</option>
                <option value="Feb">Feb</option>
                <option value="Mar">Mar</option>
                <option value="Apr">Apr</option>
                <option value="May">May</option>
                <option value="Jun">Jun</option>
                <option value="Jul">Jul</option>
                <option value="Aug">Aug</option>
                <option value="Sep">Sep</option>
                <option value="Oct">Oct</option>
                <option value="Nov">Nov</option>
                <option value="Dec">Dec</option>
              </select>
              <select
                name="day"
                required="required"
                className="select select-bordered mt-2 ml-2"
                {...register("day", { required: true })}
              >
                <option value="" disabled selected>
                  Day
                </option>
                {[...Array(31).keys()].map((i) => (
                  <option value={i + 1}>{i + 1}</option>
                ))}
              </select>
              <select
                {...register("year", { required: true })}
                name="year"
                required="required"
                className="select select-bordered mt-2 ml-2"
              >
                <option value="" disabled selected>
                  year
                </option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </select>
            </div>
            <label htmlFor="">
              Time <span className="text-red-500">*</span>
            </label>
            <div className="flex">
              <select
                {...register("hour", { required: true })}
                name="hour"
                required="required"
                className="select select-bordered mt-2"
              >
                <option value="" disabled selected>
                  Hours
                </option>
                {[...Array(12).keys()].map((i) => (
                  <option value={i + 1}>{i + 1}</option>
                ))}
              </select>
              <select
                name="minute"
                required="required"
                {...register("minute", { required: true })}
                className="select select-bordered mt-2 ml-2"
              >
                <option value="" disabled selected>
                  Min
                </option>
                {[...Array(13).keys()].map((i) => (
                  <option value={i * 5}>{i * 5}</option>
                ))}
              </select>
              <select
                {...register("ampm", { required: true })}
                name="ampm"
                required="required"
                className="select select-bordered mt-2 ml-2"
              >
                <option value="AM" selected>
                  AM
                </option>
                <option value="PM">PM</option>
              </select>
            </div>
          </div>
        </div>
        <button className="btn mt-5">Submit</button>
      </form>
    </div>
  );
};

export default CheckOutForm;
