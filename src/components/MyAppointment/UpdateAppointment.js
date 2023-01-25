import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const UpdateAppointment = () => {
  const doctor = useLoaderData();
  console.log(doctor);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
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
    const date = `${day} ${month}, ${year}`;
    const time = `${hour}:${minute} ${ampm}`;
    const updateData = {
      name,
      phone: number,
      email,
      doctorName,
      gender,
      specialty,
      date,
      time,
    };

    fetch(`http://localhost:5000/appointments/${doctor._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          navigate("/myappointments");
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="w-3/5 mx-auto bg-gray-300 p-10 text-center mt-10 rounded">
      <h1 className="text-5xl text-gray-800 mb-5">Make Appointment</h1>
      <p className="text-2xl font-semibold mb-5">Please currectly filup all the filed</p>
      <form onSubmit={handleSubmit(onSubmit)} action="">
        <div className="flex justify-center gap-5">
          <div className="w-1/2">
            <label htmlFor="" className="mt-5">
              Patient's Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={doctor.name}
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
              defaultValue={doctor.phone}
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
              defaultValue={doctor.email}
              className="input input-bordered bg-white text-xs w-full py-1 px-4 rounded mt-2 mb-3"
              placeholder="email"
              required
              {...register("email")}
            />
            <label htmlFor="" className="mt-5">
              Specialty for consultation <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="specialty"
              defaultValue={doctor.specialty}
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
              defaultValue={doctor.doctorName}
              className="input input-bordered bg-white text-xs w-full py-1 px-4 rounded mt-2 mb-3"
              placeholder="Full Name"
              required
              {...register("doctorName")}
            />
            <label htmlFor="">
              Gender <span className="text-red-500">*</span>
            </label>
            <select
              {...register("gender")}
              name="gender"
              required
              className="select select-bordered mt-2 w-full mb-3"
            >
              <option disabled selected>
                Gender
              </option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <label htmlFor="">
              Date <span className="text-red-500">*</span>
            </label>
            <div className="flex mb-3">
              <select
                name="month"
                required
                {...register("month")}
                className="select select-bordered mt-2"
              >
                <option disabled selected>
                  Month
                </option>
                <option>Jan</option>
                <option>Feb</option>
                <option>Mar</option>
                <option>Apr</option>
                <option>May</option>
                <option>Jun</option>
                <option>Jul</option>
                <option>Aug</option>
                <option>Sep</option>
                <option>Oct</option>
                <option>Nov</option>
                <option>Dec</option>
              </select>
              <select
                name="day"
                required
                {...register("day")}
                className="select select-bordered mt-2 ml-2"
              >
                <option disabled selected>
                  Day
                </option>
                {[...Array(31).keys()].map((i) => (
                  <option value={i + 1}>{i + 1}</option>
                ))}
              </select>
              <select
                {...register("year")}
                required
                name="year"
                className="select select-bordered mt-2 ml-2"
              >
                <option disabled selected>
                  Year
                </option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
              </select>
            </div>
            <label htmlFor="">
              Time <span className="text-red-500">*</span>
            </label>
            <div className="flex">
              <select
                {...register("hour")}
                required
                name="hour"
                className="select select-bordered mt-2"
              >
                <option disabled selected>
                  Hours
                </option>
                {[...Array(12).keys()].map((i) => (
                  <option value={i + 1}>{i + 1}</option>
                ))}
              </select>
              <select
                name="minute"
                required
                {...register("minute")}
                className="select select-bordered mt-2 ml-2"
              >
                <option disabled selected>
                  Min
                </option>
                {[...Array(13).keys()].map((i) => (
                  <option value={i * 5}>{i * 5}</option>
                ))}
              </select>
              <select
                {...register("ampm")}
                required
                name="ampm"
                className="select select-bordered mt-2 ml-2"
              >
                <option selected>AM</option>
                <option>PM</option>
              </select>
            </div>
          </div>
        </div>
        <button className="btn bg-green-400 mt-5">Save</button>
      </form>
    </div>
  );
};

export default UpdateAppointment;
