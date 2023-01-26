import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import Modal from "../Modal/Modal";

const Allusers = () => {
    const [user, setUser] = useState(null)
    const [modalOpen, setModalOpen] = useState(true)
  const { data: allusers = [], refetch } = useQuery({
    queryKey: ["allusers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/allusers");
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    const process = window.confirm(
      "are you sure do you wanna delete this user"
    );
    if (process) {
      fetch(`http://localhost:5000/user/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("This user deleted successfully");
            refetch();
          }
        })
        .catch((err) => console.error(err.message));
    }
  };
  return (
    <div className="overflow-x-auto">
      <table className="lg:min-w-[1240px] mx-auto divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Name
            </th>
            <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
              Email
            </th>

            <th className="whitespace-nowrap px-4 py-2 text-center font-medium text-gray-900">
              action
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {allusers.map((user) => (
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                {user.name}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                {user.email}
              </td>
              <td className="whitespace-nowrap px-4 py-2 text-center">
                <button
                  className="mr-5 hover:bg-gray-200 p-1 rounded-sm text-red-500 hover:text-red-700 "
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </button>
                <label onClick={()=>setUser(user)} htmlFor="modalOpen" className="mr-5 hover:bg-gray-200 p-1 rounded-sm text-green-500 hover:text-green-700 ">
                  Edit
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {
        user && <Modal refetch={refetch}  user={user} setUser={setUser}></Modal>
      }
    </div>
  );
};

export default Allusers;
