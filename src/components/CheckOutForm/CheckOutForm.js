import React from "react";
import { useForm } from "react-hook-form";

const CheckOutForm = () => {
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
    const bookingData = {
      name,
      phone: number,
      email,
      doctorName,
      gender,
      specialty,
      date,
      time,
    };
    

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
              className="input input-bordered bg-white text-xs w-full py-1 px-4 rounded mt-2 mb-3"
              placeholder="email"
              required
              {...register("email")}
            />
            <label htmlFor="" className="mt-5">
              Specialty for consultation <span className="text-red-500">*</span>
            </label>
            <select
              {...register("specialty")}
              name="specialty"
              className="select select-bordered mt-2 w-full"
            >
              <option disabled selected>
                Choose Specialy
              </option>
              <option>Unorologies</option>
              <option>Marge</option>
              <option>Bart</option>
            </select>
          </div>
          <div className="w-1/2">
            <label htmlFor="">
              Doctor <span className="text-red-500">*</span>
            </label>
            <select
              {...register("doctorName")}
              name="doctorName"
              className="select select-bordered mt-2 w-full mb-3"
            >
              <option disabled selected>
                Choose one
              </option>
              <option>Dr. Mohammad Najim Uddin</option>
              <option>Dr. Hamidul Haque</option>
              <option>Dr. A. M. Shafayet Hossain</option>
            </select>
            <label htmlFor="">
              Gender <span className="text-red-500">*</span>
            </label>
            <select
              {...register("gender")}
              name="gender"
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
                {...register("minute")}
                className="select select-bordered mt-2 ml-2"
              >
                <option disabled selected>
                  Min
                </option>
                {[...Array(13).keys()].map((i) => (
                  <option value={i}>{i * 5}</option>
                ))}
              </select>
              <select
                {...register("ampm")}
                name="ampm"
                className="select select-bordered mt-2 ml-2"
              >
                <option selected>AM</option>
                <option>PM</option>
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
