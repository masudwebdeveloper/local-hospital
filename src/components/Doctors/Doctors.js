import { useQuery } from "@tanstack/react-query";
import React from "react";
import DoctorInfo from "./DoctorInfo";

const Doctors = () => {
  const { data: doctors = [] } = useQuery({
    queryKey: ["doctorsData"],
    queryFn: async () => {
      const res = await fetch(
        "https://local-hospital-server.vercel.app/doctors"
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="mb-20">
      <h3 className="text-5xl text-gray-600 text-center mt-2 pb-2 border-b-2 lg:max-w-[1240px] mx-auto">
        Our Doctors
      </h3>
      <div>
        {doctors.map((doctor) => (
          <DoctorInfo key={doctor.id} doctor={doctor}></DoctorInfo>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
