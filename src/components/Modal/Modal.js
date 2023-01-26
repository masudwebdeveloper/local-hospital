import React from "react";

const Modal = ({ user, setUser, refetch }) => {
  console.log(user);
  const handleEdit = (e) => {
    e.preventDefault();
    const form = e.target;
    const userData = {
      name: form.name.value,
      email: form.email.value,
    };
    console.log(userData);
    fetch(`https://local-hospital-server.vercel.app/user/${user._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(null);
        refetch();
        // window.location.reload();
        form.reset();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="modalOpen" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="modalOpen"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleEdit}>
            <label htmlFor="name">
              <strong>Name:</strong>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.name}
              className="input input-bordered my-5 w-full"
            />
            <br />
            <label htmlFor="email">
              <strong>Email:</strong>
            </label>
            <input
              type="email"
              name="email"
              className="input input-bordered my-5 w-full"
              defaultValue={user?.email}
            />
            <button className="btn btn-success ml-48">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
