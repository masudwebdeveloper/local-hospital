import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";

const AllAppointments = () => {
  const { data: allappointments = [], refetch } = useQuery({
    queryKey: ["allappointments"],
    queryFn: async () => {
      const res = await fetch(
        "https://local-hospital-server.vercel.app/allappointments"
      );
      const data = res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    const process = window.confirm(
      "are you sure your dont be again this appointment"
    );
    if (process) {
      fetch(`https://local-hospital-server.vercel.app/myappointments/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("appointment successfully cancel");
            refetch();
          }
        })
        .catch((err) => console.error(err.message));
    }
  };
  return (
    <div className="overflow-x-auto mt-5">
      <table className="lg:min-w-[1240px] mx-auto divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Patient's Name
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Email
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Phone
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Date
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Time
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900">
              Action
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {allappointments.map((appointment) => (
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {appointment.name}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {appointment.email}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {appointment.phone}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {appointment.date}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {appointment.time}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-center">
                <button
                  className="mr-5 hover:bg-gray-200 p-1 rounded-sm text-red-500 hover:text-red-700 "
                  onClick={() => handleDelete(appointment._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllAppointments;
