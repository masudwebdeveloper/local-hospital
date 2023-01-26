import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    if (email) {
      fetch(`https://local-hospital-server.vercel.app/user/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data.isAdmin);
          setIsAdminLoading(false);
        })
        .catch((err) => console.error(err.message));
    }
  }, [email]);
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
