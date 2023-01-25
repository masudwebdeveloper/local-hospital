import React from "react";
import { Link } from "react-router-dom";

const DoctorInfo = ({ doctor }) => {
  const { _id,name, specialist, image, title, department } = doctor;
  return (
    <div className="flex flex-col md:flex-row justify-center items-center border-b-2 px-3 md:px-0 md:w-3/5 mx-auto py-10">
      <div className="w-2/5">
      <img src={image} alt={title} />
      </div>
      <div>
        <h1 className="text-2xl font-semibold">{name}</h1>
        <h2 className="text-xl font-medium">{specialist}</h2>
        <h4 className="my-5 font-semibold">{title}</h4>
        <p className="mb-10 font-semibold">Department: {department}</p>
        <Link to={`/checkoutform/${_id}`} className="bg-gray-200 px-4 py-2 mt-3 hover:bg-gray-300 rounded-sm">
            Set Up Appointment
        </Link>
      </div>
    </div>
  );
};

export default DoctorInfo;
