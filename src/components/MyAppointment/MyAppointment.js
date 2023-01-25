import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);
  const { data: myAppointments = [], refetch } = useQuery({
    queryKey: ["myAppointments"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/myappointments/${user.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    const process = window.confirm(
      "are you sure your dont be again this appointment"
    );
    if (process) {
      fetch(`http://localhost:5000/myappointments/${id}`,{
        method: 'DELETE'
      })
        .then((res) => res.json())
        .then((data) => {
            if(data.deletedCount > 0){
                toast.success("your appointment successfully cancel")
                refetch();
            }
        })
        .catch((err) => console.error(err.message));
    }
  };
  return (
    <div class="overflow-x-auto">
      <table class="lg:min-w-[1240px] mx-auto divide-y divide-gray-200 text-sm">
        <thead class="bg-gray-100">
          <tr>
            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Patient's Name
            </th>
            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Email
            </th>
            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Phone
            </th>
            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Date
            </th>
            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Time
            </th>
            <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              action
            </th>
          </tr>
        </thead>

        <tbody class="divide-y divide-gray-200">
          {myAppointments.map((appointment) => (
            <tr>
              <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {appointment.name}
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                {appointment.email}
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                {appointment.phone}
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                {appointment.date}
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                {appointment.time}
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-red-500">
                <button onClick={() => handleDelete(appointment._id)}>
                  Delete
                </button>
                <Link to={`/updateappointment/${appointment._id}`}>
                  Update
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyAppointment;
